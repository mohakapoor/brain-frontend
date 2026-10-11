import { Link } from 'react-router-dom'

export default function LandingCTA() {
  return (
    <section className="section-full section-spacing" id="get-started">
      <div className="landing-cta-container reveal-on-scroll">
        <h2 className="landing-cta-headline">
          Clear your mind.<br />
          Start executing.
        </h2>

        <div className="landing-cta-actions">
          <Link to="/login?mode=register" className="btn-pill-primary cta-btn-large">
            Register
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link to="/login?mode=login" className="landing-cta-secondary-link">
            Already have an account? Sign In &rarr;
          </Link>
        </div>

      </div>
    </section>
  )
}
