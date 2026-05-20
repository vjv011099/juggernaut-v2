export default function SchemaOrg() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Juggernaut Global',
    url: 'https://thejuggernautglobal.com',
    logo: 'https://thejuggernautglobal.com/logo.svg',
    description: 'Full-stack global expansion platform for Indian D2C brands — compliance, listings, logistics, and execution.',
    foundingLocation: { '@type': 'Place', name: 'India' },
    areaServed: ['India', 'Germany', 'United States', 'United Kingdom', 'United Arab Emirates'],
    knowsAbout: [
      'Indian D2C export', 'Amazon global selling', 'CE marking', 'cross-border e-commerce',
      'compliance for Indian exporters', 'international marketplace expansion',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'hello@thejuggernautglobal.com',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: [],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Juggernaut Global',
    url: 'https://thejuggernautglobal.com',
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'International Expansion Service for Indian D2C Brands',
    provider: { '@type': 'Organization', name: 'Juggernaut Global' },
    description: 'End-to-end global marketplace expansion: compliance, listings, logistics, and AI-powered business intelligence.',
    areaServed: ['Germany', 'United States', 'United Kingdom', 'UAE', 'Canada', 'Australia'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      name: 'Free Strategy Call',
      description: 'A 30-minute strategy call where you receive a market-entry plan, compliance checklist, and capital estimate at no cost.',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    </>
  )
}
