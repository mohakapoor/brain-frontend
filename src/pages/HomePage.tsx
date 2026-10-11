import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<'summary' | 'tasks' | 'finance' | 'fitness' | 'library'>('summary')

  return (
    <div className="app-shell">
      {/* 1. Left Navigation Rail */}
      <aside className="app-sidebar">
        <div className="sidebar-brand">
          <Link to="/" className="sidebar-brand-link">
            <span className="brand-glyph">✦</span>
            <span className="brand-title">Brain</span>
          </Link>
          <span className="sidebar-env-badge">v1.0</span>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Pillars</div>

          <button
            type="button"
            className={`sidebar-nav-item ${activeSection === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveSection('summary')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Executive Summary</span>
          </button>

          <button
            type="button"
            className={`sidebar-nav-item ${activeSection === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveSection('tasks')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span>Tasks &amp; Goals</span>
          </button>

          <button
            type="button"
            className={`sidebar-nav-item ${activeSection === 'finance' ? 'active' : ''}`}
            onClick={() => setActiveSection('finance')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span>Finances</span>
          </button>

          <button
            type="button"
            className={`sidebar-nav-item ${activeSection === 'fitness' ? 'active' : ''}`}
            onClick={() => setActiveSection('fitness')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <span>Fitness &amp; Health</span>
          </button>

          <button
            type="button"
            className={`sidebar-nav-item ${activeSection === 'library' ? 'active' : ''}`}
            onClick={() => setActiveSection('library')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Personal Library</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-badge">
            <div className="user-avatar-glyph">U</div>
            <div className="user-profile-meta">
              <span className="user-name">Second Brain User</span>
              <span className="user-status-text">Active Workspace</span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Executive Content Area */}
      <main className="app-main-canvas">
        {/* Top bar */}
        <header className="app-top-header">
          <div>
            <span className="header-eyebrow">SYSTEM STATUS · ALL CHANNELS ACTIVE</span>
            <h1 className="header-page-title">Executive Summary</h1>
          </div>
          <div className="header-actions">
            <span className="kbd-badge">Cmd + K</span>
            <button type="button" className="btn-pill-orange" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
              Quick Capture
            </button>
          </div>
        </header>

        {/* 4 Pillars Executive Grid */}
        <div className="executive-summary-grid">
          {/* Pillar 1: Tasks */}
          <div className="executive-card">
            <div className="executive-card-header">
              <span className="executive-card-tag">01 · EXECUTION</span>
              <span className="executive-metric-pill">4 Pending</span>
            </div>
            <h2 className="executive-card-title">Tasks &amp; Goals</h2>
            <div className="executive-preview-body">
              <div className="executive-task-item">
                <span className="check-box-preview" />
                <span>Review quarterly revenue and runway</span>
              </div>
              <div className="executive-task-item">
                <span className="check-box-preview" />
                <span>Deep work: write chapter 3 draft</span>
              </div>
            </div>
            <div className="executive-card-footer">
              <span>Velocity: 60% completion rate</span>
            </div>
          </div>

          {/* Pillar 2: Finances */}
          <div className="executive-card">
            <div className="executive-card-header">
              <span className="executive-card-tag">02 · CAPITAL</span>
              <span className="executive-metric-pill">14.2 Mo Runway</span>
            </div>
            <h2 className="executive-card-title">Finances</h2>
            <div className="executive-preview-body">
              <div className="executive-stat-hero">₹42,850/mo</div>
              <div className="executive-stat-sub">Monthly Burn · On Budget</div>
            </div>
            <div className="executive-card-footer">
              <span>Tracking 3 active spending categories</span>
            </div>
          </div>

          {/* Pillar 3: Fitness */}
          <div className="executive-card">
            <div className="executive-card-header">
              <span className="executive-card-tag">03 · PHYSICAL</span>
              <span className="executive-metric-pill">4/5 Days Streak</span>
            </div>
            <h2 className="executive-card-title">Fitness &amp; Training</h2>
            <div className="executive-preview-body">
              <div className="executive-stat-hero">18,450 kg</div>
              <div className="executive-stat-sub">Weekly Tonnage · Progressive Overload</div>
            </div>
            <div className="executive-card-footer">
              <span>Next session: Legs &amp; Core tomorrow</span>
            </div>
          </div>

          {/* Pillar 4: Library */}
          <div className="executive-card">
            <div className="executive-card-header">
              <span className="executive-card-tag">04 · KNOWLEDGE</span>
              <span className="executive-metric-pill">248 Indexed</span>
            </div>
            <h2 className="executive-card-title">Personal Library</h2>
            <div className="executive-preview-body">
              <div className="executive-note-preview">
                <strong>Recent:</strong> Distributed System Consensus &amp; Raft notes
              </div>
              <div className="executive-note-preview">
                <strong>Tag:</strong> Neuroscience &amp; Working Memory
              </div>
            </div>
            <div className="executive-card-footer">
              <span>Syncing with MCP &amp; local notes</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
