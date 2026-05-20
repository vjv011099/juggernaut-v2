'use client'

const COMPLIANCE_ITEMS = [
  { icon: '🇪🇺', name: 'CE Marking (EU)',         status: 'done',   label: 'Complete' },
  { icon: '🛡️',  name: 'GPSR — Responsible Person', status: 'done',   label: 'Complete' },
  { icon: '🇩🇪', name: 'German VAT Registration',   status: 'prog',   label: 'In progress' },
  { icon: '🇺🇸', name: 'FDA Facility Registration',  status: 'needed', label: 'Next market' },
  { icon: '🇦🇪', name: 'HALAL Certification (UAE)',  status: 'needed', label: 'Queued' },
]

const DASHBOARD_ROWS = [
  { key: '🇩🇪 Amazon.de — Last 30 days', val: '₹3.2L', badge: '+18%', color: 'g' },
  { key: '🇦🇪 Noon UAE — Last 30 days',  val: '₹1.1L', badge: '+41%', color: 'g' },
  { key: 'Ad spend (all markets)',        val: '₹28K',  badge: 'ROAS 4.2x', color: 't' },
  { key: 'Open compliance tasks',         val: '0',     badge: 'All clear', color: 't' },
]

const DIFF_ROWS = [
  { feat: 'Local compliance', jg: 'Handled end-to-end', them: 'Your problem' },
  { feat: 'Native language listings', jg: 'German, Arabic, English', them: 'English only' },
  { feat: 'FBA logistics', jg: 'Set up & managed', them: 'DIY' },
  { feat: 'PPC advertising', jg: 'Managed by us', them: 'Not included' },
  { feat: 'Fee if no sales', jg: 'Zero', them: 'Retainer still due' },
]

export default function WhyUs() {
  return (
    <section className="features-section">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-label section-label--dark">Why Juggernaut Global</p>
        <h2 className="section-title section-title--light">
          Everything Amazon Global Selling{' '}
          <span className="teal">doesn&apos;t give you.</span>
        </h2>
        <p className="section-sub section-sub--light">
          A listing page is 5% of the work. We handle the other 95%.
        </p>

        <div className="features-grid">

          {/* Live Revenue Dashboard */}
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-tag">📊 Live Dashboard</div>
              <h3 className="feature-card-title">Revenue in INR &amp; local currency</h3>
              <p className="feature-card-body">See exactly what each market is earning — updated daily, broken down by marketplace, ad spend, and net margin.</p>
            </div>
            <div className="feature-card-visual">
              <div className="mini-dashboard">
                <div className="mini-dash-bar">
                  <div className="mini-dash-dot mini-dash-dot--r" />
                  <div className="mini-dash-dot mini-dash-dot--y" />
                  <div className="mini-dash-dot mini-dash-dot--g" />
                  <span className="mini-dash-title">Juggernaut Dashboard — Live</span>
                </div>
                <div className="mini-dash-body">
                  {DASHBOARD_ROWS.map(r => (
                    <div key={r.key} className="mini-dash-row">
                      <span className="mini-dash-key">{r.key}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className="mini-dash-val">{r.val}</span>
                        <span className={`mini-dash-badge mini-dash-badge--${r.color}`}>{r.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Tracker */}
          <div className="feature-card">
            <div className="feature-card-header">
              <div className="feature-card-tag">✅ Compliance Tracker</div>
              <h3 className="feature-card-title">We handle every certification</h3>
              <p className="feature-card-body">CE marking, GPSR, VAT, FDA, HALAL — tracked and filed by our team. You never chase paperwork in a foreign language.</p>
            </div>
            <div className="feature-card-visual">
              <div className="compliance-list">
                {COMPLIANCE_ITEMS.map(item => (
                  <div key={item.name} className="compliance-item">
                    <span className="compliance-icon">{item.icon}</span>
                    <span className="compliance-name">{item.name}</span>
                    <span className={`compliance-status compliance-status--${item.status}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison table — full width */}
          <div className="feature-card feature-card--wide">
            <div className="feature-card-header">
              <div className="feature-card-tag">⚔️ Head to Head</div>
              <h3 className="feature-card-title">Juggernaut Global vs. doing it yourself</h3>
              <p className="feature-card-body">Amazon Global Selling gives you access. We give you results.</p>
            </div>
            <div className="feature-card-visual">
              <div className="comparison-card">
                <div className="comparison-glow" />
                <div className="comparison-header">
                  <span className="comparison-col-head comparison-col-head--dim">Feature</span>
                  <span className="comparison-col-head comparison-col-head--jg">✦ Juggernaut Global</span>
                  <span className="comparison-col-head comparison-col-head--trad">Amazon Global Selling alone</span>
                </div>
                {DIFF_ROWS.map(r => (
                  <div key={r.feat} className="comparison-row">
                    <span className="comparison-feature">{r.feat}</span>
                    <span className="comparison-jg">
                      <span className="comparison-jg-check">✓</span>
                      {r.jg}
                    </span>
                    <span className="comparison-trad">{r.them}</span>
                  </div>
                ))}
                <div className="comparison-location">
                  <div className="comparison-location-icon">📍</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 3 }}>Physical presence in Germany</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', lineHeight: 1.5 }}>Our team is based in Düsseldorf — Europe's largest e-commerce market. No remote guessing. Real ground-level knowledge.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
