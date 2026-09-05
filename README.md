# Tafsol Digital — React + Vite

Original static HTML/CSS/JS site converted into a React (Vite) project with
client-side routing (`react-router-dom`). Same look, same content, same
behaviour (mobile nav, FAQ accordion, WhatsApp float button, contact form) —
now as React components.

## Structure

```
src/
  main.jsx           entry point
  App.jsx            routes + layout
  index.css          original stylesheet (unchanged)
  components/
    Header.jsx        nav bar (mobile toggle + active link highlight)
    Footer.jsx
    WhatsAppFloat.jsx  floating WhatsApp button
    CheckIcon.jsx      small checkmark svg used in pricing lists
  pages/
    Home.jsx
    Services.jsx
    Work.jsx
    Pricing.jsx        includes FAQ accordion
    About.jsx
    Contact.jsx        contact form wired to Web3Forms
public/
  assets/              logo.png, logo-500.png, favicon.png
```

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Notes

- Pages are routes now: `/`, `/services`, `/work`, `/pricing`, `/about`, `/contact`.
  In-page anchors like `/services#web-development` still work — the app
  scrolls to the section after navigating.
- The contact form still posts to Web3Forms. Put your real access key in
  `src/pages/Contact.jsx` (replace `YOUR_ACCESS_KEY_HERE`).
- Deploying to Vercel/Netlify: since this is a single-page app, add a rewrite
  so all routes fall back to `index.html` (Vercel: add `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]` in `vercel.json`).
