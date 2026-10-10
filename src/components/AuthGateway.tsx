import { useState } from 'react'

export default function AuthGateway() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  return (
    <section className="section-full section-spacing" id="auth-gateway">
      <div className="auth-stage-container">
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
      </div>
    </section>
  )
}
