<!-- MannsForum.no rebuild · Clickable HTML prototype · generated 2026-06-22 -->

# MannsForum.no — clickable prototype

A linked, interactive HTML prototype built directly from the [design system](../03-design/01-design-system.md)
and [page blueprints](../03-design/02-page-blueprints.md). It is a **concept prototype** — real markup and
the locked design tokens, but placeholder imagery and stubbed back-end actions (Vipps, search, login).

## Live shareable URL

The prototype is published on GitHub Pages — share this link with anyone:

**<https://monscorps.github.io/mannsforum-prototype/>**

(Repo: [monscorps/mannsforum-prototype](https://github.com/monscorps/mannsforum-prototype) — public.
To update the live site after edits: `git add -A && git commit -m "update" && git push` from this folder.
To take it offline: delete the repo.)

## How to open it locally

Just open `index.html` in a browser, or serve the folder:

```bash
cd planning/prototype
python3 -m http.server 8000   # then visit http://localhost:8000
```

## What's interactive

- **Navigation** — the header, footer, topic cards, CTAs and journey links all work; click through the
  real paths (home → Få hjelp → Kamerathjelpen; topic → help-guide → membership).
- **The helpline status toggle** (bottom-left, "Demo · Kamerathjelpen") — flip it to see the whole site
  switch between *i drift* (open) and *ute av drift* (down). Watch the status banner, the Få hjelp hub and
  the Kamerathjelpen page **degrade gracefully** — crisis fallbacks are promoted, the page never blanks.
  This is the crown-jewel fix to the current site's dead-helpline problem, made tangible.
- **Sticky "Få hjelp"** affordance (bottom-right) on every page — help is one tap from anywhere.
- **FAQ accordions**, **mobile menu** (resize narrow), and **keyboard focus rings** all work.

## Pages

| File | Page | Journey |
|------|------|---------|
| `index.html` | Home | First-scroll trust + routing |
| `fa-hjelp.html` | Få hjelp hub | Man-in-crisis (Journey A) |
| `kamerathjelpen.html` | Kamerathjelpen (with drift / ute-av-drift states) | Journey A |
| `krisetelefoner.html` | Krisetelefoner / crisis | Journey A fallback target |
| `temaer-samvaer.html` | Pillar: Samvær og foreldreskap | Help-seeker (Journey B) |
| `temaer-samvaer-slik-gar-du-frem.html` | Help-guide: samværssabotasje | Journey B |
| `bli-medlem.html` | Bli medlem (3 tiers, Vipps) | Member conversion (Journey C) |
| `om-oss.html` | Om oss + Åpenhet | Trust / skepticism |
| `stott-oss.html` | Støtt oss / donate | Donor (Journey E) |
| `404.html` | Friendly 404 → routes to help | — |

## Notes & honest limitations

- **Imagery is placeholder** (hatched `.ph` boxes with bracketed briefs) — see [`../assets/placeholders/`](../assets/placeholders/README.md).
- All six topic cards currently point to the one fully-built pillar (`temaer-samvaer.html`) so the pattern is clickable.
- Fonts load from Google Fonts and icons from a CDN for the prototype; the production build **self-hosts** both
  (WOFF2, tracker-free help zone) per the [technical plan](../04-technical/01-tech-stack-and-cms.md).
- `assets/style.css` is the design system as code — the production theme inherits these exact tokens.

---

*This prototype makes the plan tangible. It is not the production build — that follows the
[roadmap](../04-technical/03-roadmap-and-delivery-plan.md), starting with Phase 0.*
