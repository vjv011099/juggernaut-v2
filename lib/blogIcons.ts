import { Globe, FileCheck, DollarSign, BookOpen, TrendingUp, Package, ShoppingBag, Truck, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Globe, FileCheck, DollarSign, BookOpen,
  TrendingUp, Package, ShoppingBag, Truck, Star,
}

export function getBlogIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Globe
}
