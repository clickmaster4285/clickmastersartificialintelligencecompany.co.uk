"use client";

/*
 * Site header + main navigation (desktop and mobile share ONE list, so every
 * link appears once in the server-rendered HTML).
 *
 * - Data lives in app/config/navigation.ts.
 * - Dropdowns follow the WAI-ARIA "disclosure navigation" pattern: the parent
 *   label is a real link to its index page, and the chevron button next to it
 *   toggles the panel. Panels are always in the DOM and hidden with CSS.
 * - Desktop (>=1024px): panels open on hover, chevron click, or ArrowDown.
 * - Mobile: slide-in panel with accordion sections; body scroll is locked.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  RiArchiveStackLine, RiArrowRightLine, RiArrowRightUpLine, RiBankLine, RiBookOpenLine, RiBrainLine,
  RiBuilding2Line, RiChatSmile3Line, RiCheckLine, RiCloudLine, RiCodeSSlashLine, RiContactsBook2Line,
  RiDatabase2Line, RiGlobalLine, RiGraduationCapLine, RiHeartPulseLine, RiHome4Line, RiHospitalLine,
  RiInstanceLine, RiMapPin2Line, RiRobot2Line, RiRocket2Line, RiRouteLine, RiSettings3Line,
  RiShoppingCart2Line, RiSmartphoneLine, RiSparklingFill, RiStackLine, RiTruckLine,
  RiApps2Line, RiReactjsLine, RiNextjsLine, RiNodejsLine, RiFlutterFill, RiAmazonLine, RiCpuLine,
  RiTeamLine, RiUserAddLine, RiArticleLine, RiBook2Line, RiToolsLine, RiLayout4Line, RiBookMarkedLine,
  RiQuestionAnswerLine, RiSparkling2Line, RiFileSearchLine, RiMagicLine, RiFlowChart, RiNodeTree, RiEyeLine,
  RiLineChartLine, RiLightbulbFlashLine,
} from "react-icons/ri";
import { SiLaravel, SiPython } from "react-icons/si";
import { logo } from "../assets";
import { NAV_CTA, childrenOf, isVisible, menuChildrenOf, visibleGroups, visibleNavItems } from "../config/navigation";

// Icon keys used in app/config/navigation.ts. All icons are decorative.
const NAV_ICONS = {
  code: RiCodeSSlashLine, web: RiGlobalLine, mobile: RiSmartphoneLine, rocket: RiRocket2Line,
  robot: RiRobot2Line, brain: RiBrainLine, chat: RiChatSmile3Line, stack: RiStackLine,
  cloud: RiCloudLine, database: RiDatabase2Line, building: RiBuilding2Line, contacts: RiContactsBook2Line,
  graduation: RiGraduationCapLine, hospital: RiHospitalLine, archive: RiArchiveStackLine, truck: RiTruckLine,
  health: RiHeartPulseLine, bank: RiBankLine, cart: RiShoppingCart2Line, book: RiBookOpenLine,
  home: RiHome4Line, route: RiRouteLine, instance: RiInstanceLine, settings: RiSettings3Line, pin: RiMapPin2Line,
  apps: RiApps2Line, react: RiReactjsLine, nextjs: RiNextjsLine, node: RiNodejsLine, python: SiPython,
  laravel: SiLaravel, flutter: RiFlutterFill, aws: RiAmazonLine, cpu: RiCpuLine, team: RiTeamLine,
  useradd: RiUserAddLine, article: RiArticleLine, guide: RiBook2Line, tools: RiToolsLine,
  template: RiLayout4Line, glossary: RiBookMarkedLine, faq: RiQuestionAnswerLine,
  sparkle: RiSparkling2Line, search: RiFileSearchLine, magic: RiMagicLine, flow: RiFlowChart, node: RiNodeTree,
  eye: RiEyeLine, chart: RiLineChartLine, bulb: RiLightbulbFlashLine,
};

// Visible header items (config is static, so compute once).
const navItems = visibleNavItems();

const DESKTOP_QUERY = "(min-width: 1024px)";
const isDesktop = () => typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches;
const panelIdFor = (label) => `nav-panel-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#AF00E8]";

function isActive(pathname, href) {
  const path = href.split("#")[0] || "/";
  if (path === "/") return false;
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** A top-level item is active on its own page, any child page, or its activePaths. */
function isItemActive(pathname, item) {
  return (
    isActive(pathname, item.href) ||
    childrenOf(item).some((c) => isActive(pathname, c.href)) ||
    (item.activePaths ?? []).some((p) => isActive(pathname, p))
  );
}

function Chevron({ open }) {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={`motion-safe:transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * One item inside a dropdown / mega menu: icon tile, label, one-line description.
 * Only the label is inside the <a>, so the anchor text stays keyword-clean
 * ("AI Chatbot Development"); a stretched ::after makes the whole card clickable.
 */
function ChildLink({ child, pathname, onNavigate, compact = false }) {
  const href = child.href;
  const current = pathname === href;
  const Icon = NAV_ICONS[child.icon];
  return (
    <li
      className={`group/item relative flex min-h-11 gap-3 rounded-xl px-3 lg:px-2.5 ${compact ? "items-center py-2" : "items-center lg:items-start py-2 lg:py-2.5"}
        motion-safe:transition-colors has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-1 has-[a:focus-visible]:outline-[#AF00E8]
        ${current ? "bg-[#f7effa]" : "hover:bg-[#faf5fd] has-[a:focus-visible]:bg-[#faf5fd]"}`}
    >
      {Icon && (
        <span
          aria-hidden="true"
          className={`flex shrink-0 items-center justify-center rounded-lg ring-1 ring-[#AF00E8]/10 motion-safe:transition-all motion-safe:duration-200
            ${compact ? "h-8 w-8" : "h-8 w-8 lg:h-10 lg:w-10"}
            ${current
              ? "bg-[#AF00E8] text-white"
              : "bg-gradient-to-br from-[#f7effa] to-[#efe0f7] text-[#AF00E8] group-hover/item:from-[#AF00E8] group-hover/item:to-[#7c00c9] group-hover/item:text-white group-hover/item:shadow-[0_6px_16px_rgba(175,0,232,0.35)] group-hover/item:ring-transparent"}`}
        >
          <Icon className={compact ? "h-4 w-4" : "h-4 w-4 lg:h-[18px] lg:w-[18px]"} />
        </span>
      )}
      <span className="min-w-0">
        <span className="flex items-center gap-1">
          <Link
            href={href}
            onClick={onNavigate}
            aria-current={current ? "page" : undefined}
            className={`text-[15px] lg:text-sm leading-snug outline-none after:absolute after:inset-0 after:rounded-xl after:content-[''] ${
              current ? "font-semibold text-[#AF00E8]" : "font-medium text-gray-900 group-hover/item:text-[#AF00E8]"
            }`}
          >
            {child.label}
          </Link>
          <RiArrowRightLine
            aria-hidden="true"
            className="hidden lg:block h-3.5 w-3.5 shrink-0 text-[#AF00E8] opacity-0 -translate-x-1 motion-safe:transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0"
          />
        </span>
        {child.description && !compact && (
          <span className="mt-0.5 hidden lg:block text-xs leading-relaxed text-gray-500">{child.description}</span>
        )}
      </span>
    </li>
  );
}

function PanelFooterLink({ link, onNavigate }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={`group/foot inline-flex whitespace-nowrap items-center gap-1.5 min-h-11 lg:min-h-0 px-3 lg:px-0 py-2 lg:py-0 text-sm font-semibold text-[#AF00E8] rounded-md ${FOCUS_RING}`}
    >
      {link.label}
      <RiArrowRightLine aria-hidden="true" className="h-4 w-4 motion-safe:transition-transform group-hover/foot:translate-x-1" />
    </Link>
  );
}

/** Dark highlight card beside the Services mega menu (wide desktop only). */
function FeaturedCard({ featured, onNavigate }) {
  return (
    <div className="relative hidden xl:flex flex-col overflow-hidden rounded-2xl bg-[#0d0a12] p-6 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#AF00E8]/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-[#5EEAD4]/20 blur-3xl" />
      <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#e9c2ff] ring-1 ring-white/15">
        <RiSparklingFill aria-hidden="true" className="h-3.5 w-3.5" />
        {featured.eyebrow}
      </span>
      <p className="relative mt-4 text-[26px] font-bold leading-tight" style={{ fontFamily: "Garamond, serif" }}>
        {featured.title}
      </p>
      <p className="relative mt-2 text-[13px] leading-relaxed text-gray-300">{featured.text}</p>
      <ul className="relative mt-4 space-y-2">
        {featured.points.map((pt) => (
          <li key={pt} className="flex items-center gap-2 text-[13px] text-gray-200">
            <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5EEAD4]/15 text-[#5EEAD4]">
              <RiCheckLine className="h-3.5 w-3.5" />
            </span>
            {pt}
          </li>
        ))}
      </ul>
      <Link
        href={featured.cta.href}
        onClick={onNavigate}
        className={`group/cta relative mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#AF00E8] hover:bg-[#f7effa] motion-safe:transition-colors ${FOCUS_RING}`}
      >
        {featured.cta.label}
        <RiArrowRightUpLine aria-hidden="true" className="h-4 w-4 motion-safe:transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
      </Link>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null); // label of the open dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  const headerRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeTimer = useRef(null);

  // Close everything on route change (adjusting state during render).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const closeAll = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  // Shadow once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Leaving the mobile breakpoint closes the mobile panel.
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Click outside closes an open dropdown.
  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  // Global Escape: close dropdown first, then the mobile panel.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (openMenu) {
        const btn = document.querySelector(`[aria-controls="${panelIdFor(openMenu)}"]`);
        setOpenMenu(null);
        btn?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openMenu, mobileOpen]);

  const openOnHover = (label) => {
    if (!isDesktop()) return;
    clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeOnLeave = () => {
    if (!isDesktop()) return;
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const focusFirstIn = (label) => {
    requestAnimationFrame(() => {
      document.getElementById(panelIdFor(label))?.querySelector("a")?.focus();
    });
  };

  // ArrowLeft/Right between top-level links (desktop); ArrowDown opens a panel.
  const onTopKeyDown = (e, item) => {
    const hasPanel = menuChildrenOf(item).length > 0;
    if (e.key === "ArrowDown" && hasPanel) {
      e.preventDefault();
      setOpenMenu(item.label);
      focusFirstIn(item.label);
      return;
    }
    if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && isDesktop()) {
      const tops = [...headerRef.current.querySelectorAll("[data-toplink]")];
      const i = tops.indexOf(e.currentTarget);
      if (i === -1) return;
      e.preventDefault();
      const next = tops[(i + (e.key === "ArrowRight" ? 1 : -1) + tops.length) % tops.length];
      setOpenMenu(null);
      next.focus();
    }
  };

  // ArrowUp/Down, Home/End inside an open panel.
  const onPanelKeyDown = (e, item) => {
    const links = [...e.currentTarget.querySelectorAll("a")];
    const i = links.indexOf(document.activeElement);
    let next = null;
    if (e.key === "ArrowDown") next = links[(i + 1) % links.length];
    else if (e.key === "ArrowUp") {
      if (i <= 0) {
        e.preventDefault();
        document.querySelector(`[aria-controls="${panelIdFor(item.label)}"]`)?.focus();
        return;
      }
      next = links[i - 1];
    } else if (e.key === "Home") next = links[0];
    else if (e.key === "End") next = links[links.length - 1];
    if (next) {
      e.preventDefault();
      next.focus();
    }
  };

  // Desktop only: close a dropdown when focus moves out of it (e.g. Tab past
  // the last link). Not on mobile, where collapsing an accordion on blur would
  // move the tapped link before its click event fires.
  const onItemBlur = (e, label) => {
    if (!isDesktop()) return;
    if (!e.currentTarget.contains(e.relatedTarget) && openMenu === label) setOpenMenu(null);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 h-[72px] lg:h-[88px] motion-safe:transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      {/* Translucent, blurred background. Kept on a separate layer because
          backdrop-filter on the header itself would break the fixed mobile panel. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 backdrop-blur-md motion-safe:transition-colors ${
          scrolled || mobileOpen ? "bg-white/90" : "bg-white"
        }`}
      />

      <div className="relative mx-auto flex h-full w-full max-w-[1728px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-5 xl:px-10 2xl:px-[110px]">
        <Link href="/" aria-label="ClickMasters home" onClick={closeAll} className={`shrink-0 rounded ${FOCUS_RING}`}>
          <img
            src={logo}
            alt="ClickMasters"
            width={177}
            height={24}
            className="h-[18px] w-auto sm:h-6 lg:h-5 xl:h-6"
          />
        </Link>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`lg:flex lg:flex-1 lg:justify-center
            max-lg:fixed max-lg:inset-x-0 max-lg:top-[72px] max-lg:bottom-0 max-lg:overflow-y-auto max-lg:overscroll-contain
            max-lg:bg-white max-lg:border-t max-lg:border-gray-100 max-lg:px-4 max-lg:pt-2 max-lg:pb-10
            motion-safe:max-lg:duration-300
            ${mobileOpen
              ? "motion-safe:max-lg:transition-[transform,opacity]"
              : "max-lg:invisible max-lg:opacity-0 max-lg:translate-x-full motion-safe:max-lg:transition-[transform,opacity,visibility]"}`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-0 xl:gap-1.5 2xl:gap-3 max-lg:divide-y max-lg:divide-gray-100">
            {navItems.map((item, index) => {
              // Links shown in this item's panel (some pages are hub-only, see inMenu).
              const kids = menuChildrenOf(item);
              const hasPanel = kids.length > 0;
              const isOpen = openMenu === item.label;
              const active = isItemActive(pathname, item);
              const panelId = panelIdFor(item.label);
              const mega = Boolean(item.groups);
              const footerLinks = (item.footerLinks ?? []).filter(isVisible);
              // Dropdowns of items near the right end of the bar open right-aligned
              // so they never spill past the viewport.
              const alignRight = !mega && index >= navItems.length - 3;

              const topLinkClass = `flex items-center min-h-11 rounded-md px-2 lg:px-1 xl:px-2 text-base lg:text-[13px] xl:text-[15px] whitespace-nowrap motion-safe:transition-colors ${FOCUS_RING} ${
                active ? "text-[#AF00E8] font-semibold" : "text-gray-800 hover:text-[#AF00E8]"
              }`;

              return (
                <li
                  key={item.label}
                  className={mega ? "lg:static" : "relative"}
                  onMouseEnter={hasPanel ? () => openOnHover(item.label) : undefined}
                  onMouseLeave={hasPanel ? closeOnLeave : undefined}
                  onBlur={hasPanel ? (e) => onItemBlur(e, item.label) : undefined}
                >
                  <div className="flex items-center max-lg:justify-between">
                    <Link
                      href={item.href}
                      data-toplink=""
                      onClick={closeAll}
                      onKeyDown={(e) => onTopKeyDown(e, item)}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`${topLinkClass} max-lg:flex-1`}
                    >
                      {item.label}
                    </Link>

                    {hasPanel && (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        aria-haspopup="true"
                        aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} menu`}
                        onClick={() => setOpenMenu(isOpen ? null : item.label)}
                        onKeyDown={(e) => onTopKeyDown(e, item)}
                        className={`flex items-center justify-center rounded-md min-w-11 min-h-11 lg:min-w-4 lg:min-h-8 xl:min-w-5 ${FOCUS_RING} ${
                          active || isOpen ? "text-[#AF00E8]" : "text-gray-600 hover:text-[#AF00E8]"
                        }`}
                      >
                        <Chevron open={isOpen} />
                      </button>
                    )}
                  </div>

                  {hasPanel && (
                    <div
                      id={panelId}
                      onKeyDown={(e) => onPanelKeyDown(e, item)}
                      className={`lg:absolute lg:top-full lg:z-50 lg:pt-3 ${alignRight ? "lg:right-0" : "lg:left-1/2 lg:-translate-x-1/2"}
                        ${mega
                          ? "lg:w-[min(880px,calc(100vw_-_2rem))] xl:w-[min(1120px,calc(100vw_-_2rem))]"
                          : "lg:w-[620px]"}
                        motion-safe:lg:duration-200
                        ${isOpen
                          ? "visible opacity-100 lg:translate-y-0 motion-safe:lg:transition-[opacity,transform]"
                          : "max-lg:hidden invisible opacity-0 lg:translate-y-2 motion-safe:lg:transition-[opacity,transform,visibility]"}`}
                    >
                      <div className="relative max-lg:pb-3 max-lg:pl-1 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-[#AF00E8]/10 lg:bg-white lg:shadow-[0_24px_60px_-12px_rgba(40,0,70,0.25)]">
                        {/* Brand gradient accent bar */}
                        <div aria-hidden="true" className="hidden lg:block h-1 w-full bg-gradient-to-r from-[#AF00E8] via-[#d65cff] to-[#5EEAD4]" />

                        {mega ? (
                          <div className="xl:grid xl:grid-cols-[1fr_280px] xl:gap-4 lg:p-4">
                            <div className="grid gap-2 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-0 lg:p-2">
                              {visibleGroups(item).map((group) => (
                                <div key={group.heading}>
                                  <p className="flex items-center gap-2 px-3 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7a1fa2] lg:px-2.5 lg:pb-2 lg:pt-1">
                                    <span aria-hidden="true" className="hidden lg:block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#AF00E8] to-[#5EEAD4]" />
                                    {group.heading}
                                  </p>
                                  <ul className="space-y-0.5">
                                    {group.items.map((child) => (
                                      <ChildLink key={child.href} child={child} pathname={pathname} onNavigate={closeAll} />
                                    ))}
                                  </ul>
                                  {group.viewAll && (
                                    <div className="mt-1 lg:px-2.5">
                                      <PanelFooterLink link={group.viewAll} onNavigate={closeAll} />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                            {item.featured && <FeaturedCard featured={item.featured} onNavigate={closeAll} />}
                          </div>
                        ) : (
                          <div className="lg:p-4">
                            {item.intro && (
                              <div className="hidden lg:block px-2.5 pb-3 pt-1">
                                <p className="text-lg font-bold text-[#1a1a1a]" style={{ fontFamily: "Garamond, serif" }}>
                                  {item.label}
                                </p>
                                <p className="mt-0.5 text-xs text-gray-500">{item.intro}</p>
                              </div>
                            )}
                            <ul className="grid gap-0.5 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-1">
                              {kids.map((child) => (
                                <ChildLink
                                  key={child.href}
                                  child={child}
                                 
                                  pathname={pathname}
                                  onNavigate={closeAll}
                                  compact={!child.description}
                                />
                              ))}
                            </ul>
                          </div>
                        )}

                        {footerLinks.length > 0 && (
                          <div className="lg:flex lg:items-center lg:justify-between lg:gap-4 lg:border-t lg:border-gray-100 lg:bg-gradient-to-r lg:from-[#faf5fd] lg:to-white lg:px-6 lg:py-3.5">
                            <div className="flex flex-wrap gap-x-6">
                              {footerLinks.map((fl) => (
                                <PanelFooterLink key={fl.href} link={fl} onNavigate={closeAll} />
                              ))}
                            </div>
                            <span className="hidden lg:inline text-xs text-gray-500">
                              Free consultation · Agile delivery · UK, US &amp; Pakistan
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* CTA: always visible, on every breakpoint */}
          <Link
            href={NAV_CTA.href}
            onClick={closeAll}
            aria-current={pathname === NAV_CTA.href ? "page" : undefined}
            className={`flex items-center justify-center min-h-11 whitespace-nowrap rounded-md bg-[#AF00E8] px-3 sm:px-5 text-xs sm:text-sm font-medium text-white hover:bg-[#9600c7] motion-safe:transition-colors ${FOCUS_RING}`}
          >
            {/* Full label is always in the markup; "Get a" is visually hidden on very small screens. */}
            <span className="max-[399px]:sr-only">Get a&nbsp;</span>Free Quote
          </Link>

          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => {
              setOpenMenu(null);
              setMobileOpen((o) => !o);
            }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="main-navigation"
            className={`lg:hidden flex items-center justify-center min-w-11 min-h-11 rounded-md text-gray-800 ${FOCUS_RING}`}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
