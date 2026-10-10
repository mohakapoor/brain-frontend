import { useRef } from 'react'

export default function SpotlightFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const cards = containerRef.current.getElementsByClassName('spotlight-card')
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="spotlight-container"
    >
      <div className="spotlight-card span-6">
        <div className="spotlight-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-hero)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <h3 className="spotlight-title">Two Interfaces, One Source of Truth</h3>
        <p className="spotlight-desc">
          Use the web dashboard for visual triage and progress tracking, or manage tasks from ChatGPT/Claude
          via MCP. Both operate on the same authoritative Hono API and D1 database.
        </p>
      </div>

      <div className="spotlight-card span-6">
        <div className="spotlight-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <h3 className="spotlight-title">Execution Over Planning</h3>
        <p className="spotlight-desc">
          No bloated nested boards or complex project setups that create more planning work than actual work.
          Built to get you doing the work faster.
        </p>
      </div>

      <div className="spotlight-card span-6">
        <div className="spotlight-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h3 className="spotlight-title">Single-Device Fortress</h3>
        <p className="spotlight-desc">
          Strict single-active-session policy. Logging in from a new device revokes previous sessions
          instantly, backed by tamper-proof encrypted HttpOnly cookies.
        </p>
      </div>

      <div className="spotlight-card span-6">
        <div className="spotlight-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
        <h3 className="spotlight-title">Sub-Millisecond Cloudflare Edge</h3>
        <p className="spotlight-desc">
          Deployed on Cloudflare Workers and SQLite D1 at the edge. 0.0ms cold starts across 300+ edge nodes
          globally with automated typechecked migrations.
        </p>
      </div>
    </section>
  )
}
