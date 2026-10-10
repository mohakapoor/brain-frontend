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
    <section className="loop-section" id="the-loop">
      <div className="loop-header">
        <div>
          <div className="pill-eyebrow" style={{ marginBottom: '10px' }}>
            <span>●</span>
            <span>The Core Engine</span>
          </div>
          <h2 className="loop-title">The 5-Step Execution Loop</h2>
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Capture → Review → Execute → Track → Improve
        </span>
      </div>

      <div className="loop-grid">
        {steps.map(step => (
          <div key={step.num} className="loop-card">
            <div>
              <span className="loop-step-badge">{step.num}</span>
              <h3 className="loop-card-title">{step.title}</h3>
              <p className="loop-card-desc">{step.desc}</p>
            </div>
            <span style={{ fontSize: '0.78rem', color: step.color, fontWeight: 600 }}>
              ✓ {step.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
