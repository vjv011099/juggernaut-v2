import { Globe, FileCheck, DollarSign, BookOpen, TrendingUp, Package, ShoppingBag, Truck, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import rawPosts from '@/content/blog.json'

export interface BlogPost {
  slug: string
  tag: string
  icon: string
  title: string
  excerpt: string
  date: string
  dateLabel: string
  readTime: string
  content: string
  Icon: LucideIcon
}

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, FileCheck, DollarSign, BookOpen,
  TrendingUp, Package, ShoppingBag, Truck, Star,
}

export const BLOG_POSTS: BlogPost[] = (rawPosts as Omit<BlogPost, 'Icon'>[]).map(p => ({
  ...p,
  Icon: ICON_MAP[p.icon] ?? Globe,
}))
