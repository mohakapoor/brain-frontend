import { useState } from 'react'

interface DomainInfo {
  id: string
  num: string
  title: string
  tagline: string
  desc: string
  metrics: { label: string; value: string; sub: string }[]
  previewType: 'finance' | 'fitness' | 'nutrition'
}

const DOMAINS: DomainInfo[] = [
  {
    id: 'finance',
    num: '01',
    title: 'Finance & Cashflow',
    tagline: 'Frictionless Expense & Burn Rate Control',
    desc: 'Manual transaction capture in < 1 second. Track recurring subscriptions, capital burn rate, and monthly budget allocations without bloated spreadsheet overhead.',
    metrics: [
      { label: 'MONTHLY BURN', value: '₹42,850', sub: 'Fixed overhead + infra' },
      { label: 'RECURRING SUBS', value: '6 Active', sub: 'Cloudflare, Gym, API' },
      { label: 'SAVINGS DELTA', value: '+34.2%', sub: 'Vs. previous 30-day baseline' },
    ],
    previewType: 'finance',
  },
  {
    id: 'fitness',
    num: '02',
    title: 'Fitness & Progression',
    tagline: 'Progressive Overload & Lift Architecture',
    desc: 'Log sets, reps, and tonnage during rest intervals without breaking cadence. Automated progressive overload tracking and workout split consistency graphs.',
    metrics: [
      { label: 'WEEKLY TONNAGE', value: '18,450 kg', sub: 'Compound lift volume' },
      { label: 'SPLIT CONSISTENCY', value: '4 / 4 Days', sub: 'Push / Pull / Legs / Upper' },
      { label: 'PROGRESSION RATE', value: '+2.5 kg', sub: 'Bench & Squat cycle delta' },
    ],
    previewType: 'fitness',
  },
  {
    id: 'nutrition',
    num: '03',
    title: 'Nutrition & Calories',
    tagline: 'Metabolic Targets & Macro Precision',
    desc: 'Speed-log meals, calories, and macronutrient targets. Track protein grams and caloric surplus/deficit to align fuel with physical training demands.',
    metrics: [
      { label: 'CALORIC TARGET', value: '2,450 kcal', sub: '1,820 consumed · 630 left' },
      { label: 'PROTEIN INTAKE', value: '165g / 175g', sub: '94% of daily optimal target' },
      { label: 'MACRO RATIO', value: '40 / 30 / 30', sub: 'Carbs / Protein / Healthy Fats' },
    ],
    previewType: 'nutrition',
  },
]

export default function EcosystemPillars() {
  const [activeTab, setActiveTab] = useState(0)
  const current = DOMAINS[activeTab]

  return (
    <section className="section-full section-spacing" id="ecosystem-pillars">
      <div className="domain-header-row">
        <div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
            Beyond Tasks: One System for Life, Wealth, & Body
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1.05rem', maxWidth: '720px' }}>
            Execution is multi-dimensional. Your second brain extends from daily tasks into wealth preservation, progressive strength, and metabolic fuel.
          </p>
        </div>
      </div>

      {/* Domain Navigation Tabs */}
      <div className="domain-tabs-bar">
        {DOMAINS.map((domain, idx) => (
          <button
            key={domain.id}
            type="button"
            className={`domain-tab-btn ${activeTab === idx ? 'active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            <span className="domain-tab-num">{domain.num}</span>
            <span className="domain-tab-name">{domain.title}</span>
          </button>
        ))}
      </div>

      {/* Unboxed Editorial Domain Showcase */}
      <div className="domain-stage-grid reveal-on-scroll">
        <div className="domain-info-col">
          <div className="domain-tagline">{current.tagline}</div>
          <h3 className="domain-panel-title">{current.title}</h3>
          <p className="domain-panel-desc">{current.desc}</p>

          <div className="domain-metrics-grid">
            {current.metrics.map(m => (
              <div key={m.label} className="domain-metric-cell">
                <span className="domain-metric-label">{m.label}</span>
                <span className="domain-metric-val">{m.value}</span>
                <span className="domain-metric-sub">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live UI State Preview Window */}
        <div className="domain-preview-col">
          {current.previewType === 'finance' && (
            <div className="telemetry-screen">
              <div className="telemetry-screen-bar">
                <span className="telemetry-chip-tag">LEDGER_DISPATCH</span>
                <span className="telemetry-status">SQLite D1 Synced</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">14:22</span>
                <span className="log-action">Expense: Cloudflare Workers Paid</span>
                <span className="log-amt negative">-₹420</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">11:05</span>
                <span className="log-action">Expense: Whole Foods Groceries</span>
                <span className="log-amt negative">-₹1,850</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">09:15</span>
                <span className="log-action">Recurring: Monthly Gym Access</span>
                <span className="log-amt negative">-₹3,500</span>
              </div>
              <div className="telemetry-footer-summary">
                <span>Net Outflow Today</span>
                <span className="text-hero-mono">₹5,770 · Within Budget</span>
              </div>
            </div>
          )}

          {current.previewType === 'fitness' && (
            <div className="telemetry-screen">
              <div className="telemetry-screen-bar">
                <span className="telemetry-chip-tag">SESSION_LOG</span>
                <span className="telemetry-status">Push Day A · Completed</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">Set 1-4</span>
                <span className="log-action">Barbell Bench Press · 85kg</span>
                <span className="log-amt highlight">4 × 6 reps (RPE 8.5)</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">Set 1-3</span>
                <span className="log-action">Incline Dumbbell Press · 32kg</span>
                <span className="log-amt highlight">3 × 8 reps</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">Set 1-4</span>
                <span className="log-action">Overhead Triceps Extension</span>
                <span className="log-amt highlight">4 × 12 reps</span>
              </div>
              <div className="telemetry-footer-summary">
                <span>Session Load Tonnage</span>
                <span className="text-emerald-mono">4,820 kg · Overload Met (+2.5%)</span>
              </div>
            </div>
          )}

          {current.previewType === 'nutrition' && (
            <div className="telemetry-screen">
              <div className="telemetry-screen-bar">
                <span className="telemetry-chip-tag">METABOLIC_INTAKE</span>
                <span className="telemetry-status">2,450 kcal Target</span>
              </div>
              <div className="macro-bar-wrapper">
                <div className="macro-bar-fill" style={{ width: '74%' }} />
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">Meal 1</span>
                <span className="log-action">Oats + Whey Protein + Berries</span>
                <span className="log-amt highlight">580 kcal · 48g Protein</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">Meal 2</span>
                <span className="log-action">Grilled Chicken Breast + Rice</span>
                <span className="log-amt highlight">690 kcal · 62g Protein</span>
              </div>
              <div className="telemetry-log-item">
                <span className="log-time">Meal 3</span>
                <span className="log-action">Greek Yogurt + Almonds</span>
                <span className="log-amt highlight">550 kcal · 40g Protein</span>
              </div>
              <div className="telemetry-footer-summary">
                <span>Remaining Today</span>
                <span className="text-cyan-mono">630 kcal · 25g Protein to Goal</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
