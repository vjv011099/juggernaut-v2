# Juggernaut Global — Website

Production website for **thejuggernautglobal.com**

Built with: **Next.js 14 + TypeScript + Lucide Icons**

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
juggernaut-global/
├── app/
│   ├── layout.tsx          ← Root layout, SEO meta, fonts
│   ├── page.tsx            ← Homepage (assembles all sections)
│   └── blog/
│       └── page.tsx        ← Blog listing page
├── components/
│   ├── Navbar.tsx          ← Fixed nav with mobile menu
│   ├── Hero.tsx            ← Dark hero section
│   ├── MarqueeBanner.tsx   ← Scrolling marketplace names
│   ├── ForYou.tsx          ← Pain points + Priya card
│   ├── HowItWorks.tsx      ← 4-step process
│   ├── WhatYouGet.tsx      ← 6 deliverable cards
│   ├── WhyUs.tsx           ← Differentiators + stats
│   ├── Marketplaces.tsx    ← Marketplace names strip
│   ├── BlogSection.tsx     ← 3 blog cards (homepage)
│   ├── BookingCTA.tsx      ← Email capture + form
│   ├── Footer.tsx          ← Full footer
│   ├── Logo.tsx            ← SVG logo component
│   └── SchemaOrg.tsx       ← JSON-LD structured data
├── lib/
│   └── useReveal.ts        ← Scroll reveal hook
├── styles/
│   └── globals.css         ← Design tokens + utilities
└── public/
    └── (place logo.svg, og-image.jpg here)
```

---

## How to Edit with Claude Code

Open this project in VS Code, then use Claude Code (terminal):

**Change hero headline:**
> "Update the headline in Hero.tsx to say ..."

**Add a new blog post:**
> "Add a new blog post to BLOG_POSTS in BlogSection.tsx with title '...', tag 'Market Guide', slug '...'"

**Change the booking email:**
> "Replace hello@thejuggernautglobal.com with [your email] in BookingCTA.tsx"

**Add Calendly:**
> "Replace the mailto link in BookingCTA.tsx with a Calendly popup for [your calendly url]"

**Add a new section:**
> "Create a new Testimonials.tsx component and add it to app/page.tsx between WhyUs and Marketplaces"

---

## Deploying to Hostinger

This project uses `output: 'export'` in `next.config.js` which builds a static site.

### Step 1 — Build
```bash
npm run build
```
This creates an `out/` folder with your complete static site.

### Step 2 — Upload to Hostinger
1. Log in to Hostinger hPanel
2. Go to **File Manager** → `public_html`
3. Delete existing files (keep `.htaccess` if present)
4. Upload everything from your `out/` folder
5. Done — your site is live!

### Step 3 — Custom Domain
In Hostinger hPanel:
1. Go to **Domains** → point `thejuggernautglobal.com` to your hosting
2. Enable **SSL** (free with Hostinger)

### Optional — .htaccess for clean URLs
Create a `.htaccess` file in `public_html`:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ /$1.html [L,QSA]
```

---

## What to Update Before Going Live

1. **Email** — Search `hello@thejuggernautglobal.com` in BookingCTA.tsx and replace
2. **Logo** — Add your actual SVG logo to `public/logo.svg`
3. **OG Image** — Add `public/og-image.jpg` (1200×630px) for social sharing
4. **Blog posts** — Edit `BLOG_POSTS` array in `components/BlogSection.tsx`
5. **Calendly** — Add your booking link when ready in `BookingCTA.tsx`

---

## Colour Tokens (globals.css)

| Variable        | Value     | Usage                    |
|----------------|-----------|--------------------------|
| `--teal`        | `#0CC0DF` | CTAs, highlights         |
| `--teal-dark`   | `#0097B2` | Accent text, icons       |
| `--navy`        | `#0A0F1E` | Dark hero/sections       |
| `--off-white`   | `#F7FAFC` | Light section backgrounds|
| `--text-dark`   | `#0D1117` | Headings                 |
| `--text-muted`  | `#6B7280` | Body copy                |

Change any colour in one place → updates everywhere.
