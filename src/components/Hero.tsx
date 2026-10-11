import { useScrollProgress } from '../hooks/useScrollProgress'

interface HeroProps {
  children: React.ReactNode
}

export default function Hero({ children }: HeroProps) {
  const scrollProg = useScrollProgress()
  const tuckedFactor = 1 - scrollProg

  // Floating cards pop-out dynamics:
  // At scrollProg = 0 (top of page): cards are tucked inwards closer to center
  // As scrollProg approaches 1 (scrolling down): cards pop outwards completely outside the fixed frame
  const card1Transform = `translate(${tuckedFactor * 85}px, ${tuckedFactor * 60}px) scale(${0.72 + 0.28 * scrollProg})`
  const card2Transform = `translate(${-tuckedFactor * 85}px, ${tuckedFactor * 60}px) scale(${0.72 + 0.28 * scrollProg})`
  const card3Transform = `translate(${-tuckedFactor * 70}px, ${-tuckedFactor * 55}px) scale(${0.72 + 0.28 * scrollProg})`
  const cardOpacity = 0.25 + 0.75 * scrollProg

  return (
    <section className="section-full hero-stage" id="top">
      <h1 className="hero-headline-massive">
        Capture Quickly.<br />
        Execute Relentlessly.
      </h1>

      <p className="hero-lead-text">
        A fast, distraction-free system to clear your mind and get things done.
        Capture thoughts instantly from your browser or through AI.
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
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="kbd-badge" style={{ fontSize: '0.85rem', padding: '4px 10px' }}>Cmd + K</span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Quick add</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Zero friction
            </div>
          </div>
        </div>

        {/* Floating Card 2: Real-time Sync Card */}
        <div
          className="floating-ui-wrapper top-right"
          style={{ transform: card2Transform, opacity: cardOpacity }}
        >
          <div className="floating-ui-card">
            <div className="floating-card-header">
              <span className="floating-card-title">Instant Sync</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                Real-time
              </span>
            </div>
            <div className="floating-code-snippet">
              Synced across web &amp; AI
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              No spinners, no lag
            </div>
          </div>
        </div>

        {/* Floating Card 3: Active Focus Card */}
        <div
          className="floating-ui-wrapper bottom-right"
          style={{ transform: card3Transform, opacity: cardOpacity }}
        >
          <div className="floating-ui-card">
            <div className="floating-card-header">
              <span className="floating-card-title">Active Focus</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                Live
              </span>
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              1 Current Priority
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Finish one thing before starting another
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
              https://brain.mohakapoor.in
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
