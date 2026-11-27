"use client";

// Keeps "#section" fragments out of the address bar, site-wide.
//
// Links such as /about#approach, /contact#contact-form or in-page "#features"
// still take the visitor to the right section, but the URL stays clean
// (/about, /contact, the current page):
//   • same-page links: the click is intercepted and the section is scrolled
//     into view, with no history entry and no "#" in the URL;
//   • links to a section on another page: we navigate to the clean path and
//     scroll to the section once the new page has rendered;
//   • arriving with a fragment (old bookmark, external link): we scroll to the
//     section and strip the fragment with history.replaceState.
//
// The capture-phase listener runs before Next.js <Link>'s own click handler,
// which skips navigation when the event is already default-prevented. Other
// click handlers (for example closing the mobile menu) still run.
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const PENDING_KEY = "cm:scroll-target";

function scrollBehaviour() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

/** Scrolls to the element with this id and moves keyboard focus to it. Returns false if it is not on the page. */
function scrollToId(id) {
  if (!id) return false;
  const el = document.getElementById(decodeURIComponent(id));
  if (!el) return false;
  el.scrollIntoView({ behavior: scrollBehaviour(), block: "start" });
  // Match native fragment navigation for keyboard and screen-reader users.
  if (!el.hasAttribute("tabindex") && !/^(A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/.test(el.tagName)) {
    el.setAttribute("tabindex", "-1");
  }
  el.focus({ preventScroll: true });
  return true;
}

/** Tries to scroll for up to ~1.5s while the new page streams in. */
function scrollWhenReady(id) {
  let tries = 0;
  const attempt = () => {
    if (scrollToId(id) || tries++ > 30) return;
    window.setTimeout(attempt, 50);
  };
  window.requestAnimationFrame(attempt);
}

/** Removes any fragment from the current URL without adding a history entry. */
function stripHash() {
  if (!window.location.hash && !window.location.href.endsWith("#")) return;
  const { pathname, search } = window.location;
  window.history.replaceState(window.history.state, "", pathname + search);
}

export default function HashlessAnchors() {
  const router = useRouter();
  const pathname = usePathname();

  // Intercept clicks on links that carry a fragment.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
      if (!a) return;
      if (a.hasAttribute("download")) return;
      const target = a.getAttribute("target");
      if (target && target !== "_self") return;

      const raw = a.getAttribute("href");
      if (!raw || !raw.includes("#")) return;

      const url = new URL(raw, window.location.href);
      if (url.origin !== window.location.origin) return; // external sites keep their own behaviour

      e.preventDefault();
      const id = url.hash.slice(1);
      const samePage = url.pathname === window.location.pathname && url.search === window.location.search;

      if (samePage) {
        if (id) scrollToId(id);
        stripHash();
        return;
      }

      if (id) window.sessionStorage.setItem(PENDING_KEY, id);
      router.push(url.pathname + url.search);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // After each navigation: finish a pending section scroll, and clean any fragment
  // that arrived in the URL (first load, bookmarks, links from other sites).
  useEffect(() => {
    const pending = window.sessionStorage.getItem(PENDING_KEY);
    const fromUrl = window.location.hash.slice(1);
    window.sessionStorage.removeItem(PENDING_KEY);

    const id = pending || fromUrl;
    if (id) scrollWhenReady(id);
    stripHash();
  }, [pathname]);

  // Browsers can also add a fragment on their own (for example a form's
  // :target navigation); keep the URL clean whenever that happens.
  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) scrollToId(id);
      stripHash();
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
