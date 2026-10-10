import { useState, useRef } from 'react'

interface DemoTask {
  id: number
  title: string
  completed: boolean
  tag: string
}

export default function App() {
  const [activeNav, setActiveNav] = useState<'loop' | 'interfaces' | 'stream' | 'architecture'>('loop')
  const [activeInterface, setActiveInterface] = useState<'web' | 'mcp'>('web')
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [quickInput, setQuickInput] = useState('')
  const spotlightContainerRef = useRef<HTMLDivElement>(null)

  // Interactive Live Demo Task List
  const [tasks, setTasks] = useState<DemoTask[]>([
    { id: 1, title: 'Implement Cloudflare D1 atomic migrations', completed: true, tag: 'INFRA' },
    { id: 2, title: 'Configure single-device HttpOnly session guard', completed: true, tag: 'SECURITY' },
    { id: 3, title: 'Probability revision & problem sets', completed: false, tag: 'STUDY' },
    { id: 4, title: 'Design high-velocity task execution dashboard', completed: false, tag: 'FRONTEND' },
    { id: 5, title: 'Centralize Zod 4 request validation pipeline', completed: false, tag: 'CORE' },
  ])

  // Outcrowd Spotlight Cursor Tracking on Bento Cards
  const handleSpotlightMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlightContainerRef.current) return
    const cards = spotlightContainerRef.current.getElementsByClassName('spotlight-card')
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  const handleToggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!quickInput.trim()) return
    const newTask: DemoTask = {
      id: Date.now(),
      title: quickInput.trim(),
      completed: false,
      tag: 'NEW',
    }
    setTasks(prev => [newTask, ...prev])
    setQuickInput('')
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const completedCount = tasks.filter(t => t.completed).length
  const velocityPercentage = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 100

  return (
    <div className="landing-shell">
      {/* 1. Floating Nav Pill (Dynamic Island) */}
      <header className="nav-pill-wrapper">
        <a href="#top" className="nav-brand">
          <span className="brand-glyph">✦</span>
          <span>Brain</span>
        </a>

        <nav className="nav-links">
          <button
            type="button"
            className={`nav-link-btn ${activeNav === 'loop' ? 'active' : ''}`}
            onClick={() => { setActiveNav('loop'); scrollToSection('the-loop'); }}
          >
            The Loop
          </button>
          <button
            type="button"
            className={`nav-link-btn ${activeNav === 'interfaces' ? 'active' : ''}`}
            onClick={() => { setActiveNav('interfaces'); scrollToSection('two-interfaces'); }}
          >
            Two Interfaces
          </button>
          <button
            type="button"
            className={`nav-link-btn ${activeNav === 'stream' ? 'active' : ''}`}
            onClick={() => { setActiveNav('stream'); scrollToSection('live-stream'); }}
          >
            Live Stream
          </button>
        </nav>

        <div className="nav-actions">
          <div className="status-badge">
            <span className="pulse-dot" />
            <span>Edge Online</span>
          </div>
          <button type="button" className="btn-pill-primary" onClick={() => scrollToSection('auth-gateway')}>
            Sign In
          </button>
        </div>
      </header>

      {/* 2. Hero Section with Outcrowd Parallax Satellites */}
      <section className="hero-wrapper" id="top">
        <div className="pill-eyebrow">
          <span>●</span>
          <span>Personal Execution System</span>
        </div>
        <h1 className="hero-title">
          Capture Quickly.<br />
          Execute Relentlessly.
        </h1>
        <p className="hero-subtitle">
          An external prefrontal cortex engineered to eliminate working memory decay.
          Capture tasks in under 500ms via visual web or natural language AI.
        </p>

        {/* Floating Satellite Badges */}
        <div className="satellites-orbit">
          <div className="satellite-chip pos-left">
            <span style={{ color: 'var(--accent-emerald)' }}>⚡</span>
            <span>~1.2ms Edge Isolation</span>
          </div>
          <div className="satellite-chip pos-right">
            <span style={{ color: 'var(--accent-hero)' }}>🛡️</span>
            <span>Single-Device Shield</span>
          </div>
          <div className="satellite-chip pos-bottom">
            <span style={{ color: 'var(--accent-cyan)' }}>✦</span>
            <span>Cloudflare D1 SQLite</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Showcase: Two Interfaces Duality Card */}
      <section className="dual-interface-card" id="two-interfaces">
        <div className="dual-tabs-header">
          <div>
            <span className="pill-eyebrow" style={{ marginBottom: '8px' }}>
              <span>✦</span> Duality of Experience
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '6px' }}>
              Two Interfaces. One Source of Truth.
            </h2>
          </div>

          <div className="interface-toggle-pills">
            <button
              type="button"
              className={`interface-tab-btn ${activeInterface === 'web' ? 'active' : ''}`}
              onClick={() => setActiveInterface('web')}
            >
              <span>🖥️</span>
              <span>Web Dashboard</span>
            </button>
            <button
              type="button"
              className={`interface-tab-btn ${activeInterface === 'mcp' ? 'active' : ''}`}
              onClick={() => setActiveInterface('mcp')}
            >
              <span>💬</span>
              <span>Conversational AI (MCP)</span>
            </button>
          </div>
        </div>

        <div className="dual-screen-content">
          {activeInterface === 'web' ? (
            /* Web Interface Showcase (FinPoint Bento Style) */
            <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '20px' }}>
              {/* Focal Vermilion Velocity Card */}
              <div style={{
                background: 'linear-gradient(145deg, #ff4624 0%, #e03211 100%)',
                borderRadius: 'var(--radius-card)',
                padding: '28px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                boxShadow: '0 20px 40px var(--accent-hero-glow)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>Execution Velocity</div>
                    <div style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em' }}>{velocityPercentage}%</div>
                  </div>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.22)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}>
                    ↑ +18.4% this week
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <svg style={{ width: '100%', height: '70px' }} viewBox="0 0 500 80" fill="none">
                    <path
                      d="M0 55 Q 50 40, 90 48 T 180 30 T 260 42 T 340 18 T 420 25 T 500 12 L 500 80 L 0 80 Z"
                      fill="rgba(255, 255, 255, 0.25)"
                    />
                    <path
                      d="M0 55 Q 50 40, 90 48 T 180 30 T 260 42 T 340 18 T 420 25 T 500 12"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="500" cy="12" r="5" fill="#ffffff" />
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 600, opacity: 0.85, marginTop: '8px' }}>
                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                  </div>
                </div>
              </div>

              {/* Telemetry Chips Quadrant */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-item)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>⚡ Edge Latency</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>~1.2ms</span>
                </div>
                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-item)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>🛡️ Session Policy</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>1 Device</span>
                </div>
                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-item)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>📋 Active Stream</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{tasks.length} items</span>
                </div>
                <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-item)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>🔒 Auth Model</span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>HttpOnly</span>
                </div>
              </div>
            </div>
          ) : (
            /* MCP Conversational AI Interface Showcase */
            <div className="mcp-terminal-screen">
              <div className="terminal-header">
                <span className="term-dot red" />
                <span className="term-dot yellow" />
                <span className="term-dot green" />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
                  remote-mcp-worker · protocol v2024-11-05
                </span>
              </div>

              <div className="term-dialogue-row user-prompt">
                <span className="term-label">Natural Language Input (ChatGPT / Claude)</span>
                <span className="term-text">"Add probability revision to tomorrow's tasks."</span>
              </div>

              <div className="term-dialogue-row ai-response">
                <span className="term-label" style={{ color: 'var(--accent-emerald)' }}>MCP Tool Invocation Dispatched</span>
                <span className="term-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
                  → Dispatched tool: <code>create_task</code><br />
                  → Arguments: <code>{`{ "title": "Probability revision & problem sets", "tag": "STUDY" }`}</code><br />
                  → Result: <code>201 Created (persisted to Cloudflare D1 · User ID 1)</code>
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '8px' }}>
                <span style={{ color: 'var(--accent-emerald)' }}>●</span>
                <span>Both interfaces share identical state. Zero duplicated databases or conflicting business rules.</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. The 5-Step Execution Loop (Outcrowd Stages) */}
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
          <div className="loop-card">
            <div>
              <span className="loop-step-badge">STEP 01</span>
              <h3 className="loop-card-title">Capture</h3>
              <p className="loop-card-desc">
                Minimal friction while working. Sub-500ms capture without losing your train of thought.
              </p>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>✓ Zero distraction</span>
          </div>

          <div className="loop-card">
            <div>
              <span className="loop-step-badge">STEP 02</span>
              <h3 className="loop-card-title">Review</h3>
              <p className="loop-card-desc">
                Morning backlog triage. Select what matters for today, move it to the active queue, and discard the noise.
              </p>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>✓ Backlog curation</span>
          </div>

          <div className="loop-card">
            <div>
              <span className="loop-step-badge">STEP 03</span>
              <h3 className="loop-card-title">Execute</h3>
              <p className="loop-card-desc">
                Single-task lockdown. Unfinished tasks stay strictly above completed ones to eliminate ambiguity.
              </p>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-hero)', fontWeight: 600 }}>✓ Deep focus</span>
          </div>

          <div className="loop-card">
            <div>
              <span className="loop-step-badge">STEP 04</span>
              <h3 className="loop-card-title">Track</h3>
              <p className="loop-card-desc">
                Concrete persistence. Sub-millisecond Cloudflare D1 record writes that make daily momentum visible.
              </p>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'var(--accent-yellow)', fontWeight: 600 }}>✓ Visible momentum</span>
          </div>

          <div className="loop-card">
            <div>
              <span className="loop-step-badge">STEP 05</span>
              <h3 className="loop-card-title">Improve</h3>
              <p className="loop-card-desc">
                Tight feedback loops. Closing the gap between "I should do this" and "I am doing this."
              </p>
            </div>
            <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 600 }}>✓ Repeat daily</span>
          </div>
        </div>
      </section>

      {/* 5. Spotlight Cursor Bento Features (Outcrowd #cards Spotlight) */}
      <section
        ref={spotlightContainerRef}
        onMouseMove={handleSpotlightMouseMove}
        className="spotlight-container"
      >
        <div className="spotlight-card span-6">
          <div className="spotlight-icon">⚡</div>
          <h3 className="spotlight-title">Two Interfaces, One Source of Truth</h3>
          <p className="spotlight-desc">
            Use the web dashboard for visual triage and progress tracking, or manage tasks from ChatGPT/Claude
            via MCP. Both operate on the same authoritative Hono API and D1 database.
          </p>
        </div>

        <div className="spotlight-card span-6">
          <div className="spotlight-icon">🎯</div>
          <h3 className="spotlight-title">Execution Over Planning</h3>
          <p className="spotlight-desc">
            No bloated nested boards or complex project setups that create more planning work than actual work.
            Built to get you doing the work faster.
          </p>
        </div>

        <div className="spotlight-card span-6">
          <div className="spotlight-icon">🛡️</div>
          <h3 className="spotlight-title">Single-Device Fortress</h3>
          <p className="spotlight-desc">
            Strict single-active-session policy. Logging in from a new device revokes previous sessions
            instantly, backed by tamper-proof encrypted HttpOnly cookies.
          </p>
        </div>

        <div className="spotlight-card span-6">
          <div className="spotlight-icon">🌐</div>
          <h3 className="spotlight-title">Sub-Millisecond Cloudflare Edge</h3>
          <p className="spotlight-desc">
            Deployed on Cloudflare Workers and SQLite D1 at the edge. 0.0ms cold starts across 300+ edge nodes
            globally with automated typechecked migrations.
          </p>
        </div>
      </section>

      {/* 6. Live Interactive Stream */}
      <section className="stream-container" id="live-stream">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span className="pill-eyebrow" style={{ marginBottom: '8px' }}>
              <span>●</span> Interactive Prototype
            </span>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '4px' }}>
              Live Execution Stream
            </h2>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Click tasks to toggle complete & recalculate velocity
          </span>
        </div>

        <form onSubmit={handleAddTask} className="capture-input-box">
          <input
            type="text"
            className="capture-input"
            placeholder="What do you need to execute right now?"
            value={quickInput}
            onChange={e => setQuickInput(e.target.value)}
          />
          <span className="kbd-badge">↵ Enter</span>
          <button type="submit" className="btn-pill-orange">
            Capture
          </button>
        </form>

        <div className="task-stream-list">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`task-item-row ${task.completed ? 'completed' : ''}`}
              onClick={() => handleToggleTask(task.id)}
            >
              <div className="task-left">
                <div className="custom-checkbox">
                  <span className="checkmark-icon">✓</span>
                </div>
                <span className="task-text">{task.title}</span>
              </div>
              <span className="task-meta-tag">{task.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Auth Gateway Section */}
      <section className="auth-section" id="auth-gateway">
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
            onClick={() => setAuthMode('login')}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${authMode === 'register' ? 'active' : ''}`}
            onClick={() => setAuthMode('register')}
          >
            Register (Invite Only)
          </button>
        </div>

        <form className="auth-form" onSubmit={e => e.preventDefault()}>
          <div className="input-field-group">
            <label className="input-label">Username</label>
            <input
              type="text"
              className="text-input"
              placeholder="e.g. mohak"
              autoComplete="username"
            />
          </div>

          <div className="input-field-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              className="text-input"
              placeholder="••••••••••••"
              autoComplete="current-password"
            />
          </div>

          {authMode === 'register' && (
            <div className="input-field-group">
              <label className="input-label">Invite Code</label>
              <input
                type="text"
                className="text-input"
                placeholder="Enter private invite code"
              />
            </div>
          )}

          <button type="submit" className="btn-submit-auth">
            {authMode === 'login' ? 'Access Second Brain' : 'Create Account'}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div>✦ Personal Second Brain & Execution System</div>
        <div>Live at <code>brain.mohakapoor.in</code></div>
        <div>Phase 1 Core Foundation · MCP Ready</div>
      </footer>
    </div>
  )
}
