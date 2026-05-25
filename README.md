# English Tutor Ksenia — Website

Professional website for English Tutor Ksenia, hosted on GitHub Pages.

🌐 **Live site:** https://[your-github-username].github.io/englishtutorksenia

## Files

- `index.html` — Main HTML page
- `style.css`  — All styles
- `script.js`  — Animations, FAQ, counter, contact form

## How to Deploy to GitHub Pages

1. Create a free account at https://github.com
2. Click **"New repository"** → name it: `englishtutorksenia`
3. Upload all 3 files (`index.html`, `style.css`, `script.js`)
4. Go to **Settings → Pages → Source → main branch → / (root)**
5. Click **Save** — your site will be live at `https://username.github.io/englishtutorksenia`

## Connecting Your Custom Domain

1. In GitHub Pages settings, enter your custom domain: `www.englishtutorksenia.com`
2. In Bluehost DNS, set:
   - CNAME: `www` → `username.github.io`
   - A records for `@` (root): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Wait 24–48 hours for DNS to propagate

## Updating Your Booking Link

In `index.html`, find the button with id `calendly-btn` and replace the href with your actual Calendly or Google Calendar link.
