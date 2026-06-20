# MBJP Mobile Auth + PWA Cache Fix Patch

## Purpose
Fix mobile/PWA issues observed in installed MBJP app screenshots:

- Admin panel stuck on "Loading admin control center..."
- Apply for Membership/Login/Signup stuck on "Checking session..."
- App Update / cache reset helper repeatedly showing on every installed-app launch
- Program/More dropdowns creating horizontal overflow on mobile

## Changed files

- `src/lib/supabase/auth-timeout.ts`
- `src/routes/login.tsx`
- `src/routes/signup.tsx`
- `src/routes/register.tsx`
- `src/routes/admin.tsx`
- `src/components/pwa/AppUpdateReset.tsx`
- `src/components/layout/ProgramsDropdown.tsx`
- `src/styles.css`
- `public/sw.js`

## Key changes

1. Added Supabase auth/query timeout helper.
   - Login/signup session checks no longer wait forever.
   - Register/admin pages use a saved-session fallback plus request timeout.
   - Slow/blocked Supabase requests now show a useful error instead of infinite loading.

2. Disabled automatic App Update reset helper.
   - It no longer appears on every installed-app launch.
   - It only appears when URL has `?show-cache-reset=1` or `?debug-pwa=1`.
   - Existing hard-reset URLs still work.

3. Bumped service-worker cache version.
   - Forces old MBJP PWA cache to be retired after deploy.

4. Mobile dropdown viewport fix.
   - Programs/More dropdowns are fixed inside the viewport on mobile.
   - Prevents sideways page shift and left/right clipping.

## After applying

Run:

```bash
npm run check
npm run build
```

Then commit and push.

If installed app still shows old files after deployment, open once:

```text
https://mbjp-app.vercel.app/?clear-pwa-cache=1
```

Then close/reopen the installed app.
