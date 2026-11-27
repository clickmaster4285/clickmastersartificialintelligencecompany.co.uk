# Deploying the site safely (url audit ticket D-02)

## What the audit saw

Between 20:12 and 20:25 PKT on 25 Nov 2026 the live server:

- served the homepage as an **empty 96 KB document with status 200** (no words, no H1, no `<main>` content),
- took 2.6–4.85 s for some pages and 26 to 40+ s (timeouts) for others,

while every response still carried `x-nextjs-cache: HIT`. At 18:41 and again at ~20:23 the same pages were
complete and answered in 0.16–0.67 s.

## What the code rules out

Every page on this site is **fully static**. `next build` prerenders all 111 routes to HTML
(`○ (Static)` in the build output). Nothing is rendered per request, there is no ISR revalidation and no
data fetching. So a request cannot "fail to render" and fall back to an empty shell. A static page
comes back empty or slow only when **the files on disk or the server process are in a bad state.**

The most likely cause, which matches the 13-minute window, the timeouts and the cache `HIT` on broken
responses, is **running `next build` in the same folder the live `next start` process is serving from**:

- The build deletes and rewrites `.next/` while the server is reading it. Requests in that window get
  half-written or mismatched HTML and chunks: an empty or partial document with a 200 status.
- The build runs up to 15 worker processes and uses all the CPU, so live requests queue for tens of seconds.

(An unused `app/Loading.tsx` file with a capital L was removed as part of this ticket. On a
case-insensitive file system, such as a Windows server, Next.js could treat it as a `loading.tsx`
Suspense fallback: a blank spinner shell.)

To confirm, check the server and process-manager logs for 20:10–20:25 PKT on 25 Nov: a `next build`, a
`git pull` plus build, a deploy hook, or an out-of-memory restart.

## How to deploy without downtime

**Never build in the live directory.** Build a fresh copy, check it, then switch:

```bash
# 1. Build in a NEW release folder (on the server or in CI)
RELEASE=/var/www/clickmasters/releases/$(date +%Y%m%d%H%M%S)
git clone --depth 1 <repo-url> "$RELEASE" && cd "$RELEASE"
npm ci && npm run build          # prebuild regenerates public/icons.svg

# 2. Smoke-test the new build on a spare port before it goes live
PORT=3101 npx next start -p 3101 &
sleep 5 && node scripts/check-pages.mjs http://127.0.0.1:3101 && kill %1

# 3. Switch atomically and reload (pm2 shown; systemd works the same way)
ln -sfn "$RELEASE" /var/www/clickmasters/current
pm2 reload clickmasters          # pm2 app started with cwd /var/www/clickmasters/current

# 4. Check the live site
node scripts/check-pages.mjs https://clickmastersartificialintelligencecompany.co.uk
```

If step 2 fails, the live site is never touched. Keep the previous release folder so you can roll back with
`ln -sfn <previous> current && pm2 reload clickmasters`.

If the server is small, build in CI (GitHub Actions or similar) and copy only the built release to the
server, so a build never competes with live traffic for CPU and memory.

## Guarding against empty 200 responses

- `scripts/check-pages.mjs` fails if any key page returns anything other than 200, has fewer than 200 words
  in `<main>`, has no `<h1>`, or takes longer than 1 s (`MAX_SECONDS` can be overridden). Run it after
  every deploy. Ideally, also run it every few minutes from uptime monitoring (UptimeRobot, Better Stack and
  similar tools can alert on a missing keyword such as "ClickMasters" or the H1 text).
- If a reverse proxy (nginx, Cloudflare) sits in front, let it serve stale content when the origin errors
  (`proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;`). During maintenance,
  answer `503` with `Retry-After`, never a 200 with an empty body.
- Make sure the proxy forwards the `Accept` header to `/_next/image`, so AVIF and WebP are negotiated
  correctly (ticket D-06).

## Acceptance check (re-crawl)

Every HTML page should return ≥ 200 words and respond in under 1 s. Run
`npm run check:pages -- https://clickmastersartificialintelligencecompany.co.uk` and expect `All pages passed.`
