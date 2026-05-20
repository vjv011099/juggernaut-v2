const NAMES = ['Amazon', 'Walmart', 'Shopify', 'eBay', 'Etsy', 'Target', 'Wayfair', 'TikTok Shop']

export default function Marketplaces() {
  return (
    <div style={{
      background: 'var(--off-white)',
      padding: '52px 6vw',
      textAlign: 'center',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <p style={{
        fontSize: 11, fontWeight: 600,
        letterSpacing: '0.10em', textTransform: 'uppercase',
        color: 'var(--text-dim)', marginBottom: 28,
      }}>
        Your products, selling globally on
      </p>
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 40, flexWrap: 'wrap',
      }}>
        {NAMES.map(name => (
          <span key={name} className="marketplace-name">{name}</span>
        ))}
      </div>
    </div>
  )
}
