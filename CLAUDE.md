# Polapajak — Project Notes for Claude

## Project
- Next.js 16 (App Router) + Turbopack, Tailwind v4, framer-motion
- Live: **https://polapajak.id**
- Vercel project: `polapajak` under scope `dfundewananta-8668s-projects`

## Deploy Workflow — IMPORTANT

**`git push origin main` does NOT auto-deploy to Vercel.** GitHub→Vercel integration is not wired (or is silent). Pushing without a manual deploy leaves polapajak.id stale.

To publish changes to polapajak.id:

```sh
vercel deploy --prod --yes
```

This builds the project and aliases the new deployment to `polapajak.id` directly. Typical build time: ~30s.

After deploying, verify with cache-bypass:
```sh
curl -s "https://polapajak.id/?_=$(date +%s%N)" | grep -c "<expected-string>"
curl -sI "https://polapajak.id/?_=$(date +%s%N)" | grep -iE "x-vercel-id|age"
```
Fresh deploy shows `age` near 0.

Do not rely on `git push` alone for production updates. Always run `vercel deploy --prod --yes` after pushing.

## Local Dev
```sh
npm run dev   # Next.js dev server on http://localhost:3000
```

## Brand Conventions
- Brand name casing: **Polapajak** (not PolaPajak). Used everywhere — copy, alt text, JSON-LD, OG image.
- Primary brand green: `#15803D` → `#16A34A` → `#22C55E` (gradient).
- Logo asset: `public/LM_White_BG_1.svg` is the **default** brand mark (white logo on green gradient bg). Used in favicon (`app/icon.svg`), navbar, Pola Group chips, and OG image badge.
- EYD/PUEBI: serial commas with "dan" — e.g. "Pajak dan Akuntansi", "ISO, Legalitas, dan Perizinan", "Pendampingan, SP2DK, dan Pemeriksaan".
- Kata "audit" dan turunannya (auditable, diaudit, auditor) DIHINDARI di seluruh konten — alasan etika profesi. Gunakan: "pemeriksaan", "diperiksa", "terverifikasi", "terstandar", "pihak eksternal" sesuai konteks.

## Contact
- Email: `polapajak.id@gmail.com`
- WhatsApp: `+62 815-1305-0035`
- Instagram: `@polapajak.id`
