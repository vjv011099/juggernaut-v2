/**
 * Tiny markdown renderer for blog posts (content/blog.json).
 * Supports: ## / ### headings, paragraphs, - bullet lists, | pipe tables |,
 * **bold**, *italic*, [links](https://…), and a "**Short answer:** …" callout.
 */

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function inline(s: string): string {
  return escapeHtml(s)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g, (_m, text, url) => {
      const external = url.startsWith('http')
      return `<a href="${url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`
    })
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}

export function markdownToHtml(md: string): string {
  const lines = md.split('\n')
  const out: string[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      const text = line.slice(3)
      out.push(`<h2 id="${slugify(text)}">${inline(text)}</h2>`); i++; continue
    }
    if (line.startsWith('### ')) { out.push(`<h3>${inline(line.slice(4))}</h3>`); i++; continue }
    if (line.startsWith('|')) {
      const rows: string[] = []
      let first = true
      while (i < lines.length && lines[i].startsWith('|')) {
        if (!lines[i].match(/^[\|\s\-:]+$/)) {
          const tag = first ? 'th' : 'td'
          const cells = lines[i].split('|').slice(1, -1).map(c => `<${tag}>${inline(c.trim())}</${tag}>`).join('')
          rows.push(`<tr>${cells}</tr>`)
          first = false
        }
        i++
      }
      out.push(`<div class="table-wrap"><table>${rows.join('')}</table></div>`); continue
    }
    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(`<li>${inline(lines[i].slice(2))}</li>`); i++
      }
      out.push(`<ul>${items.join('')}</ul>`); continue
    }
    if (line.trim() === '') { i++; continue }
    if (line.startsWith('**Short answer:**')) {
      out.push(`<div class="blog-answer"><p>${inline(line)}</p></div>`); i++; continue
    }
    out.push(`<p>${inline(line)}</p>`); i++
  }
  return out.join('')
}

/** Plain text (for structured data). */
function plain(s: string): string {
  return s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*?/g, '').trim()
}

/**
 * FAQ pairs from a "## FAQ" section: each paragraph "**Question?** Answer".
 * Used for FAQPage structured data (Google + AI search).
 */
export function extractFaq(md: string): { q: string; a: string }[] {
  const start = md.search(/^## FAQ\s*$/m)
  if (start === -1) return []
  const rest = md.slice(start).split('\n').slice(1)
  const faq: { q: string; a: string }[] = []
  for (const line of rest) {
    if (line.startsWith('## ')) break
    const m = line.match(/^\*\*(.+?\?)\*\*\s+(.+)$/)
    if (m) faq.push({ q: plain(m[1]), a: plain(m[2]) })
  }
  return faq
}
