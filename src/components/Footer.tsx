import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-compact-wrap">
          {/* Left: Brand & Statement */}
          <div className="footer-compact-brand">
            <span className="footer-brand-title">Brain</span>
            <span className="footer-dot-sep">·</span>
            <span className="footer-brand-tagline">Personal second brain &amp; execution engine</span>
          </div>

          {/* Right: Essential Links */}
          <nav className="footer-compact-links" aria-label="Footer Navigation">
            <Link to="/home">Dashboard</Link>
            <Link to="/login?mode=login">Sign In</Link>
            <a
              href="https://github.com/mohakapoor/brain-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>

        {/* Bottom micro-bar */}
        <div className="footer-bottom-bar">
          <span>&copy; {currentYear} Mohak Kapoor. All rights reserved.</span>
          <span className="footer-domain">brain.mohakapoor.in</span>
        </div>
      </div>
    </footer>
  )
}
