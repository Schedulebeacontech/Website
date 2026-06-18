# Schedule Beacon Website

Marketing site for Schedule Beacon — master scheduling software for K-12
school districts. Built with React, TypeScript, Vite, Tailwind CSS, and
shadcn/ui.

## Project structure

```
src/
  app/
    components/      Page components (Home, Products, Resources, FAQ, ...)
    components/ui/    shadcn/ui primitives
    routes.tsx        Route definitions
    lib/               Shared helpers (e.g. EmailJS)
  assets/             Images used directly via relative imports
  imports/            Larger media assets (product screenshots, demo video)
  styles/             Global CSS — theme.css holds brand colors/tokens
public/               Static files served as-is (favicons, etc.)
```

## Running locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

This outputs a static site to `dist/`.

## Deployment

This site deploys to Netlify. Build command: `npm run build`. Publish
directory: `dist`. Once this repo is connected in Netlify's site settings
under Build & deploy, every push to the main branch triggers a new deploy
automatically.

## Large media files

`src/imports/Screen_Recording_2026-04-09_230205.mp4` (~96MB) is tracked via
[Git LFS](https://git-lfs.com) — see `.gitattributes`. Make sure Git LFS is
installed (`git lfs install`) before cloning or pushing changes that touch
this file, otherwise it'll either fail to push or get committed as a regular
(huge) blob.

## Brand

- Primary: Midnight Blue `#002147`
- Accent: University Gold `#FFC72C`
- Tokens defined in `src/styles/theme.css`
