# Bhadri's Academy — Website v2 (React + Vite)

Premium single-page website for Bhadri's Academy, Bengaluru — tuitions from
Class 01 to 10th Standard. White base, navy/gold/blue accents, elegant
serif headlines (Cormorant Garamond) with letterspaced Jost.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (dist/)
```

Deploys straight to Vercel/Netlify (auto-detects Vite).

## What's on the page

1. **Header** — white bar, split nav, hanging navy logo panel (replace the
   crest in `Header.jsx` with the real Bhadri's Academy logo image)
2. **Hero** — fullscreen video with poster fallback
3. **Learning** — feature card + thumbnails; 3 programs (Class 01–1,
   1–5, 5–10). Clicking a card opens a clean explainer popup
4. **Admissions** — navy band. "Enrol Now" opens the full-window
   Application Form (triggered from anywhere on the site); "Request a
   Visit" opens the small parent form (name, contact, class, time slot,
   purpose)
5. **Experience** — left list, right image that auto-switches as you scroll
6. **Mosaic stats** — 2 branches, 5+ years, 2400 sqft, faculty, ratio
7. **About / Founder** — photo + message + 3 vertical reel videos
8. **Gallery** — photo grid
9. **Reviews** — parent reviews + 3 vertical feedback videos
10. **Footer** — Harrow-style navy footer with subtle pattern
11. **ENQUIRE NOW** — gold tab fixed to the right edge, always visible;
    opens a slide-in enquiry form

Every form (application, visit, enquiry) composes a structured message and
opens WhatsApp to 9632645625 — no backend needed.

## Edit in one place — `src/config.js`

- WhatsApp number, phone, email, address
- Hero video URL (drop `hero.mp4` into `/public`, set `heroVideo: '/hero.mp4'`)
- `FOUNDER_REELS` / `PARENT_REELS` — 3 vertical (9:16) videos each. While
  `src` is empty a poster + play badge is shown; set `src: '/reel-1.mp4'`
  once you have the real videos in `/public`
- `GALLERY` — image list for the gallery grid

## Replace before client demo

- All Unsplash images → real academy photos
- Founder name, photo & quote → `Founder.jsx`
- Branch names in the application form → `ApplicationModal.jsx`
- Visit time slots → `VisitModal.jsx` (SLOTS array)
- Review texts → `Reviews.jsx` (use real parent feedback)
- Social links → `Footer.jsx`
