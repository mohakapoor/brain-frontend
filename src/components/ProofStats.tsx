export default function ProofStats() {
  const stats = [
    {
      number: '< 500ms',
      color: 'var(--accent-hero)',
      label: 'Capture Latency',
      desc: 'Capture ideas the moment they strike.',
    },
    {
      number: '0s',
      color: 'var(--accent-emerald)',
      label: 'Load Time',
      desc: 'Opens instantly every time. No waiting for heavy apps to wake up.',
    },
    {
      number: '100%',
      color: 'var(--accent-cyan)',
      label: 'Private & Yours',
      desc: 'Your data is strictly isolated. No trackers, no bloat, no ads.',
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
