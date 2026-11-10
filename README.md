# loman field guide

A personal site, blog, and working field guide built with Astro.

The design is a worn, ruled notebook with a headphone-wearing snail, handwritten type,
purple pencil marks, and small line drawings. The layout adapts from two columns on
desktop to a single column on small screens. Existing field notes remain Markdown-driven.

## Design assets

- `public/images/loman-snail.webp`: transparent snail artwork based on the supplied logo.
- `public/images/notebook-paper.webp`: paper texture based on the supplied page concept.
- `public/favicon.png`: small snail favicon.
- `public/fonts/`: self-hosted Kalam and Patrick Hand fonts, with their OFL licenses.

The blue rules and red margin are CSS so they remain sharp as the page changes size.
Project data is shared between the homepage and project index in `src/data/projects.ts`.
The RSS feed at `/rss.xml` is generated from published field notes.

## Local development

Requires Node 22+.

```bash
npm install
npm run dev
```

The dev command uses Astro's `--ignore-lock` flag to stay in the foreground when
run by an agent or preview supervisor, rather than automatically detaching.

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
