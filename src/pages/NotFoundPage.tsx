import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFoundPage() {
  useDocumentTitle('404')

  return (
    <div className="not-found-canvas">
      {/* Top Brand */}
      <header className="not-found-nav">
        <Link to="/" className="nav-brand">
          <span className="brand-glyph">✦</span>
          <span>Brain</span>
        </Link>
      </header>

      {/* Centered Static Statement */}
      <main className="not-found-body">
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Oops</h1>
        <p className="not-found-sub">Page not found.</p>
      </main>
    </div>
  )
}
