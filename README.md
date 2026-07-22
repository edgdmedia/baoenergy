# Handoff: BAO Energy Marketing Website (v2 redesign)

## Overview
A marketing website for **BaoEnergy Services Ltd.** — an indigenous, fully-integrated services provider operating across Oil & Gas, Telecommunications and FMCG in Nigeria. The site presents the company, its six service lines, its HSE (Health, Safety & Environment) commitment, and its trusted brands, and routes all contact through direct email. Five views: Home, About, Services, Single Service, HSE.

## About the Design Files
The files in this bundle are **design references created in HTML** — a streaming "Design Component" prototype that demonstrates the intended look, layout, copy and behavior. **They are not production code to copy directly.** The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, SwiftUI, native, etc.), using its established component library, routing, and styling patterns. If no environment exists yet, choose the most appropriate modern framework (e.g. React + a CSS solution, or Next.js) and implement there.

The prototype is a single-file app that switches "pages" via internal state. In production this should become **real routes** (`/`, `/about`, `/services`, `/services/:slug`, `/hse`).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, imagery and interactions are all specified. Recreate the UI faithfully using the codebase's existing libraries and patterns; exact tokens are listed below.

## Brand System
The design is built on the **BAO Energy Design System** (Manrope typeface; charcoal + single orange accent + white). If the target codebase already has this brand system, use its tokens/components. Otherwise implement the tokens in the Design Tokens section. Never introduce a second accent hue — orange carries every accent, link-hover, CTA, underline-rule and icon-badge job. Logos are real brand assets (see Assets); do not recolor or redraw the mark.

## Screens / Views

### 1. Global — Navigation (sticky, all pages)
- **Layout:** sticky top bar, white background, 1px bottom border (`--border-subtle`). Inner row max-width 1240px, padding 16px 40px, `space-between`.
- **Left:** primary charcoal logo (`logo-primary.svg`), height 44px, clickable → Home.
- **Center/right:** link row, `gap:38px`, Manrope 600 / 15px. Links: Home, About, Services, HSE. Active link is orange (`--brand-accent`) with a 2px orange bottom border; inactive links are charcoal (`--text-heading`) with a transparent 2px border. On the Single Service view, the **Services** link is active.
- **Contact button:** orange fill (`--brand-accent`), charcoal text (`--charcoal-900`), Manrope 700 / 15px, padding 11px 24px, radius `--radius-sm` (4px). It is a `mailto:info@baoenergyng.com` link — **not a form trigger**.
- **Behavior:** on scroll past 12px, the bar gains a soft shadow `0 6px 24px rgba(12,10,8,.12)` (transition 0.3s). At top, no shadow.

### 2. Global — Footer (all pages)
- **Background:** `--charcoal-950` (#0c0a08); text `--gray-300`; padding 68px 40px 26px.
- **Top grid:** max-width 1240px, 4 columns `1.5fr 1fr 1.4fr 1fr`, gap 44px.
  - **Col 1 — Brand:** white logo (`logo-white.svg`, h48), blurb paragraph (14px / 1.75, max-width 340px), then three 36px circular social buttons (1px `--border-on-dark`, glyphs f / ✕ / ▶).
  - **Col 2 — Company:** heading "Company"; links Home, About, Services, HSE (internal nav, 14px, gap 12px).
  - **Col 3 — Services:** heading "Services"; the six service titles (internal nav to detail, 14px, gap 11px).
  - **Col 4 — Get In Touch:** heading "Get In Touch"; address line, then `mailto:info@baoenergyng.com` and `mailto:baoenergyng@gmail.com` (orange, `--brand-accent`), then `tel:+2348188041526` (gray). Line-height 1.9. **No newsletter, no form.**
- **Bottom bar:** 1px top border `--border-on-dark`, padding-top 22px, `space-between`, 13px `--gray-500`: "© 2026 BAO Energy, All rights reserved." and links About / Privacy Policy.

### 3. Home (`/`)
Section order: **Hero → Who We Are → What We Offer → HSE teaser → Trusted Brands → Contact banner → Footer.**

- **Hero:** height 660px, `overflow:hidden`.
  - Background image `hero-workers.jpg`, `center 28% / cover`, inset `-60px 0` (over-scan for parallax). **Parallax:** on scroll, `transform: translateY(scrollY * 0.18px)`.
  - Overlay: `linear-gradient(105deg, rgba(10,9,7,.86), rgba(10,9,7,.42) 60%, rgba(10,9,7,.2))`.
  - Content (max-width 1240, padding 0 40, vertically centered): 64×4px orange rule; H1 display (`--text-display`, white, max-width 820, `text-wrap:balance`) "Meeting Future Demand In A Sustainable Way"; lead paragraph (`--text-body-lg`, `--gray-150`, max-width 560) describing the company; two buttons in a row (gap 16): accent "➜ Explore Our Services" → Services, outline "About Us" → About.
  - **Stat strip** pinned to hero bottom: bar `rgba(7,6,5,.55)` + `backdrop-filter: blur(2px)`, 1px top border `rgba(255,255,255,.12)`. Inner 4-column grid (gap 24, padding 22px 40px). Each stat: big number Manrope 800 / 26px orange, label 13px `--gray-300`. Stats: **3** — Core sectors — Oil & Gas, Telecoms, FMCG; **6** — Integrated service lines; **100%** — Indigenous, fully-integrated provider; **Lagos** — Headquartered in Surulere, Nigeria.
- **Who We Are:** max-width 1240, padding 100px 40px. Grid `1.05fr .95fr`, gap 64, centered.
  - **Left:** 460px image card, radius 14, `overflow:hidden`, `containers.jpg` cover. Overlaid bottom-left orange plaque (`--brand-accent`, charcoal text, padding 20px 26px, top-right radius 14, max-width 260): "A Vital Energy Resource For A Better Tomorrow" (Manrope 800 / 20px).
  - **Right:** eyebrow "Who We Are"; H2 (`--text-h2`) "Providing affordable and reliable energy services"; two body paragraphs; a 2-col sector list (gap 12/24) — each row an orange ➜ + Manrope 600 label: Oil & Gas, Telecommunications, FMCG, Project & Logistics; then a dark "Discover More" button → About.
- **What We Offer (dark band):** background `--charcoal-900`, padding 96px 40px, max-width 1240.
  - Header block (max-width 640): orange eyebrow "What We Offer" + 64×3 orange rule + H2 white (`--text-h2`) "Integrated support across the full asset lifecycle".
  - **Service cards grid:** 3 columns, gap 22. First **3** services shown. Card = 340px, radius 12, `overflow:hidden`, charcoal bg, cursor pointer, `transition: transform .4s cubic-bezier(.2,.7,.2,1)`, **hover `translateY(-6px)`**. Full-bleed cover image; bottom scrim `linear-gradient(to top, rgba(9,8,6,.95), rgba(9,8,6,.15) 62%)`; padding-24 caption with H4 white title + `--text-body-sm` `--gray-300` excerpt. Card click → that service's detail page.
  - Below grid: accent "View All Services" button → Services.
- **HSE teaser:** max-width 1240, padding 100px 40px. Grid `.9fr 1.1fr`, gap 64, centered.
  - **Left:** eyebrow "Health, Safety & Environment"; H2 "Safety is the foundation of every service we deliver"; body paragraph; dark "Our HSE Approach" button → HSE.
  - **Right:** 2×2 grid (gap 18) of four principle cards — 1px `--border-subtle`, radius 12, padding 24, white bg. Each: orange number (01–04, Manrope 800 / 15px), H4 title, `--text-body-sm` `--text-muted` short line. Content = the four HSE principles (see HSE page).
- **Trusted Brands:** background `--surface-sunken` (`--gray-100`), padding 72px 40px. Flex row (gap 56, wrap): a label block ("Trusted Brands" eyebrow + 56×3 orange rule) then the two client logos (`client-seplat.jpg` h52, `client-firstep.png` h60, `object-fit:contain`).
- **Contact banner:** height by padding 130px 40px, centered text. Background `cooling-towers.jpg` cover + overlay `linear-gradient(rgba(7,6,5,.82), rgba(7,6,5,.9))`. H1 white "Together, We Can Create A Safe And Sustainable Future"; 80×3 orange rule; lead paragraph; orange `mailto:info@baoenergyng.com` pill "➜ Contact Us" (padding 16px 32px, radius 4).

### 4. About (`/about`)
- **Page banner:** height 360px. Background `containers.jpg` `center 55% / cover` + overlay `linear-gradient(105deg, rgba(10,9,7,.8), rgba(10,9,7,.5))`. Left-aligned content: 56×4 orange rule + H1 white "About Us".
- **Who We Are:** max-width 1240, padding 88px 40px. Eyebrow "Who We Are"; H2 "Providing affordable and reliable energy"; two-column body (gap 48) — four paragraphs total (full company narrative, see prototype for exact copy).
- **Stats band:** background `--charcoal-900`, padding 80px 40px. 4-column grid of the same stats, big numbers 30px orange.

### 5. Services (`/services`)
- **Page banner:** height 360px, `refinery-sunset.jpg` cover + 105deg dark overlay; 56×4 orange rule + H1 "Our Services".
- **Grid:** max-width 1240, padding 88px 40px. Eyebrow "What We Offer" + H3 lead sentence. 3-column grid (gap 22) of **all six** service cards (320px tall, same card spec + hover lift as Home). Card click → detail.

### 6. Single Service (`/services/:slug`)
- **Banner:** height 440px. Full-bleed service image (`detailImg`) + overlay `linear-gradient(105deg, rgba(10,9,7,.82), rgba(10,9,7,.42))`. Content: "← Back to Services" link (`--gray-150`, 14px) → Services; 56×4 orange rule; H1 white service title (max-width 820).
- **Body:** max-width 900, padding 72px 40px. The service's body paragraphs (`--text-body`, gap 22 between).
- **Contact banner:** padding 104px 40px, `cooling-towers.jpg` + dark overlay. H2 "A Vital Energy Resource For A Better Tomorrow" + 80×3 rule + orange `mailto` "➜ Contact Us" pill.
- **Other Services:** max-width 1240, padding 76px 40px. H4 "Other Services"; 2-column grid (gap 22) of two other service cards (230px, radius 12, hover lift), title-only caption. Click → that detail.

### 7. HSE (`/hse`)
- **Banner:** height 360px, `worker.jpg` `center 30% / cover` + 105deg dark overlay; 56×4 orange rule + H1 "Health, Safety & Environment" (max-width 760).
- **Commitment:** max-width 900, padding 80px 40px 56px. Eyebrow "Our Commitment"; H2 "Zero harm is the standard against which we measure every task"; two body paragraphs.
- **Principles:** background `--surface-sunken`, padding 72px 40px. 2-column grid (gap 22) of four cards — white bg, radius 14, padding 32, **3px orange top border**. Each: H4 title + full `--text-body` description. The four principles:
  1. **People First** — "No task is so urgent that it cannot be done safely. Every member of our workforce carries the authority — and the responsibility — to stop work the moment a condition appears unsafe, without fear of reprisal."
  2. **Rigorous Standards** — "We align our procedures with recognised industry codes and client-specific requirements, supported by competency-based training, permit-to-work discipline and routine certification of tools and equipment."
  3. **Environmental Care** — "We work to minimise our footprint on every project through disciplined waste management, spill prevention, and responsible use of resources — protecting the communities and environments in which we operate."
  4. **Continuous Improvement** — "Incidents, near-misses and audits feed a structured cycle of review. We learn deliberately from every job so that the standard of everything we do rises steadily over time."
- **Contact banner:** padding 100px 40px, `refinery-night.jpg` + dark overlay. H2 "Work with a partner that puts safety first" + 72×3 rule + orange `mailto` "➜ Contact Us" pill.

## Service Data (all six)
| # | Title | Card image | One-line excerpt |
|---|-------|-----------|------------------|
| 1 | Maintenance Support Services | refinery-cloudy.jpg | Valve servicing, instrumentation calibration, gas detector and breathing apparatus support. |
| 2 | Asset Integrity Management | refinery-night.jpg | Protecting the integrity and reliability of equipment, structures and systems across their lifecycle. |
| 3 | Procurement Services (Equipment and Spares/Material) | container-ship.jpg | Sourcing essential equipment, spares and materials reliably and cost-effectively. |
| 4 | Oil & Gas Metering System Recertification and Assurance | refinery-sunset.jpg | Accurate measurement and reliable data for fair transactions and regulatory compliance. |
| 5 | Manpower Support Services | worker.jpg | Competent, skilled personnel supporting every aspect of facility operations. |
| 6 | Others | cooling-towers.jpg | Project Management. Waste Management. Logistics Management Consulting. |

Each service has 2–3 body paragraphs — copy is in the HTML prototype (`data()` method) and should be carried over verbatim.

## Interactions & Behavior
- **Navigation:** internal page state in the prototype → real routes in production. Every page-change scrolls to top.
- **Service cards:** entire card is a click target → the matching service detail route.
- **Contact:** all "Contact" affordances (nav button, CTA pills, footer emails) are `mailto:` / `tel:` links. No contact form, no newsletter anywhere.
- **Hero parallax:** background translates at 0.18× scroll offset. Use `will-change: transform`; throttle via rAF or a passive scroll listener.
- **Nav shadow:** appears after 12px scroll.
- **Reveal-on-scroll:** major sections start at `opacity:0; translateY(28px)` and transition to visible (`opacity 1; translateY 0`) over 0.8s `cubic-bezier(.2,.7,.2,1)` when ~12% enters viewport (IntersectionObserver, unobserve after firing). Respect `prefers-reduced-motion` — disable transforms if set (recommended addition).
- **Card hover:** `translateY(-6px)`, transition 0.4s `cubic-bezier(.2,.7,.2,1)`.
- **Responsive:** the prototype is desktop-first (fixed 1240px container). Production should add breakpoints — collapse the 3-col service grid to 2/1, stack the asymmetric splits, and make the stat strip wrap on mobile.

## State Management
- `page` — current view (home/about/services/detail/hse) → replace with router.
- `detail` — selected service object for the Single Service view → replace with route param + lookup.
- No data fetching; all content is static (the six services, four stats, four HSE principles, two client logos).

## Design Tokens
Colors (from the brand system):
- Charcoal: `--charcoal-950 #0c0a08`, `--charcoal-900 #14110d`, `--charcoal-800 #211d18`, `--charcoal-700 #332d26`, `--charcoal-600 #5a5348`
- Orange: `--orange-700 #c46a12`, `--orange-600 #e0771a`, `--orange-500 #f6851f` (**primary accent**), `--orange-400 #f89a45`, `--orange-300 #fbb877`, `--orange-100 #fde7cf`
- Gray: `--gray-500 #8a8375`, `--gray-300 #c8c2b4`, `--gray-150 #e8e3d8`, `--gray-100 #f2efe7`, `--gray-50 #faf8f3`
- White `#ffffff`, Black `#000000`
- Semantic: `--text-heading` = charcoal-900; `--text-body` = charcoal-800; `--text-muted` = charcoal-600; `--surface-sunken` = gray-100; `--border-subtle` = gray-150; `--border-on-dark` = rgba(255,255,255,.14); `--brand-accent` = orange-500; `--link` = charcoal-900; `--link-hover` = orange-600.

Typography — **Manrope** (weights 200–800):
- `--text-display` 800 3.5rem/1.08
- `--text-h1` 800 2.5rem/1.15
- `--text-h2` 700 2rem/1.2
- `--text-h3` 700 1.5rem/1.3
- `--text-h4` 700 1.125rem/1.4
- `--text-eyebrow` 700 0.8125rem/1.3, letter-spacing 0.06em
- `--text-body-lg` 500 1.125rem/1.6
- `--text-body` 400 1rem/1.65
- `--text-body-sm` 400 0.875rem/1.55

Radius: buttons/pills `--radius-sm` ≈ 4px; cards 12px; large image cards 14px.
Shadow: nav-scrolled `0 6px 24px rgba(12,10,8,.12)`.
Signature accent: short orange underline rule (56–80px × 3–4px) below eyebrows/headings.

## Assets
All under `assets/` (stock photography + real brand vectors). BAO does not have proprietary photography — stock imagery is intentional and should be replaced with equivalents if licensing requires.
- Logos (real brand vectors, do not alter): `logo-primary.svg` (charcoal, light bg), `logo-white.svg` (footer/dark).
- Client logos: `client-seplat.jpg` (Seplat Energy), `client-firstep.png` (First Exploration & Petroleum).
- Photography: `hero-workers.jpg`, `containers.jpg`, `refinery-cloudy.jpg`, `refinery-night.jpg`, `container-ship.jpg`, `refinery-sunset.jpg`, `worker.jpg`, `cooling-towers.jpg`. (`world-map.png` exists but is not used in v2.)

## Files
- `BAO Energy Website v2.dc.html` — the v2 redesign prototype (this handoff). Single-file streaming Design Component: template markup + a `Component` logic class (page state, service/stat/HSE data, IntersectionObserver reveal, parallax/nav-shadow scroll handler).
- `BAO Energy Website.dc.html` — the earlier 1:1 duplicate of the live site (kept for reference; not part of this handoff spec).
- `assets/` — all images and logos listed above.
- The design system (tokens + components: Button, Eyebrow, ServiceCard, SiteNav) lives under `_ds/bao-energy-design-system-.../`; the CSS token files define every `--*` value above.

Contact details used throughout: **36 Calabar Street, Surulere, Lagos** · info@baoenergyng.com · baoenergyng@gmail.com · +234 818 804 1526.
