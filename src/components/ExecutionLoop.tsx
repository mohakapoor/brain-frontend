export default function ExecutionLoop() {
  const steps = [
    {
      num: 'STEP 01',
      title: 'Capture',
      desc: 'Minimal friction while working. Sub-500ms capture without losing your train of thought.',
      tag: 'Zero distraction',
      color: 'var(--accent-emerald)',
    },
    {
      num: 'STEP 02',
      title: 'Review',
      desc: 'Morning backlog triage. Select what matters for today, move it to the active queue, and discard the noise.',
      tag: 'Backlog curation',
      color: 'var(--accent-cyan)',
    },
    {
      num: 'STEP 03',
      title: 'Execute',
      desc: 'Single-task lockdown. Unfinished tasks stay strictly above completed ones to eliminate ambiguity.',
      tag: 'Deep focus',
      color: 'var(--accent-hero)',
    },
    {
      num: 'STEP 04',
      title: 'Track',
      desc: 'Concrete persistence. Sub-millisecond Cloudflare D1 record writes that make daily momentum visible.',
      tag: 'Visible momentum',
      color: 'var(--accent-yellow)',
    },
    {
      num: 'STEP 05',
      title: 'Improve',
      desc: 'Tight feedback loops. Closing the gap between "I should do this" and "I am doing this."',
      tag: 'Repeat daily',
      color: '#ffffff',
    },
  ]

  return (
    <section className="section-full section-spacing" id="the-loop">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div className="pill-eyebrow" style={{ marginBottom: '12px' }}>
            <span>●</span>
            <span>The Core Engine</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
            The 5-Step Execution Loop
          </h2>
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
          Capture → Review → Execute → Track → Improve
        </span>
      </div>

      <div className="loop-grid-5">
        {steps.map(step => (
          <div key={step.num} className="loop-step-card">
            <div>
              <span className="step-badge-num">{step.num}</span>
              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-desc">{step.desc}</p>
            </div>
            <span style={{ fontSize: '0.82rem', color: step.color, fontWeight: 700, marginTop: '20px' }}>
              ✓ {step.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
