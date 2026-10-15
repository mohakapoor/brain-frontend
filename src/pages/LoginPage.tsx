import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function LoginPage() {
  const navigate = useNavigate()
  const { setUser, checkAuth } = useAuth()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login'
  const [authMode, setAuthMode] = useState<'login' | 'register'>(initialMode)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [inviteCode, setInviteCode] = useState('')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)

  const handleModeChange = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setSearchParams({ mode })
    setErrorMsg(null)
    setSuccessMsg(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setSuccessMsg(null)

    if (!username.trim() || !password.trim()) {
      setErrorMsg('Please enter both username and password.')
      return
    }

    if (authMode === 'register' && !inviteCode.trim()) {
      setErrorMsg('An invite code is required to register.')
      return
    }

    setIsLoading(true)

    try {
      const apiBase = import.meta.env.VITE_API_BASE_URL
      const path = authMode === 'register' ? '/api_brain/auth/register' : '/api_brain/auth/login'
      const endpoint = `${apiBase}${path}`
      const payload = authMode === 'register'
        ? { username: username.trim(), password, inviteCode: inviteCode.trim() }
        : { username: username.trim(), password }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        let msg = 'Authentication failed. Please check your details.'
        if (typeof data.error === 'string') {
          msg = data.error
        } else if (data.error?.issues?.[0]?.message) {
          msg = data.error.issues[0].message
        }
        setErrorMsg(msg)
        setIsLoading(false)
        return
      }

      if (data.user) {
        setUser(data.user)
      } else {
        await checkAuth()
      }

      navigate('/home', { replace: true })
    } catch {
      setErrorMsg('Unable to connect to the server. Please check your connection.')
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page-stage">
      {/* Top Bar Navigation */}
      <header className="login-top-nav">
        <Link to="/" className="login-back-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Home</span>
        </Link>
        <div className="nav-brand">
          <span className="brand-glyph">✦</span>
          <span>Brain</span>
        </div>
      </header>

      {/* Main Centered Auth Card */}
      <main className="login-card-wrapper">
        <div className="login-card">
          <div className="login-card-header">
            <h1 className="login-title">
              {authMode === 'login' ? 'Sign In' : 'Register'}
            </h1>
            <p className="login-subtitle">
              {authMode === 'login'
                ? 'Welcome back. Enter your details to continue.'
                : 'Enter your invite code to get started.'}
            </p>
          </div>

          <div className="auth-tabs">
            <button
              type="button"
              className={`auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
              onClick={() => handleModeChange('login')}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`auth-tab-btn ${authMode === 'register' ? 'active' : ''}`}
              onClick={() => handleModeChange('register')}
            >
              Register (Invite Only)
            </button>
          </div>

          {errorMsg && (
            <div className="auth-alert error">
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="auth-alert success">
              <span>{successMsg}</span>
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-field-group">
              <label className="input-label" htmlFor="auth-username">Username</label>
              <input
                id="auth-username"
                type="text"
                className="text-input"
                placeholder="e.g. Jane Doe"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                disabled={isLoading}
              />
            </div>

            <div className="input-field-group">
              <label className="input-label" htmlFor="auth-password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  className="text-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete={authMode === 'login' ? 'current-password' : 'new-password'}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(prev => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {authMode === 'register' && (
              <div className="input-field-group">
                <label className="input-label" htmlFor="auth-invite">Invite Code</label>
                <input
                  id="auth-invite"
                  type="text"
                  className="text-input"
                  placeholder="Enter private invite code"
                  value={inviteCode}
                  onChange={e => setInviteCode(e.target.value)}
                  disabled={isLoading}
                />
              </div>
            )}

            <button type="submit" className="btn-submit-auth" disabled={isLoading}>
              {isLoading
                ? (authMode === 'login' ? 'Signing in...' : 'Creating account...')
                : (authMode === 'login' ? 'Sign In' : 'Register')}
            </button>
          </form>

          <footer className="login-card-footer">
            <span>Single-device login</span>
            <span>•</span>
            <span>Encrypted session</span>
          </footer>
        </div>
      </main>
    </div>
  )
}
