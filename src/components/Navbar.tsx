import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface NavbarProps {
  activeNav: string
  theme: 'dark' | 'light'
  onNavClick: (sectionId: string, navKey: string) => void
  onSignInClick?: () => void
  onToggleTheme: () => void
}

export default function Navbar({ activeNav, theme, onNavClick, onToggleTheme }: NavbarProps) {
  const { user } = useAuth()

  return (
    <header className="nav-pill-wrapper">
      <Link
        to="/"
        className="nav-brand"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="brand-glyph">✦</span>
        <span>Brain</span>
      </Link>

      <nav className="nav-links">
        <button
          type="button"
          className={`nav-link-btn ${activeNav === 'interfaces' ? 'active' : ''}`}
          onClick={() => onNavClick('two-interfaces', 'interfaces')}
        >
          Two Interfaces
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeNav === 'loop' ? 'active' : ''}`}
          onClick={() => onNavClick('the-loop', 'loop')}
        >
          The Loop
        </button>
        <button
          type="button"
          className={`nav-link-btn ${activeNav === 'stream' ? 'active' : ''}`}
          onClick={() => onNavClick('live-stream', 'stream')}
        >
          Interactive Demo
        </button>
      </nav>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {user ? (
          <Link to="/home" className="btn-pill-primary">
            <span className="nav-btn-desktop">Open Dashboard →</span>
            <span className="nav-btn-mobile">Dashboard →</span>
          </Link>
        ) : (
          <Link to="/login" className="btn-pill-primary">
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}
