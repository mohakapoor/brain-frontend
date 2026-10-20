import { useState } from 'react'

interface DualitySectionProps {
  velocityPercentage: number
  taskCount: number
}

export default function DualitySection({ velocityPercentage, taskCount }: DualitySectionProps) {
  const [activeInterface, setActiveInterface] = useState<'web' | 'mcp'>('web')

  return (
    <section className="dual-interface-card" id="two-interfaces">
      <div className="dual-tabs-header">
        <h2 className="dual-tabs-title">
          Two Interfaces. One Source of Truth.
        </h2>

        <div className="interface-toggle-pills">
          <button
            type="button"
            className={`interface-tab-btn ${activeInterface === 'web' ? 'active' : ''}`}
            onClick={() => setActiveInterface('web')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Web Dashboard</span>
          </button>
          <button
            type="button"
            className={`interface-tab-btn ${activeInterface === 'mcp' ? 'active' : ''}`}
            onClick={() => setActiveInterface('mcp')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="tab-label-desktop">Conversational AI (MCP)</span>
            <span className="tab-label-mobile">AI Assistant (MCP)</span>
          </button>
        </div>
      </div>

      <div className="dual-screen-content">
        {activeInterface === 'web' ? (
          <div className="dual-grid-web">
            {/* Focal Vermilion Card */}
            <div className="focal-velocity-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>Weekly Progress</div>
                  <div style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em' }}>{velocityPercentage}%</div>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.22)',
                  backdropFilter: 'blur(10px)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}>
                  ↑ +18.4% this week
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <svg
                  style={{ width: '100%', height: '70px', display: 'block', overflow: 'visible' }}
                  viewBox="0 0 500 85"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="velocityFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 75 C 55 75, 70 73, 92 71 C 130 68, 145 65, 173 61 C 215 55, 230 45, 253 37 C 290 25, 305 19, 333 17 C 365 15, 385 19, 413 13 C 445 7, 465 10, 482 12 L 482 85 L 10 85 Z"
                    fill="url(#velocityFill)"
                  />
                  <path
                    d="M 10 75 C 55 75, 70 73, 92 71 C 130 68, 145 65, 173 61 C 215 55, 230 45, 253 37 C 290 25, 305 19, 333 17 C 365 15, 385 19, 413 13 C 445 7, 465 10, 482 12"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="482" cy="12" r="4.5" fill="#ffffff" />
                  <circle cx="482" cy="12" r="9" fill="#ffffff" fillOpacity="0.3" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 600, opacity: 0.85, marginTop: '10px' }}>
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>
              </div>
            </div>

            {/* Dashboard Preview Cards (1 card per row) */}
            <div className="dashboard-preview-column">
              {/* Card 1: Up Next / Active Tasks */}
              <div className="dashboard-preview-card">
                <div className="preview-card-header">
                  <span className="preview-card-title">Up Next</span>
                  <span className="preview-card-badge">{taskCount > 0 ? `${taskCount} active` : 'All clear'}</span>
                </div>
                <div className="preview-task-list">
                  <div className="preview-task-row">
                    <span className="preview-checkbox" />
                    <span className="preview-task-text">Finalize Q3 roadmap presentation</span>
                  </div>
                  <div className="preview-task-row">
                    <span className="preview-checkbox" />
                    <span className="preview-task-text">Review PR for user onboarding flow</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Today's Focus & Sync State */}
              <div className="dashboard-preview-card">
                <div className="preview-stats-row">
                  <div className="preview-stat-col">
                    <span className="preview-stat-label">Today's Focus</span>
                    <span className="preview-stat-value">Deep Work</span>
                    <span className="preview-stat-sub">4.5 hrs logged</span>
                  </div>
                  <div className="preview-stat-divider" />
                  <div className="preview-stat-col">
                    <span className="preview-stat-label">Sync Status</span>
                    <span className="preview-stat-value">All synced</span>
                    <span className="preview-stat-sub">Web &amp; AI linked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mcp-terminal-screen">
            <div className="terminal-header">
              <div className="terminal-header-left">
                <span className="term-dot red" />
                <span className="term-dot yellow" />
                <span className="term-dot green" />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>
                  chatgpt / claude · mcp connection
                </span>
              </div>
            </div>

            <div className="chat-conversation-stream">
              {/* User message bubble */}
              <div className="chat-bubble-user-wrap">
                <div className="chat-bubble-user">
                  <div className="chat-bubble-user-text">
                    Add probability revision to tomorrow's study schedule.
                  </div>
                  <span className="chat-bubble-user-meta">9:41 AM · Claude Desktop</span>
                </div>
              </div>

              {/* AI assistant response */}
              <div className="chat-message-ai-wrap">
                <div className="chat-ai-glyph">✦</div>
                <div className="chat-ai-content">
                  <p className="chat-ai-text">
                    Scheduled <strong>Probability revision &amp; problem sets</strong> for tomorrow under <strong>Study</strong>.
                  </p>
                  <div className="chat-action-confirmation">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Created in Second Brain · Priority 1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-thread-footer">
              <span className="chat-sync-indicator" />
              <span>Bi-directional sync · Instantly reflected on your web dashboard</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
