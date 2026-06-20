# MBJP Responsive Header + Hero Patch

## Purpose
Fix desktop 100% zoom layout issues shown in the screenshots:

- Header content overflowing/cropping on the right side.
- Long brand name making the header too wide.
- Language switcher and admin/account actions pushing out of viewport.
- Hero section/card preview appearing too large at normal browser zoom.

## Changed files

- `src/components/layout/Header.tsx`
- `src/routes/index.tsx`
- `src/styles.css`

## What changed

- Header brand pill changed to compact `MBJP / Member Portal` display while preserving full organization name in aria/title.
- Header nav/actions received stable CSS hooks.
- Desktop header widths, nav gaps, language switcher and Admin Panel button are responsive.
- Header automatically switches to the mobile two-row nav for narrower desktop/laptop widths.
- Hero panel, title and preview card scale down at 100% zoom.
- Preview card heading shortened to avoid crowding.
