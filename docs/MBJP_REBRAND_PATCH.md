# MBJP Rebrand Patch

This patch rebrands the copied membership portal to **Marwardi Bhatti Jamaat Pakistan - MBJP**.

## Included

- App metadata/title/description updated to MBJP.
- Header, home page, dashboard/admin wording, public verification wording, programs wording, notifications and PWA install/update text rebranded.
- Membership card and office bearer card use MBJP title and `/public/mbjp/logo.png`.
- New MBJP theme tokens: maroon, rose, green and gold accents.
- PWA assets added under `public/`: manifest, service worker, offline page, favicon, app icons, Apple touch icon.
- Supabase migrations updated for MBJP member number prefixes and MBJP CMS seed text.
- Media storage bucket renamed from `jas-media` to `mbjp-media` in code/migrations for fresh MBJP setup.

## After applying

Run:

```bash
npm install
npm run check
npm run build
```

If this is an existing live Supabase project, review bucket/member-number changes before applying migrations to production. For a fresh MBJP project, these changes are intended.
