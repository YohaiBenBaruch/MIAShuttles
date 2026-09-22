# Mia Shuttles - Landing Page

Static landing page for מיה הסעות (Mia Shuttles), a private transportation service in Israel.

## Structure
- `index.html` - the full page (self-contained HTML/CSS, no build step required)
- `assets/hero.png` - hero background image

## Local development

No build step is required. To preview the site locally with a static server:

```bash
npm install     # installs http-server (dev-only)
npm run dev     # serves the site at http://localhost:5173
```

Alternatively, with no dependencies at all: `python3 -m http.server 5173`.

## Deploy

This is a plain static site - drag-and-drop `index.html` + `assets/` into Netlify, Vercel, or Cloudflare Pages, or connect this repo directly for automatic deploys on every push.

## Before going live
- Compress `assets/hero.png` (currently ~3.4MB) - use [Squoosh](https://squoosh.app) to convert to WebP for faster mobile load times.
- Update contact details (phone: 053-6632777, WhatsApp link) if they change.
- Connect a custom domain (e.g. miashuttles.co.il) and confirm SSL is active.
