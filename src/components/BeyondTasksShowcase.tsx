import { useState, useEffect, useRef } from 'react'

type StageId = 'tasks' | 'finance' | 'fitness' | 'library'

interface Stage {
  id: StageId
  eyebrow: string
  conceptTag: string
  title: string
  description: string
  accentColor: string
  proofs: string[]
}

const STAGES: Stage[] = [
  {
    id: 'tasks',
    eyebrow: 'STAGE 01 · TASKS & GOALS',
    conceptTag: 'Active Execution Core',
    title: 'Turn intentions into action.',
    description: 'Capture what needs to get done, organize your backlog, and keep your attention strictly on what matters today without cognitive fatigue.',
    accentColor: 'var(--accent-hero)',
    proofs: ['Frictionless NLP capture inbox', 'Isolated today-focus workbench', 'Zero backlog noise during execution'],
  },
  {
    id: 'finance',
    eyebrow: 'STAGE 02 · FINANCES',
    conceptTag: 'Concept Preview',
    title: 'Know where your money goes.',
    description: 'Bring spending, budgets, and financial progress into the same system you use to plan the rest of your life without spreadsheet friction.',
    accentColor: 'var(--accent-hero)',
    proofs: ['Sub-second expense ingest', 'Runway elasticity telemetry', 'Stealth recurring burn audit'],
  },
  {
    id: 'fitness',
    eyebrow: 'STAGE 03 · FITNESS & TRAINING',
    conceptTag: 'Concept Preview',
    title: 'Make progress visible.',
    description: 'Track training volume, build progressive consistency, and understand how physical effort compounds over time without breaking gym flow.',
    accentColor: 'var(--accent-emerald)',
    proofs: ['Volume tonnage calculation', 'Automated overload curve', 'Rest interval countdown sync'],
  },
  {
    id: 'library',
    eyebrow: 'STAGE 04 · PERSONAL LIBRARY',
    conceptTag: 'Concept Preview',
    title: 'Keep what matters close.',
    description: 'Create a personal space for the mental models, research papers, references, and collections you want to return to during deep work.',
    accentColor: 'var(--accent-cyan)',
    proofs: ['Sub-second vector retrieval', 'Structured mental models', 'Zero bookmark clutter'],
  },
]

const TASK_ITEMS = [
  { title: 'Deploy D1 edge database migration', tag: 'PROD', status: 'done' },
  { title: 'Ship biometric session auth interceptor', tag: 'SECURITY', status: 'done' },
  { title: 'Review autonomous execution loop latency', tag: 'NOW', status: 'active' },
  { title: 'Synchronize multi-device offline store', tag: 'QUEUE', status: 'idle' },
]

const LIBRARY_ITEMS = [
  { cat: 'DISTRIBUTED SYSTEMS', title: 'Raft Consensus & Log Compaction Mechanics', meta: '12 citations · 4 mental models' },
  { cat: 'NEUROSCIENCE', title: 'Prefrontal Cortex Dopamine & Focus Depletion', meta: '8 citations · 2 protocols' },
  { cat: 'VENTURE ARCHITECTURE', title: 'Runway Elasticity & Zero-Spreadsheet Accounting', meta: '6 citations · 1 template' },
]

export default function BeyondTasksShowcase() {
  const [activeStage, setActiveStage] = useState<StageId>('tasks')
  const stageRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-stage-id') as StageId
            if (id) setActiveStage(id)
          }
        })
      },
      { threshold: 0.55, rootMargin: '-10% 0px -20% 0px' }
    )

    Object.values(stageRefs.current).forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="beyond-showcase-section" id="beyond-tasks">
      {/* 1. Section Introduction */}
      <div className="beyond-intro-masthead">
        <div className="telemetry-band-tag">BEYOND THE TO-DO LIST</div>
        <h2 className="beyond-intro-title">One system. More of your life.</h2>
        <p className="beyond-intro-desc">
          Your tasks are just the beginning. Build a system that helps you manage your goals, understand your habits, and keep track of the things that matter.
        </p>
      </div>

      {/* 2 & 3. Main Split-Layout: Scrolling Narrative (Left) + Sticky Visual Canvas (Right) */}
      <div className="beyond-main-grid">
        {/* Left Column: Vertically scrolling sequence of feature narratives */}
        <div className="beyond-narrative-column">
          {STAGES.map(stage => {
            const isActive = activeStage === stage.id
            return (
              <div
                key={stage.id}
                data-stage-id={stage.id}
                ref={el => { stageRefs.current[stage.id] = el }}
                className={`beyond-narrative-stage ${isActive ? 'stage-focused' : 'stage-idle'}`}
              >
                <div className="stage-eyebrow-row">
                  <span className="stage-eyebrow-text" style={{ color: stage.accentColor }}>{stage.eyebrow}</span>
                  <span className="stage-concept-tag">{stage.conceptTag}</span>
                </div>
                <h3 className="stage-narrative-title">{stage.title}</h3>
                <p className="stage-narrative-desc">{stage.description}</p>
                <div className="stage-proof-list">
                  {stage.proofs.map((proof, i) => (
                    <div key={i} className="stage-proof-item">
                      <span className="stage-proof-glyph" style={{ color: stage.accentColor }}>→</span>
                      <span>{proof}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Column: Sticky Visual Stage with Feature-Specific Compositions */}
        <div className="beyond-sticky-stage-col">
          <div className="beyond-visual-canvas">
            {/* Stage 01 Visual: Tasks & Goals */}
            <div className={`stage-canvas-panel ${activeStage === 'tasks' ? 'active' : 'dormant'}`}>
              <div className="panel-status-strip">
                <span className="panel-status-pill">TODAY'S EXECUTION STREAM</span>
                <span className="panel-meta-tag">4 OF 6 COMPLETED (67%)</span>
              </div>
              <div className="canvas-tasks-stack">
                {TASK_ITEMS.map((item, i) => (
                  <div key={i} className={`task-flow-item ${item.status === 'done' ? 'task-done' : item.status === 'active' ? 'task-active' : ''}`}>
                    <span className={`task-check-circle ${item.status === 'done' ? 'done' : item.status === 'active' ? 'active' : ''}`}>
                      {item.status === 'done' ? '✓' : ''}
                    </span>
                    <span className={`task-flow-title ${item.status === 'done' ? 'done' : ''}`}>{item.title}</span>
                    <span className={`task-flow-tag ${item.status === 'active' ? 'priority' : ''}`}>{item.tag}</span>
                  </div>
                ))}
              </div>
              <div className="panel-footer-ticker">
                <span className="ticker-dot" style={{ background: 'var(--accent-hero)' }} />
                <span>Backlog: 14 dormant items · Velocity: 8.4 tasks/day</span>
              </div>
            </div>

            {/* Stage 02 Visual: Finances */}
            <div className={`stage-canvas-panel ${activeStage === 'finance' ? 'active' : 'dormant'}`}>
              <div className="panel-status-strip">
                <span className="panel-status-pill">CAPITAL & BURN TELEMETRY</span>
                <span className="panel-meta-tag">14.2 MO RUNWAY STABILITY</span>
              </div>
              <div className="finance-hero-metric">
                <span className="metric-val" style={{ color: 'var(--accent-hero)' }}>₹42,850</span>
                <span className="metric-unit">/mo burn rate</span>
              </div>
              <div className="canvas-waveform-wrap">
                <svg className="canvas-waveform-svg" viewBox="0 0 720 200" preserveAspectRatio="none">
                  {[50, 100, 150].map(y => (
                    <line key={y} x1="0" y1={y} x2="720" y2={y} stroke="var(--border-subtle)" strokeWidth={y === 100 ? 1 : 0.5} strokeDasharray={y === 100 ? '3 3' : '4 6'} />
                  ))}
                  <path d="M 0 100 Q 90 20, 180 100 T 360 100 T 540 100 T 720 100" fill="none" stroke="var(--accent-hero)" strokeWidth="3" />
                  {[180, 360, 540].map(cx => (
                    <circle key={cx} cx={cx} cy="100" r="4.5" fill="var(--accent-hero)" className="node-pulse" />
                  ))}
                </svg>
              </div>
              <div className="panel-footer-ticker">
                <span className="ticker-dot" style={{ background: 'var(--accent-hero)' }} />
                <span>$ ingest "320 cold brew" → parsed in 0.38s → burn reconciled</span>
              </div>
            </div>

            {/* Stage 03 Visual: Fitness & Training */}
            <div className={`stage-canvas-panel ${activeStage === 'fitness' ? 'active' : 'dormant'}`}>
              <div className="panel-status-strip">
                <span className="panel-status-pill">KINETIC OVERLOAD PROGRESSION</span>
                <span className="panel-meta-tag">+5.2% OVERLOAD TRAJECTORY</span>
              </div>
              <div className="finance-hero-metric">
                <span className="metric-val" style={{ color: 'var(--accent-emerald)' }}>18,450 kg</span>
                <span className="metric-unit">total volume tonnage</span>
              </div>
              <div className="canvas-waveform-wrap">
                <svg className="canvas-waveform-svg" viewBox="0 0 720 200" preserveAspectRatio="none">
                  {[50, 100, 150].map(y => (
                    <line key={y} x1="0" y1={y} x2="720" y2={y} stroke="var(--border-subtle)" strokeWidth={y === 100 ? 1 : 0.5} strokeDasharray={y === 100 ? '3 3' : '4 6'} />
                  ))}
                  <path d="M 0 100 Q 90 170, 180 60 T 360 140 T 540 80 T 720 100" fill="none" stroke="var(--accent-emerald)" strokeWidth="3" />
                  {[180, 360, 540].map((cx, i) => (
                    <circle key={cx} cx={cx} cy={[60, 140, 80][i]} r="4.5" fill="var(--accent-emerald)" className="node-pulse" />
                  ))}
                </svg>
              </div>
              <div className="panel-footer-ticker">
                <span className="ticker-dot" style={{ background: 'var(--accent-emerald)' }} />
                <span>$ log_set("Deadlift", 140kg, 5 reps) → 90s countdown synced</span>
              </div>
            </div>

            {/* Stage 04 Visual: Personal Library */}
            <div className={`stage-canvas-panel ${activeStage === 'library' ? 'active' : 'dormant'}`}>
              <div className="panel-status-strip">
                <span className="panel-status-pill">KNOWLEDGE ARTIFACT COLLECTION</span>
                <span className="panel-meta-tag">248 INDEXED REFERENCES</span>
              </div>
              <div className="library-nodes-grid">
                {LIBRARY_ITEMS.map((item, i) => (
                  <div key={i} className="library-node-card">
                    <span className="node-category">{item.cat}</span>
                    <div className="node-title">{item.title}</div>
                    <span className="node-meta">{item.meta}</span>
                  </div>
                ))}
              </div>
              <div className="panel-footer-ticker">
                <span className="ticker-dot" style={{ background: 'var(--accent-cyan)' }} />
                <span>$ query_library("consensus") → 3 citations surfaced in 0.12s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Closing Statement */}
      <div className="beyond-closing-statement">
        <span className="closing-eyebrow">THE UNIFIED HORIZON</span>
        <h3 className="closing-title">One system. Endless agency.</h3>
        <p className="closing-desc">
          From immediate task execution to long-term capital, training volume, and knowledge — all anchored in a single, uncompromised operating system for your life.
        </p>
      </div>
    </section>
  )
}
