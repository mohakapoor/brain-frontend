import { useState, useEffect, useRef } from 'react'

type DomainId = 'capital' | 'kinetic' | 'metabolic'

interface DomainItem {
  id: DomainId
  indexLabel: string
  phaseTag: string
  headline: string
  lead: string
  detail: string
  metric: string
  unit: string
  substat: string
  waveformD: string
  accentColor: string
  glowFilter: string
  telemetryLog: string
  proofs: string[]
}

const VIEWS: DomainItem[] = [
  {
    id: 'capital',
    indexLabel: '01 / 03 · CAPITAL',
    phaseTag: 'PHASE 05 // CAPITAL PRESERVATION',
    headline: 'Sub-Second Expense Ingest. Zero Spreadsheet Fatigue.',
    lead: 'Traditional budgeting fails because manual bookkeeping requires high cognitive friction when your prefrontal cortex is already depleted from deep work.',
    detail: 'Speak or type "320 cold brew" or "1500 client dinner" in plain English — Brain instantly reconciles burn rates, calculates runway elasticity, and flags stealth subscription renewals with zero spreadsheets.',
    metric: '₹42,850',
    unit: '/mo burn rate',
    substat: '14.2 Months Runway Stability',
    waveformD: 'M 0 160 Q 120 40, 240 160 T 480 160 T 720 160 T 960 160',
    accentColor: 'var(--accent-hero)',
    glowFilter: 'rgba(255, 70, 36, 0.35)',
    telemetryLog: 'Natural Language Ingest: "320 INR cold brew" → burn indexed in 0.38s. Zero spreadsheet lag.',
    proofs: [
      'Average capture latency: < 0.4 seconds',
      'Autonomous burn rate delta & runway calculation',
      'Stealth subscription renewal audit',
    ],
  },
  {
    id: 'kinetic',
    indexLabel: '02 / 03 · KINETIC',
    phaseTag: 'PHASE 06 // KINETIC PROGRESSION',
    headline: 'Automated Overload Curve Without Breaking Gym Flow.',
    lead: 'Fumbling with complex workout apps ruins gym flow states and increases intra-set rest variance. Brain delivers instant set logging directly from your locked screen.',
    detail: 'Log weight and reps seamlessly between supersets while the autonomous rest-timer counts down. Brain automatically computes volume tonnage and maps progressive overload trajectories without manual math.',
    metric: '18,450 kg',
    unit: 'total tonnage',
    substat: '+5.2% Progressive Overload',
    waveformD: 'M 0 160 Q 120 260, 240 100 T 480 220 T 720 120 T 960 160',
    accentColor: 'var(--accent-emerald)',
    glowFilter: 'rgba(0, 229, 153, 0.35)',
    telemetryLog: 'Set Registered: Deadlift 140kg × 5 reps → rest timer (90s) initiated. Concentration unbroken.',
    proofs: [
      'Autonomous rest interval synchronization',
      'Compound lift volume tonnage & overload curve',
      '4-day split streak tracking and recovery alerts',
    ],
  },
  {
    id: 'metabolic',
    indexLabel: '03 / 03 · METABOLIC',
    phaseTag: 'PHASE 07 // METABOLIC PRECISION',
    headline: 'Fuel the Prefrontal Cortex Without Food Guilt.',
    lead: 'Your brain consumes 20% of your body\'s daily glucose. When caloric and protein intake dip, working memory degrades rapidly.',
    detail: 'Log meals in conversational shorthand to calibrate real-time caloric balance and amino-acid targets. Stay fully fueled for 12-hour high-agency execution sprints without weighing lettuce leaves for 15 minutes.',
    metric: '2,450 kcal',
    unit: '· 165g protein',
    substat: '94% Daily Amino Adherence',
    waveformD: 'M 0 160 Q 120 110, 240 240 T 480 90 T 720 230 T 960 160',
    accentColor: 'var(--accent-cyan)',
    glowFilter: 'rgba(56, 189, 248, 0.35)',
    telemetryLog: 'Macro Ingest: Conversational shorthand parsed → glycogen calibrated to prevent 3PM memory decay.',
    proofs: [
      'One-shot natural language meal log',
      'Caloric surplus/deficit balance for cognitive fuel',
      '94% daily protein target adherence rate',
    ],
  },
]

export default function BeyondTasksShowcase() {
  const [activeId, setActiveId] = useState<DomainId>('capital')
  const viewRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-view-id') as DomainId
            if (id) setActiveId(id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
      }
    )

    Object.values(viewRefs.current).forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const current = VIEWS.find(v => v.id === activeId) || VIEWS[0]

  const handleScrollToView = (id: DomainId) => {
    setActiveId(id)
    const target = viewRefs.current[id]
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="section-full section-spacing" id="beyond-tasks">
      {/* Editorial Section Masthead */}
      <div className="beyond-masthead reveal-on-scroll">
        <div className="telemetry-band-tag">FREQUENCY 03 · PERIPHERAL AUTONOMY</div>
        <h2 className="beyond-title">
          Beyond Tasks: The Tri-Domain Singularity.
        </h2>
        <p className="beyond-subtitle">
          Your prefrontal cortex does not operate in a vacuum. Brain bridges task execution directly into capital preservation, kinetic volume, and metabolic fuel.
        </p>
      </div>

      {/* Split-Screen Scrollytelling Container */}
      <div className="scrolly-split-container">
        {/* LEFT COLUMN: Sticky Dynamic Vector HUD Instrument (Pins to top while right scrolls) */}
        <div className="scrolly-left-instrument-wrapper">
          <div className="scrolly-sticky-instrument">
            <div className="instrument-top-status">
              <span className="instrument-phase-tag" style={{ color: current.accentColor }}>
                {current.phaseTag}
              </span>
              <div className="instrument-hero-metric">
                <span className="metric-big-num" style={{ color: current.accentColor }}>
                  {current.metric}
                </span>
                <span className="metric-unit-sub">{current.unit}</span>
              </div>
              <div className="instrument-substat-row">
                <span className="substat-pulsar" style={{ background: current.accentColor }} />
                <span className="substat-text">{current.substat}</span>
              </div>
            </div>

            {/* Dynamic Vector Waveform Surface (Zero Box, Pure SVG on Dot Grid) */}
            <div className="instrument-vector-viewport">
              <svg className="instrument-vector-svg" viewBox="0 0 960 320" preserveAspectRatio="none">
                <line x1="0" y1="80" x2="960" y2="80" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="4 6" />
                <line x1="0" y1="160" x2="960" y2="160" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="240" x2="960" y2="240" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="4 6" />
                <line x1="240" y1="0" x2="240" y2="320" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="4 6" />
                <line x1="480" y1="0" x2="480" y2="320" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="720" y1="0" x2="720" y2="320" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="4 6" />

                <path
                  className="instrument-wave-trace"
                  d={current.waveformD}
                  fill="none"
                  stroke={current.accentColor}
                  strokeWidth="3"
                  style={{ filter: `drop-shadow(0 0 10px ${current.glowFilter})` }}
                />

                <circle cx="240" cy="160" r="5" fill={current.accentColor} className="node-pulse" />
                <circle cx="480" cy="160" r="5" fill={current.accentColor} className="node-pulse" />
                <circle cx="720" cy="160" r="5" fill={current.accentColor} className="node-pulse" />
              </svg>
            </div>

            {/* Live Event Telemetry Streamer */}
            <div className="instrument-event-ticker">
              <span className="ticker-bullet" style={{ background: current.accentColor }} />
              <p className="ticker-message">{current.telemetryLog}</p>
            </div>

            {/* Quick-Jump Stepper Pills */}
            <div className="instrument-stepper-pills">
              {VIEWS.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  className={`stepper-pill-btn ${activeId === v.id ? 'active' : ''}`}
                  onClick={() => handleScrollToView(v.id)}
                >
                  <span
                    className="stepper-dot"
                    style={{ background: activeId === v.id ? v.accentColor : 'var(--text-muted)' }}
                  />
                  <span>0{i + 1} // {v.id.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The 3 Scrollable Views (One view in focus at a time) */}
        <div className="scrolly-right-views-column">
          {VIEWS.map(v => (
            <div
              key={v.id}
              data-view-id={v.id}
              className={`scrolly-view-slide ${activeId === v.id ? 'slide-active' : ''}`}
              ref={el => { viewRefs.current[v.id] = el }}
            >
              <div className="view-slide-counter" style={{ color: v.accentColor }}>
                {v.indexLabel}
              </div>
              <h3 className="view-slide-headline">{v.headline}</h3>
              <p className="view-slide-lead">{v.lead}</p>
              <p className="view-slide-detail">{v.detail}</p>
              <div className="view-slide-proof-list">
                {v.proofs.map((proof, idx) => (
                  <div key={idx} className="view-proof-row">
                    <span className="view-proof-arrow" style={{ color: v.accentColor }}>→</span>
                    <span>{proof}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
