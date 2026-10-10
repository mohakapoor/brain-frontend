export default function Hero() {
  return (
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

      {/* Floating Satellite Badges (Clean SVG Icons, Zero Emojis) */}
      <div className="satellites-orbit">
        <div className="satellite-chip pos-left">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>~1.2ms Edge Isolation</span>
        </div>

        <div className="satellite-chip pos-right">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-hero)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>Single-Device Shield</span>
        </div>

        <div className="satellite-chip pos-bottom">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
          <span>Cloudflare D1 SQLite</span>
        </div>
      </div>
    </section>
  )
}
