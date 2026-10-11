import { useState, useEffect, useRef } from 'react'

type DomainKey = 'capital' | 'kinetic' | 'metabolic'

interface DomainItem {
  id: DomainKey
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

const DOMAINS: DomainItem[] = [
  {
    id: 'capital',
    indexLabel: '01 / 03 · CAPITAL',
    phaseTag: 'PHASE 05 // CAPITAL PRESERVATION',
    headline: 'Sub-Second Expense Ingest. Zero Spreadsheet Fatigue.',
    lead: 'Traditional budgeting fails because manual bookkeeping requires high cognitive friction when your prefrontal cortex is already depleted from deep work.',
    detail: 'Speak or type "320 cold brew" or "1500 client dinner" in plain English — Brain instantly reconciles burn rates, calculates runway elasticity, and flags stealth subscription renewals.',
    metric: '₹42,850',
    unit: '/mo burn rate',
    substat: '14.2 Months Runway Stability',
    waveformD: 'M 0 160 Q 120 40, 240 160 T 480 160 T 720 160 T 960 160',
    accentColor: 'var(--accent-hero)',
    glowFilter: 'rgba(255, 70, 36, 0.35)',
    telemetryLog: '$ brain ingest "320 INR cold brew" → parsed in 0.38s → burn runway: 14.2 mo',
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
    detail: 'Log weight and reps seamlessly between supersets while the autonomous rest-timer counts down. Brain automatically computes volume tonnage and maps progressive overload trajectories.',
    metric: '18,450 kg',
    unit: 'total tonnage',
    substat: '+5.2% Progressive Overload',
    waveformD: 'M 0 160 Q 120 260, 240 100 T 480 220 T 720 120 T 960 160',
    accentColor: 'var(--accent-emerald)',
    glowFilter: 'rgba(0, 229, 153, 0.35)',
    telemetryLog: '$ log_set("Deadlift", 140kg, 5 reps) → tonnage +700kg → 90s countdown started',
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
    detail: 'Log meals in conversational shorthand to calibrate real-time caloric balance and amino-acid targets. Stay fully fueled for 12-hour high-agency execution sprints.',
    metric: '2,450 kcal',
    unit: '· 165g protein',
    substat: '94% Daily Amino Adherence',
    waveformD: 'M 0 160 Q 120 110, 240 240 T 480 90 T 720 230 T 960 160',
    accentColor: 'var(--accent-cyan)',
    glowFilter: 'rgba(56, 189, 248, 0.35)',
    telemetryLog: '$ nl_meal("double scoop whey and oats") → 48g protein added → glycogen primed',
    proofs: [
      'One-shot natural language meal log',
      'Caloric surplus/deficit balance for cognitive fuel',
      '94% daily protein target adherence rate',
    ],
  },
]

export default function BeyondTasksShowcase() {
  const [activeDomain, setActiveDomain] = useState<DomainKey>('capital')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const totalScrollable = rect.height - window.innerHeight
          if (totalScrollable > 0) {
            const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable))
            if (progress < 0.33) setActiveDomain('capital')
            else if (progress < 0.67) setActiveDomain('kinetic')
            else setActiveDomain('metabolic')
          }
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const current = DOMAINS.find(d => d.id === activeDomain) || DOMAINS[0]

  const handleStepClick = (index: number) => {
    if (!containerRef.current) return
    const containerTop = containerRef.current.offsetTop
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight
    window.scrollTo({ top: containerTop + (totalScrollable * (index / 2)), behavior: 'smooth' })
  }

  return (
    <section className="beyond-scrolly-section" ref={containerRef} id="beyond-tasks">
      <div className="scrolly-sticky-viewport">
        {/* Editorial Section Masthead */}
        <div className="beyond-masthead">
          <div className="telemetry-band-tag">FREQUENCY 03 · PERIPHERAL AUTONOMY</div>
          <h2 className="beyond-title">Beyond Tasks: The Tri-Domain Singularity.</h2>
          <p className="beyond-subtitle">
            Your prefrontal cortex does not operate in a vacuum. Brain bridges task execution directly into capital preservation, kinetic volume, and metabolic fuel.
          </p>
        </div>

        {/* Split Grid: Left is stuck text, Right is single active visual */}
        <div className="scrolly-split-container">
          <div className="scrolly-stuck-text-stage">
            <div className="stuck-phase-header">
              <span className="stuck-phase-tag" style={{ color: current.accentColor }}>{current.phaseTag}</span>
              <span className="stuck-counter-pill">{current.indexLabel}</span>
            </div>
            <h3 className="stuck-headline">{current.headline}</h3>
            <p className="stuck-lead-body">{current.lead}</p>
            <p className="stuck-detail-body">{current.detail}</p>
            <div className="stuck-proof-list">
              {current.proofs.map((proof, idx) => (
                <div key={idx} className="stuck-proof-row">
                  <span className="stuck-proof-arrow" style={{ color: current.accentColor }}>→</span>
                  <span>{proof}</span>
                </div>
              ))}
            </div>

            {/* Stepper Navigation Pills */}
            <div className="stuck-stepper-pills">
              {DOMAINS.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  className={`stuck-stepper-btn ${activeDomain === d.id ? 'active' : ''}`}
                  onClick={() => handleStepClick(i)}
                >
                  <span className="stuck-stepper-dot" style={{ background: activeDomain === d.id ? d.accentColor : 'var(--text-muted)' }} />
                  <span>0{i + 1} // {d.id.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel: exactly ONE view rendered at a time */}
          <div className="scrolly-single-visual-viewport">
            {DOMAINS.map(item => (
              <div key={item.id} className={`scrolly-visual-stage ${activeDomain === item.id ? 'active' : 'dormant'}`}>
                <div className="visual-top-telemetry">
                  <div className="visual-hero-num-row">
                    <span className="visual-metric-val" style={{ color: item.accentColor }}>{item.metric}</span>
                    <span className="visual-metric-unit">{item.unit}</span>
                  </div>
                  <div className="visual-substat-strip">
                    <span className="visual-substat-dot" style={{ background: item.accentColor }} />
                    <span className="visual-substat-text">{item.substat}</span>
                  </div>
                </div>

                <div className="visual-waveform-viewport">
                  <svg className="visual-waveform-svg" viewBox="0 0 960 320" preserveAspectRatio="none">
                    {[80, 160, 240].map(y => (
                      <line key={y} x1="0" y1={y} x2="960" y2={y} stroke="var(--border-subtle)" strokeWidth={y === 160 ? 1 : 0.5} strokeDasharray={y === 160 ? '3 3' : '4 6'} />
                    ))}
                    {[240, 480, 720].map(x => (
                      <line key={x} x1={x} y1="0" x2={x} y2="320" stroke="var(--border-subtle)" strokeWidth={x === 480 ? 1 : 0.5} strokeDasharray="4 6" />
                    ))}
                    <path className="visual-wave-path" d={item.waveformD} fill="none" stroke={item.accentColor} strokeWidth="3.5" style={{ filter: `drop-shadow(0 0 10px ${item.glowFilter})` }} />
                    {[240, 480, 720].map(cx => (
                      <circle key={cx} cx={cx} cy="160" r="5" fill={item.accentColor} className="node-pulse" />
                    ))}
                  </svg>
                </div>

                <div className="visual-event-terminal">
                  <span className="terminal-prompt-dot" style={{ background: item.accentColor }} />
                  <code className="terminal-code-text">{item.telemetryLog}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
