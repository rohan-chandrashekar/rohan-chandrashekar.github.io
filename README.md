# Rohan Portfolio — Astro + React + Framer Motion (Light, "expensive" look)

This project is a **spiritual successor** to your Google Sites portfolio, but upgraded with:
- **Astro multipage** structure
- **Smooth page transitions** (Astro View Transitions)
- **Motion** using **Framer Motion**
- **Bright / premium** visual style (no dark theme)

## Where to edit your content
Open:
- `src/lib/constants/profile.ts`

That file is the single source of truth for your:
- hero intro
- experience, education
- publications
- volunteering
- edu-ventures
- corporate activities
- links (GitHub / LinkedIn / Resume)

## Local run
```bash
npm i
npm run dev
```

## Deploy to GitHub Pages
1. Create a repo (example: `rohan-portfolio`).
2. In `astro.config.mjs`, set:
   - `SITE_URL` to `https://<YOUR_GITHUB_USERNAME>.github.io`
   - `BASE_PATH` to `/<YOUR_REPO_NAME>`

   You can do this either by editing the file directly, or setting repo secrets and using a GitHub Action.

3. Build and publish `dist/`.

> If you want, tell me your GitHub username + repo name and I’ll give you a copy-paste GitHub Actions workflow.


## Notes
- This build keeps the v7.3 design/layout intact, but upgrades Astro to v5.16.12 and @astrojs/tailwind to v6.0.2 (Tailwind v3.4.19) to reduce upgrade/audit noise.
