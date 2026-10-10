export default function ProofStats() {
  const stats = [
    {
      number: '< 500ms',
      color: 'var(--accent-hero)',
      label: 'Capture Latency',
      desc: 'Offload thoughts before working memory decays. Zero categorization friction.',
    },
    {
      number: '0.0ms',
      color: 'var(--accent-emerald)',
      label: 'Cold Start Time',
      desc: 'V8 isolates running across 300+ edge locations worldwide for instant response.',
    },
    {
      number: '100%',
      color: 'var(--accent-cyan)',
      label: 'Tenant Isolation',
      desc: 'Strict D1 SQLite foreign key cascades and single-device encrypted cookies.',
    },
    {
      number: '1 Source',
      color: 'var(--accent-yellow)',
      label: 'Single Source of Truth',
      desc: 'Web dashboard and conversational AI access the exact same persistent state.',
    },
  ]

  return (
    <section className="section-full section-spacing" id="proof-stats">
      <div className="stats-grid-wide">
        {stats.map((s, idx) => (
          <div key={s.label} className={`stat-card-big reveal-on-scroll reveal-delay-${idx + 1}`}>
            <div className="stat-number-huge" style={{ color: s.color }}>
              {s.number}
            </div>
            <div className="stat-label-title">{s.label}</div>
            <div className="stat-sub-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
