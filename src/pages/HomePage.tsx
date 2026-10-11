import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTasks } from '../hooks/useTasks'
import { TaskInput } from '../components/tasks/TaskInput'
import { TasksView } from '../components/tasks/TasksView'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<'summary' | 'tasks' | 'finance' | 'fitness' | 'library'>('summary')
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { tasks, isLoading: tasksLoading, error: tasksError, createTask, toggleTask, deleteTask } = useTasks()
  const pendingCount = tasks.filter(t => t.completed === 0).length

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }


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
            <div className="user-avatar-glyph">
              {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="user-profile-meta">
              <span className="user-name">{user?.username ?? 'Second Brain User'}</span>
              <span className="user-status-text">Active Workspace</span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-nav-item"
            style={{ marginTop: '8px', width: '100%' }}
            onClick={handleLogout}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* 2. Main Executive Content Area */}
      <main className="app-main-canvas">
        {activeSection === 'tasks' ? (
          <>
            <header className="app-top-header">
              <div>
                <span className="header-eyebrow">PILLAR 01 · TASK CAPTURE &amp; EXECUTION</span>
                <h1 className="header-page-title">Tasks &amp; Goals</h1>
              </div>
              <div className="header-actions">
                <span className="header-eyebrow" style={{ margin: 0 }}>
                  {pendingCount} {pendingCount === 1 ? 'task' : 'tasks'} pending
                </span>
              </div>
            </header>

            <TaskInput onAdd={createTask} />

            <TasksView
              tasks={tasks}
              isLoading={tasksLoading}
              error={tasksError}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          </>
        ) : activeSection === 'summary' ? (
          <>
            {/* Top bar */}
            <header className="app-top-header">
              <div>
                <span className="header-eyebrow">SYSTEM STATUS · ALL CHANNELS ACTIVE</span>
                <h1 className="header-page-title">Executive Summary</h1>
              </div>
              <div className="header-actions">
                <button
                  type="button"
                  className="btn-pill-orange"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  onClick={() => setActiveSection('tasks')}
                >
                  Capture Task
                </button>
              </div>
            </header>

            {/* 4 Pillars Executive Grid */}
            <div className="executive-summary-grid">
              {/* Pillar 1: Tasks */}
              <div
                className="executive-card"
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveSection('tasks')}
              >
                <div className="executive-card-header">
                  <span className="executive-card-tag">01 · EXECUTION</span>
                  <span className="executive-metric-pill">{pendingCount} Pending</span>
                </div>
                <h2 className="executive-card-title">Tasks &amp; Goals</h2>
                <div className="executive-preview-body">
                  {tasks.slice(0, 2).map(t => (
                    <div key={t.id} className="executive-task-item">
                      <span className={`check-box-preview ${t.completed === 1 ? 'checked' : ''}`} />
                      <span>{t.title}</span>
                    </div>
                  ))}
                  {tasks.length === 0 && (
                    <div className="executive-task-item" style={{ color: 'var(--text-muted)' }}>
                      <span>No active tasks yet. Click to add.</span>
                    </div>
                  )}
                </div>
                <div className="executive-card-footer">
                  <span>Click to view and manage tasks &rarr;</span>
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
      </>

        ) : (
          <div className="tasks-state-box">
            <span className="empty-glyph">✦</span>
            <p className="empty-title">Phase 1 Boundary</p>
            <p className="empty-subtitle">This pillar will unlock in subsequent phases per docs/phase1.md.</p>
            <button
              type="button"
              className="btn-pill-primary"
              style={{ marginTop: '16px', padding: '8px 16px', fontSize: '0.85rem' }}
              onClick={() => setActiveSection('tasks')}
            >
              Go to Tasks &amp; Goals
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
