# Mia Shuttles - Landing Page

Static landing page for מיה הסעות (Mia Shuttles), a private transportation service in Israel.

## Structure
- `index.html` - the full page (self-contained HTML/CSS, no build step required)
- `assets/hero.png` - hero background image

## Local development

No build step and no dependencies are required. Serve the folder with any static
file server. For example, using Python (preinstalled on most systems):

```bash
python3 -m http.server 5173   # then open http://localhost:5173
```

Any other static server works too (e.g. `npx serve`, `npx http-server`).

## Deploy

This is a plain static site - drag-and-drop `index.html` + `assets/` into Netlify, Vercel, or Cloudflare Pages, or connect this repo directly for automatic deploys on every push.

## Before going live
- Compress `assets/hero.png` (currently ~3.4MB) - use [Squoosh](https://squoosh.app) to convert to WebP for faster mobile load times.
- Update contact details (phone: 053-6632777, WhatsApp link) if they change.
- Connect a custom domain (e.g. miashuttles.co.il) and confirm SSL is active.
