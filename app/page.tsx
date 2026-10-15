import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import MarqueeBanner from '@/components/MarqueeBanner'
import ForYou from '@/components/ForYou'
import HowItWorks from '@/components/HowItWorks'
import WhyUs from '@/components/WhyUs'
import Marketplaces from '@/components/Marketplaces'
import Founders from '@/components/Founders'
import Pricing from '@/components/Pricing'
import BlogSection from '@/components/BlogSection'
import FAQ from '@/components/FAQ'
import BookingCTA from '@/components/BookingCTA'
import SchemaOrg from '@/components/SchemaOrg'
import { getPublishedPosts, toCard } from '@/lib/blogData'

// Re-check hourly so scheduled blog posts appear on their publish date.
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Juggernaut Global — AI-Powered Cross-Border E-Commerce for Indian D2C Brands',
  description:
    'Take your Indian D2C brand to Amazon, Walmart, Noon, Otto and 50+ local marketplaces across Germany, UK, USA and UAE. AI infrastructure built for you. First sale guaranteed in 90 days.',
}

export default function HomePage() {
  return (
    <>
      <SchemaOrg />
      <Hero />
      <StatsBar />
      <MarqueeBanner />
      <ForYou />
      <HowItWorks />
      <WhyUs />
      <Marketplaces />
      <Founders />
      <Pricing />
      <BlogSection posts={getPublishedPosts().slice(0, 3).map(toCard)} />
      <FAQ />
      <BookingCTA />
    </>
  )
}
