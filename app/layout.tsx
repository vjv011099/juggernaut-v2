import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''
const META_PIXEL_ID = '2418308202008934'

export const metadata: Metadata = {
  metadataBase: new URL('https://thejuggernautglobal.com'),
  title: {
    default: 'Juggernaut Global — Take Your Indian D2C Brand Global',
    template: '%s — Juggernaut Global',
  },
  description:
    'Juggernaut Global takes Indian D2C brands global. Sell on Amazon, Noon, Otto, Walmart and 50+ marketplaces across Germany, USA, UAE and UK. Compliance handled. AI-powered. First sale in 90 days.',
  keywords: [
    'Indian D2C global expansion',
    'sell from India internationally',
    'cross border ecommerce India',
    'sell on Amazon Germany from India',
    'sell on Noon UAE from India',
    'Indian brands going global',
    'global marketplace expansion India',
    'compliance for Indian exporters',
    'D2C international launch India',
    'export Indian products globally',
  ],
  authors: [
    { name: 'Vaibhav Vaja', url: 'https://thejuggernautglobal.com/about' },
    { name: 'Dhruva Mehta', url: 'https://thejuggernautglobal.com/about' },
  ],
  creator: 'Juggernaut Global',
  publisher: 'Juggernaut Global',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thejuggernautglobal.com',
    siteName: 'Juggernaut Global',
    title: 'Juggernaut Global — Take Your Indian D2C Brand Global',
    description:
      'AI-powered global expansion for Indian D2C brands. Germany, USA, UAE, UK. 50+ marketplaces. Compliance handled. First sale guaranteed in 90 days.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Juggernaut Global — AI-powered global expansion for Indian D2C brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@juggernautglobal',
    creator: '@juggernautglobal',
    title: 'Juggernaut Global — Take Your Indian D2C Brand Global',
    description:
      'AI-powered global expansion for Indian D2C brands. Germany, USA, UAE, UK. First sale in 90 days.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://thejuggernautglobal.com' },
  verification: {
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE', // add after GSC setup
  },
  category: 'business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        {/* Schema.org structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://thejuggernautglobal.com/#organization',
              name: 'Juggernaut Global',
              url: 'https://thejuggernautglobal.com',
              logo: 'https://thejuggernautglobal.com/og-image.svg',
              email: 'hello@thejuggernautglobal.com',
              foundingDate: '2025',
              description: 'Full-stack global expansion platform for Indian D2C brands. Sell on Amazon, Noon, Otto, Walmart and 50+ marketplaces across Germany, USA, UAE and UK.',
              address: { '@type': 'PostalAddress', addressLocality: 'Düsseldorf', addressCountry: 'DE' },
              areaServed: ['DE', 'US', 'AE', 'GB', 'IN'],
              knowsAbout: ['Indian D2C exports', 'Amazon Germany', 'CE marking', 'VAT registration Germany', 'cross-border e-commerce India', 'Noon UAE', 'Amazon USA from India'],
              sameAs: ['https://www.linkedin.com/company/juggernaut-global', 'https://www.instagram.com/juggernautglobal'],
              founder: [
                { '@type': 'Person', name: 'Vaibhav Vaja', jobTitle: 'Founder', url: 'https://www.linkedin.com/in/vaibhavvaja/', address: { '@type': 'PostalAddress', addressLocality: 'Düsseldorf', addressCountry: 'DE' } },
                { '@type': 'Person', name: 'Dhruva Mehta', jobTitle: 'Founder', url: 'https://www.linkedin.com/in/dhruvamehta/', address: { '@type': 'PostalAddress', addressCountry: 'IN' } },
              ],
            },
            {
              '@type': 'Service',
              '@id': 'https://thejuggernautglobal.com/#service',
              name: 'Global E-commerce Expansion for Indian D2C Brands',
              provider: { '@id': 'https://thejuggernautglobal.com/#organization' },
              description: 'End-to-end international marketplace launch for Indian brands — compliance, listings, AI optimisation, logistics, and account management across Germany, USA, UAE and UK.',
              areaServed: ['Germany', 'United States', 'UAE', 'United Kingdom'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Expansion Plans',
                itemListElement: [
                  { '@type': 'Offer', name: 'Performance Partnership', description: '4–16% of revenue generated. No results, no fee.', priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantiativeValue', value: '4-16', unitCode: 'PCT' } } },
                  { '@type': 'Offer', name: 'Monthly Retainer', description: 'Fixed monthly fee scoped to active markets.' },
                ],
              },
            },
            {
              '@type': 'WebSite',
              '@id': 'https://thejuggernautglobal.com/#website',
              url: 'https://thejuggernautglobal.com',
              name: 'Juggernaut Global',
              publisher: { '@id': 'https://thejuggernautglobal.com/#organization' },
              potentialAction: { '@type': 'SearchAction', target: 'https://thejuggernautglobal.com/blog?q={search_term_string}', 'query-input': 'required name=search_term_string' },
            },
          ],
        })}} />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
