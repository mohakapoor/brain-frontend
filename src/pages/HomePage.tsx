import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTasks } from '../hooks/useTasks'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { TaskInput } from '../components/tasks/TaskInput'
import { TasksView } from '../components/tasks/TasksView'

interface HomePageProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function HomePage({ theme, onToggleTheme }: HomePageProps) {
  const location = useLocation()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { tasks, isLoading: tasksLoading, error: tasksError, createTask, toggleTask, editTask, deleteTask } = useTasks()
  const pendingCount = tasks.filter(t => t.completed === 0).length

  // Determine active view based on current URL path
  const currentPath = location.pathname.replace(/\/$/, '')
  const isTasksView = currentPath === '/home/todo' || currentPath === '/home/tasks'
  const isFinanceView = currentPath === '/home/finance'
  const isFitnessView = currentPath === '/home/fitness'
  const isLibraryView = currentPath === '/home/library'
  const isSummaryView = !isTasksView && !isFinanceView && !isFitnessView && !isLibraryView

  const pageTitle = isTasksView
    ? 'Tasks & Goals'
    : isFinanceView
    ? 'Finances'
    : isFitnessView
    ? 'Fitness & Health'
    : isLibraryView
    ? 'Personal Library'
    : 'Executive Summary'
  useDocumentTitle(pageTitle)

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
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Workspace</div>

          <NavLink
            to="/home"
            end
            className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>Executive Summary</span>
          </NavLink>

          <NavLink
            to="/home/todo"
            className={({ isActive }) => `sidebar-nav-item ${isActive || currentPath === '/home/tasks' ? 'active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span>Tasks &amp; Goals</span>
          </NavLink>

          <NavLink
            to="/home/finance"
            className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span>Finances</span>
          </NavLink>

          <NavLink
            to="/home/fitness"
            className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <span>Fitness &amp; Health</span>
          </NavLink>

          <NavLink
            to="/home/library"
            className={({ isActive }) => `sidebar-nav-item ${isActive ? 'active' : ''}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span>Personal Library</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-badge">
            <div className="user-avatar-glyph">
              {user?.username ? user.username.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="user-profile-meta">
              <span className="user-name">{user?.username ?? 'Second Brain User'}</span>
              <span className="user-status-text">Personal Workspace</span>
            </div>
          </div>

          <div className="sidebar-action-row">
            <button
              type="button"
              className="sidebar-icon-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="sidebar-icon-btn"
              onClick={handleLogout}
              aria-label="Sign Out"
              title="Sign Out"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* 2. Main Executive Content Area */}
      <main className="app-main-canvas">
        {isTasksView ? (
          <>
            <header className="app-top-header">
              <div>
                <h1 className="header-page-title">Tasks &amp; Goals</h1>
              </div>
              <div className="header-actions">
                <span className="header-actions-count">
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
              onEdit={editTask}
            />
          </>
        ) : isSummaryView ? (
          <>
            {/* Top bar */}
            <header className="app-top-header">
              <div>
                <h1 className="header-page-title">Executive Summary</h1>
              </div>
              <div className="header-actions">
                <Link
                  to="/home/todo"
                  className="btn-pill-orange"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  Capture Task
                </Link>
              </div>
            </header>

            {/* 4 Pillars Executive Grid */}
            <div className="executive-summary-grid">
              {/* Pillar 1: Tasks */}
              <Link
                to="/home/todo"
                className="executive-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="executive-card-header">
                  <span className="executive-card-tag">EXECUTION</span>
                  <span className="executive-metric-pill">{pendingCount} Pending</span>
                </div>
                <h2 className="executive-card-title">Tasks &amp; Goals</h2>
                <div className="executive-preview-body">
                  {tasks.slice(0, 2).map(t => (
                    <div key={t.id} className={`executive-task-item ${t.completed === 1 ? 'completed' : ''}`}>
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
                  <span>Manage active tasks &rarr;</span>
                </div>
              </Link>

              {/* Pillar 2: Finances */}
              <Link
                to="/home/finance"
                className="executive-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="executive-card-header">
                  <span className="executive-card-tag">CAPITAL</span>
                  <span className="executive-metric-pill">14.2 Mo Runway</span>
                </div>
                <h2 className="executive-card-title">Finances</h2>
                <div className="executive-preview-body">
                  <div className="executive-stat-hero">₹42,850/mo</div>
                  <div className="executive-stat-sub">Monthly Burn</div>
                </div>
                <div className="executive-card-footer">
                  <span>Tracking active spending categories</span>
                </div>
              </Link>

              {/* Pillar 3: Fitness */}
              <Link
                to="/home/fitness"
                className="executive-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="executive-card-header">
                  <span className="executive-card-tag">PHYSICAL</span>
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
              </Link>

              {/* Pillar 4: Library */}
              <Link
                to="/home/library"
                className="executive-card"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="executive-card-header">
                  <span className="executive-card-tag">KNOWLEDGE</span>
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
                  <span>Integrated with local notes</span>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <header className="app-top-header">
              <div>
                <h1 className="header-page-title">
                  {isFinanceView ? 'Finances' : isFitnessView ? 'Fitness & Health' : 'Personal Library'}
                </h1>
              </div>
            </header>

            <div className="tasks-state-box">
              <span className="empty-glyph">✦</span>
              <p className="empty-title">
                {isFinanceView ? 'Capital & Finances' : isFitnessView ? 'Physical & Training' : 'Knowledge & Library'}
              </p>
              <p className="empty-subtitle">
                {isFinanceView
                  ? 'Cashflow telemetry, runway projections, and expense tracking will appear here.'
                  : isFitnessView
                  ? 'Workout logging, volume progression, and recovery tracking will appear here.'
                  : 'Reading lists, synthesized literature notes, and semantic search will appear here.'}
              </p>
              <Link
                to="/home/todo"
                className="btn-pill-primary"
                style={{ marginTop: '16px', padding: '8px 16px', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                Go to Tasks &amp; Goals
              </Link>
            </div>
          </>
        )}
      </main>

    </div>
  )
}
