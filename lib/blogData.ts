import fs from 'node:fs'
import path from 'node:path'
import type { LucideIcon } from 'lucide-react'
import rawPosts from '@/content/blog.json'
import { getBlogIcon } from '@/lib/blogIcons'

/**
 * Blog posts live in content/blog.json.
 *
 * SCHEDULING: a post is only shown once its `date` (YYYY-MM-DD) has arrived
 * (midnight, German time). Add future-dated posts to blog.json and they go
 * live on their own — the blog pages re-check every hour (see `revalidate`
 * in app/blog/*, app/page.tsx and app/sitemap.ts). On a static host
 * (e.g. Hostinger upload of `out/`), a post appears on the next build after its date.
 *
 * DRAFTS: posts waiting for approval live in content/blog-drafts.json, which the
 * site never reads. Move a post into blog.json once it is approved.
 *
 * IMAGES: put the cover at public/blog/<file> and set "image": "/blog/<file>".
 * If the file is missing, the post falls back to its icon (no broken image).
 */

export interface BlogPostData {
  slug: string
  tag: string
  icon: string
  title: string
  excerpt: string
  date: string
  dateLabel: string
  /** Last content update (YYYY-MM-DD), shown as "Updated …" and used for SEO */
  updated?: string
  readTime: string
  content: string
  /** Optional cover image path under /public, e.g. "/blog/my-post.jpg" (16:9, ~1600×900) */
  image?: string
  imageAlt?: string
}

export interface BlogPost extends BlogPostData {
  Icon: LucideIcon
}

/** Card fields only — safe to pass from server to client components. */
export type BlogCard = Omit<BlogPostData, 'content'>

function imageExists(src?: string): boolean {
  if (!src || !src.startsWith('/')) return false
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src))
  } catch {
    return false
  }
}

const ALL_POSTS: BlogPost[] = (rawPosts as BlogPostData[])
  .map(p => ({
    ...p,
    image: imageExists(p.image) ? p.image : undefined,
    Icon: getBlogIcon(p.icon),
  }))
  .sort((a, b) => b.date.localeCompare(a.date))

function publishTime(date: string): number {
  // Midnight in Germany (CET). One hour off in summer is fine for a blog.
  return new Date(`${date}T00:00:00+01:00`).getTime()
}

export function isPublished(post: BlogPostData, now: Date = new Date()): boolean {
  return publishTime(post.date) <= now.getTime()
}

/** Published posts, newest first. */
export function getPublishedPosts(now: Date = new Date()): BlogPost[] {
  return ALL_POSTS.filter(p => isPublished(p, now))
}

/** Scheduled (not yet live) posts, soonest first. */
export function getScheduledPosts(now: Date = new Date()): BlogPost[] {
  return ALL_POSTS.filter(p => !isPublished(p, now)).reverse()
}

export function toCard({ content: _content, Icon: _Icon, ...card }: BlogPost): BlogCard {
  return card
}
