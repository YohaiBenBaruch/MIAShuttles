# Mia Shuttles - Landing Page

Next.js landing page for מיה הסעות (Mia Shuttles), a private transportation service in Israel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure
- `app/page.tsx` - the landing page
- `app/globals.css` - page styles
- `public/assets/hero.webp` - hero background image
- `public/sitemap.xml` / `public/robots.txt` - SEO files

## Deploy
Deploy on Vercel, or any host that supports Next.js. Production:

```bash
npm run build
npm start
```

## Before going live
- Update contact details (phone: 053-6632777, WhatsApp link) if they change.
- Connect a custom domain (e.g. miashuttles.co.il) and confirm SSL is active.
- If the live domain is not `miashuttles.co.il`, update the URLs in `public/sitemap.xml` and `public/robots.txt`.
