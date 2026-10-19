import { defineConfig } from 'astro/config';

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/,
// so the base path follows the repo name. In GitHub Actions the repo name comes
// from GITHUB_REPOSITORY, which means renaming the repo never breaks the CSS/links.
// A repo named "<user>.github.io" is served from the root instead.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'know_me';
const base = repo.endsWith('.github.io') ? '/' : `/${repo}`;

export default defineConfig({
  site: 'https://jayesh-dhole.github.io',
  base,
  image: {
    // allow Astro to optimise Credly badge images
    domains: ['images.credly.com'],
  },
});
