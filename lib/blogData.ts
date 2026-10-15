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
 */

export interface BlogPostData {
  slug: string
  tag: string
  icon: string
  title: string
  excerpt: string
  date: string
  dateLabel: string
  readTime: string
  content: string
}

export interface BlogPost extends BlogPostData {
  Icon: LucideIcon
}

/** Card fields only — safe to pass from server to client components. */
export type BlogCard = Omit<BlogPostData, 'content'>

const ALL_POSTS: BlogPost[] = (rawPosts as BlogPostData[])
  .map(p => ({ ...p, Icon: getBlogIcon(p.icon) }))
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
