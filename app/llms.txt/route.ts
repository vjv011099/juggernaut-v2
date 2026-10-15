import fs from 'node:fs'
import path from 'node:path'
import { getPublishedPosts } from '@/lib/blogData'

// llms.txt = the summary AI assistants read. Base text lives in content/llms-base.txt;
// published blog posts are appended automatically.
export const revalidate = 3600

const BASE = 'https://thejuggernautglobal.com'

export function GET() {
  const base = fs.readFileSync(path.join(process.cwd(), 'content', 'llms-base.txt'), 'utf8').trimEnd()
  const posts = getPublishedPosts()
  const blog = posts.length
    ? '\n\n## Guides & Articles\n' + posts
        .map(p => `- [${p.title}](${BASE}/blog/${p.slug}/): ${p.excerpt}`)
        .join('\n')
    : ''
  return new Response(`${base}${blog}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
