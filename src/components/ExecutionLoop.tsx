export default function ExecutionLoop() {
  const steps = [
    {
      num: '01',
      title: 'Capture',
      tag: 'INGEST',
      desc: 'Cmd+K / Fast MCP Hook',
      output: 'Raw Inbox Record',
      cls: 'node-pos-left',
    },
    {
      num: '02',
      title: 'Review',
      tag: 'TRIAGE',
      desc: 'Morning Backlog Filter',
      output: 'Active Day Queue',
      cls: 'node-pos-top-left',
    },
    {
      num: '03',
      title: 'Execute',
      tag: 'FOCUS',
      desc: 'Single-Task Lockdown',
      output: 'Unfinished Pinned > Done',
      cls: 'node-pos-top-right',
    },
    {
      num: '04',
      title: 'Track',
      tag: 'PERSIST',
      desc: 'Cloudflare D1 SQLite',
      output: 'Sub-ms Immutable Write',
      cls: 'node-pos-right',
    },
    {
      num: '05',
      title: 'Improve',
      tag: 'FEEDBACK',
      desc: 'Auto Velocity Recalculation',
      output: 'Closes Intent-Action Gap',
      cls: 'node-pos-bottom',
    },
  ]

  return (
    <section className="section-full section-spacing" id="the-loop">
      <div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
          The 5-Step Execution Loop
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '6px', fontSize: '1.05rem', maxWidth: '640px' }}>
          A continuous closed-loop system: every completed action feeds directly back into future calibration.
        </p>
      </div>

      {/* Orbital Flow Diagram */}
      <div className="orbital-loop-wrapper reveal-on-scroll">
        {/* Responsive Desktop & Tablet Diagram */}
        <div className="orbital-diagram-canvas">
          <svg className="orbital-svg-track" viewBox="0 0 1000 440" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker
                id="loop-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent-hero)" />
              </marker>
            </defs>

            {/* Path 01: Capture -> Review (Curves up and right) */}
            <path
              d="M 110 178 C 110 95, 180 77, 278 77"
              fill="none"
              stroke="var(--accent-hero)"
              strokeWidth="2.2"
              markerEnd="url(#loop-arrow)"
              className="orbital-path-pulse"
            />

            {/* Path 02: Review -> Execute (Straight right) */}
            <path
              d="M 474 77 L 530 77"
              fill="none"
              stroke="var(--accent-hero)"
              strokeWidth="2.2"
              markerEnd="url(#loop-arrow)"
              className="orbital-path-pulse"
            />

            {/* Path 03: Execute -> Track (Curves down and right) */}
            <path
              d="M 724 77 C 825 77, 890 95, 890 172"
              fill="none"
              stroke="var(--accent-hero)"
              strokeWidth="2.2"
              markerEnd="url(#loop-arrow)"
              className="orbital-path-pulse"
            />

            {/* Path 04: Track -> Improve (Curves down and left) */}
            <path
              d="M 890 262 C 890 345, 720 363, 608 363"
              fill="none"
              stroke="var(--accent-hero)"
              strokeWidth="2.2"
              markerEnd="url(#loop-arrow)"
              className="orbital-path-pulse"
            />

            {/* Path 05: Improve -> Capture (Curves left and up into Capture) */}
            <path
              d="M 395 363 C 280 363, 110 345, 110 268"
              fill="none"
              stroke="var(--accent-hero)"
              strokeWidth="2.2"
              markerEnd="url(#loop-arrow)"
              className="orbital-path-pulse"
            />
          </svg>

          {/* 5 Diagram Nodes */}
          {steps.map(step => (
            <div key={step.num} className={`orbital-node ${step.cls}`}>
              <div className="orbital-node-header">
                <span className="orbital-num">{step.num}</span>
                <span className="orbital-tag">{step.tag}</span>
              </div>
              <h3 className="orbital-title">{step.title}</h3>
              <div className="orbital-desc">{step.desc}</div>
              <div className="orbital-output">{step.output}</div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Fallback (< 768px) */}
        <div className="mobile-loop-list">
          {steps.map((step, idx) => (
            <div key={step.num} className="mobile-loop-item">
              <div className="orbital-node-header">
                <span className="orbital-num">{step.num}</span>
                <span className="orbital-tag">{step.tag}</span>
              </div>
              <h3 className="orbital-title">{step.title}</h3>
              <div className="orbital-desc">{step.desc}</div>
              <div className="orbital-output">{step.output}</div>

              {idx < steps.length - 1 ? (
                <div className="mobile-loop-arrow">↓</div>
              ) : (
                <div className="mobile-loop-arrow return">↺ loops back to 01 Capture</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
