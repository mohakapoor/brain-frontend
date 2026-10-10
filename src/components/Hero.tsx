import { useScrollProgress } from '../hooks/useScrollProgress'

interface HeroProps {
  children: React.ReactNode
}

export default function Hero({ children }: HeroProps) {
  const scrollProg = useScrollProgress()
  const tuckedFactor = 1 - scrollProg

  // Floating cards pop-out dynamics:
  // At scrollProg = 0 (top of page): cards are tucked inwards closer to center
  // As scrollProg approaches 1 (scrolling down): cards pop outwards into orbit around the fixed frame
  const card1Transform = `translate(${tuckedFactor * 70}px, ${tuckedFactor * 50}px) scale(${0.75 + 0.25 * scrollProg})`
  const card2Transform = `translate(${-tuckedFactor * 70}px, ${tuckedFactor * 50}px) scale(${0.75 + 0.25 * scrollProg})`
  const card3Transform = `translate(${-tuckedFactor * 55}px, ${-tuckedFactor * 45}px) scale(${0.75 + 0.25 * scrollProg})`
  const cardOpacity = 0.3 + 0.7 * scrollProg

  return (
    <section className="section-full hero-stage" id="top">
      <div className="pill-eyebrow">
        <span>●</span>
        <span>Personal Execution System</span>
      </div>

      <h1 className="hero-headline-massive">
        Capture Quickly.<br />
        Execute Relentlessly.
      </h1>

      <p className="hero-lead-text">
        An external prefrontal cortex engineered to eliminate working memory decay.
        Capture tasks in under 500ms via visual web or natural language AI.
      </p>

      {/* Hero Showcase with Linear.app pop-out levitating micro-cards */}
      <div className="hero-showcase-container">
        {/* Floating Card 1: Fast-Capture Shortcut Card */}
        <div
          className="floating-ui-wrapper top-left"
          style={{ transform: card1Transform, opacity: cardOpacity }}
        >
          <div className="floating-ui-card">
            <div className="floating-card-header">
              <span className="floating-card-title">Instant Capture</span>
              <span className="pulse-dot" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="kbd-badge" style={{ fontSize: '0.85rem', padding: '4px 10px' }}>Cmd + K</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Offload flow</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Zero categorized menus
            </div>
          </div>
        </div>

        {/* Floating Card 2: D1 Edge Query Telemetry Card */}
        <div
          className="floating-ui-wrapper top-right"
          style={{ transform: card2Transform, opacity: cardOpacity }}
        >
          <div className="floating-ui-card">
            <div className="floating-card-header">
              <span className="floating-card-title">Cloudflare D1 Query</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                0.0ms cold
              </span>
            </div>
            <div className="floating-code-snippet">
              SELECT * FROM tasks WHERE user_id = ?
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Sub-millisecond V8 edge isolate
            </div>
          </div>
        </div>

        {/* Floating Card 3: Session Guard Card */}
        <div
          className="floating-ui-wrapper bottom-right"
          style={{ transform: card3Transform, opacity: cardOpacity }}
        >
          <div className="floating-ui-card">
            <div className="floating-card-header">
              <span className="floating-card-title">Session Shield</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                HttpOnly
              </span>
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Single-Device Policy Active
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Revokes stale logins automatically
            </div>
          </div>
        </div>

        {/* The Solid Grounded Centerpiece Device Frame */}
        <div className="device-mockup-frame">
          <div className="device-chrome-bar">
            <div className="chrome-dots">
              <span className="chrome-dot" />
              <span className="chrome-dot" />
              <span className="chrome-dot" />
            </div>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              brain.mohakapoor.in · edge session
            </span>
            <div style={{ width: '40px' }} />
          </div>
          <div className="device-body">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
