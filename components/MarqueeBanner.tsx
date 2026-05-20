const MARKETPLACES = [
  'Amazon', 'Walmart', 'Shopify', 'eBay',
  'Etsy', 'Target', 'Wayfair', 'TikTok Shop',
]

export default function MarqueeBanner() {
  const doubled = [...MARKETPLACES, ...MARKETPLACES]

  return (
    <div className="marquee-section">
      <p className="marquee-label">Your products, live on</p>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <span key={i} className="marquee-item">
              {name}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
