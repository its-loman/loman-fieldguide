import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://loman-fieldguide.pages.dev',
  output: 'static',
});
