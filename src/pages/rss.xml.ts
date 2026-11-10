import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
const xml = (value: string) => value.replace(/[<>&"']/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!);
export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://loman-fieldguide.pages.dev');
  const posts = (await getCollection('fieldNotes', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel><title>loman notes</title><link>${xml(origin.href)}</link><description>Software, notes, and small strange tools.</description><language>en-us</language>${posts.map(post => {
    const url = xml(new URL(`/field-notes/${post.id}/`, origin).href);
    return `<item><title>${xml(post.data.title)}</title><link>${url}</link><guid>${url}</guid><description>${xml(post.data.description)}</description><pubDate>${post.data.pubDate.toUTCString()}</pubDate></item>`;
  }).join('')}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
