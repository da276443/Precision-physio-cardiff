# Precision Physiotherapy Cardiff — Website

A fast React + Tailwind site, ready to deploy on Netlify. Brand colours and assets are included.

## Quick Start (Local Preview)
1. Install Node.js LTS from https://nodejs.org
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL it prints (e.g. http://localhost:5173).

## Deploy to Netlify (GitHub → Netlify pipeline)
1. Create a new **GitHub repository** in your account (e.g. `precision-physio-cardiff`).
2. Upload all files from this folder to that repo:
   - On GitHub, click **Add file → Upload files**, drag the entire folder contents (not the folder itself), then **Commit**.
3. Go to Netlify → **Add new site → Import from Git** → pick **GitHub** → select your repo → **Deploy site**.
4. Netlify will build and give you a live URL (like `https://...netlify.app`).

## How to Edit Content
- Main content: `src/site/App.jsx`
  - **Hero headline/text**: inside `<Hero />`
  - **Services list**: inside `<Services />` array
  - **About text**: inside `<About />`
  - **Contact form**: inside `<Contact />`
- Email + Instagram:
  - At the top of `src/site/App.jsx` you'll see:
    ```js
    const EMAIL = 'precisionphysiocardiff@outlook.com'
    const INSTA = 'precision_physiocardiff'
    ```
  - Change these to update booking buttons/links.
- Colours:
  - Brand colours are defined in `tailwind.config.js` under `theme.extend.colors.brand`.
- Images:
  - Replace `/public/hero.jpg` with your own hero image (keep the same filename).
  - Replace `/public/logo.png` (header logo) and `/public/favicon.png` (tab icon).

## Netlify Form Notifications
This project uses a Netlify form named **contact**. To receive email notifications:
1. In Netlify, open your deployed site → **Forms** → you should see `contact` after the first submission.
2. Go to **Site Settings → Forms → Form notifications** → add an Email notification to your address.

## Common Edits
- Button text: search for `Book via` in `src/site/App.jsx` and edit text.
- Add a new service: add a new object in the `items` array of `<Services />` with `{ t: 'Title', d: 'Description' }`.

## Re-Deploy
Just commit & push changes to GitHub. Netlify will auto-deploy.