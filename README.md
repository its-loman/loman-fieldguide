# loman field guide

A personal site, blog, and working field guide built with Astro.

## Local development

Requires Node 22+.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Astro writes the static site to `dist/`.

## Cloudflare Pages

Connect this repository to Cloudflare Pages with:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

The project defaults to `https://loman-fieldguide.pages.dev`. If Cloudflare assigns a different hostname, add a build environment variable named `SITE_URL` with the final origin.

## Writing a field note

Add a Markdown file under `src/data/field-notes/` with frontmatter like:

```yaml
---
title: "Post title"
description: "Short description."
pubDate: 2026-09-02
tags: ["tag"]
noteNumber: "L–004"
featured: false
draft: false
---
```

Set `draft: true` to keep a note out of the generated site.
