const STATS = [
  { num: '50+',    label: 'Marketplaces covered' },
  { num: '4',      label: 'Core markets' },
  { num: '90 days', label: 'First sale guarantee' },
  { num: '4–16%',  label: 'Performance fee only' },
  { num: '₹0',     label: 'Fee if no sales' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-bar-inner">
        {STATS.map(s => (
          <div key={s.label} className="stats-bar-item">
            <div className="stats-bar-num">{s.num}</div>
            <div className="stats-bar-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
