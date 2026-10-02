# CLAUDE.md

Static marketing site for Shan Benson Studio. Plain HTML/CSS/JS: no framework, no build, no package manager.

## Layout
- Pages: `index.html`, `about.html`, `services.html`, `contact.html`
- Styles: `css/style.css` only. Design tokens are CSS variables in `:root`. The mobile breakpoint is `@media (max-width: 720px)`.
- Script: `js/main.js` (mobile nav toggle). Each page also sets the footer year inline.

## Conventions
- The header, nav and footer are duplicated in every page. Keep all four in sync when editing them.
- The current page's nav link gets `aria-current="page"`.
- Reuse existing classes (`container`, `hero`, `section-title`, `section-lead`, `grid`, `card`, `btn btn-primary`) before adding new ones.
- Keep it dependency-free unless the user asks otherwise.

## Preview / verify
- Serve with `python3 -m http.server 8000` from the repo root.
- In cloud sessions, Playwright + Chromium are available for screenshots. Check both desktop (~1280px) and mobile (~390px) widths.
