# Jayesh Dhole · Portfolio

Personal portfolio built with [Astro](https://astro.build). Live at **https://jayesh-dhole.github.io/know_me/**.

## Editing content

All text lives in `src/data/profile.ts`. The photo is `public/images/profile.png` and the résumé is `public/Jayesh_Dhole_Resume.pdf`.

Certifications are fetched from Credly at build time. The site rebuilds every Monday, so new badges appear on their own.

## Running locally

```bash
corepack yarn@1.22.22 install
corepack yarn@1.22.22 dev
```

Then open http://localhost:4321/know_me/.

## Deploying

Pushing to `main` builds and deploys the site through GitHub Actions (`.github/workflows/deploy.yml`).
