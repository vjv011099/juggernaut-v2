const MARKETS = [
  {
    code: 'DE', name: 'Germany',
    sub: "Europe's largest e-commerce market",
    stat: '€89B', statLabel: 'annual e-commerce spend',
    shops: ['Amazon.de', 'Otto', 'Zalando', 'Kaufland', 'eBay.de'],
  },
  {
    code: 'US', name: 'United States',
    sub: "World's biggest marketplace ecosystem",
    stat: '$1.1T', statLabel: 'annual e-commerce spend',
    shops: ['Amazon.com', 'Walmart', 'Target Plus', 'Etsy', 'TikTok Shop'],
  },
  {
    code: 'AE', name: 'UAE',
    sub: 'Large Indian diaspora, premium demand',
    stat: '6M+', statLabel: 'Indian residents in UAE',
    shops: ['Noon', 'Amazon.ae', 'Namshi', 'Carrefour UAE'],
  },
  {
    code: 'GB', name: 'United Kingdom',
    sub: 'Fast compliance, strong Indian affinity',
    stat: '£138B', statLabel: 'annual e-commerce spend',
    shops: ['Amazon.co.uk', 'ASOS', 'OnBuy', 'Not On High Street'],
  },
]

export default function Marketplaces() {
  return (
    <section className="markets-section">
      <div className="container">
        <p className="section-label">Markets</p>
        <h2 className="section-title">
          Four markets.{' '}
          <span className="teal">50+ marketplaces.</span>
        </h2>
        <p className="section-sub">
          We pick the right market for your product first — then expand.
          Most brands start with Germany or UAE and grow from there.
        </p>

        <div className="markets-grid">
          {MARKETS.map(m => (
            <div key={m.name} className="market-card">
              <div className="market-code-badge">{m.code}</div>
              <div className="market-name">{m.name}</div>
              <div className="market-sub">{m.sub}</div>
              <div className="market-stat">{m.stat}</div>
              <div className="market-stat-label">{m.statLabel}</div>
              <div className="market-shops">
                {m.shops.map(s => (
                  <span key={s} className="market-shop">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
