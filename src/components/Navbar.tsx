interface NavbarProps {
  activeNav: string
  onNavClick: (sectionId: string, navKey: string) => void
  onSignInClick: () => void
}

export default function Navbar({ activeNav, onNavClick, onSignInClick }: NavbarProps) {
  return (
    <header className="nav-pill-wrapper">
      <a href="#top" className="nav-brand">
        <span className="brand-glyph">✦</span>
        <span>Brain</span>
      </a>

      <nav className="nav-links">
        <button
          type="button"
          className={`nav-link-btn ${activeNav === 'loop' ? 'active' : ''}`}
          onClick={() => onNavClick('the-loop', 'loop')}
        >
          The Loop
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeNav === 'interfaces' ? 'active' : ''}`}
          onClick={() => onNavClick('two-interfaces', 'interfaces')}
        >
          Two Interfaces
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeNav === 'stream' ? 'active' : ''}`}
          onClick={() => onNavClick('live-stream', 'stream')}
        >
          Live Stream
        </button>
      </nav>

      <div className="nav-actions">
        <button type="button" className="btn-pill-primary" onClick={onSignInClick}>
          Sign In
        </button>
      </div>
    </header>
  )
}
