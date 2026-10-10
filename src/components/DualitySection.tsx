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
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
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
            <span>Conversational AI (MCP)</span>
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
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.9 }}>Execution Velocity</div>
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
                <svg style={{ width: '100%', height: '70px', display: 'block' }} viewBox="0 0 500 80" fill="none">
                  <path
                    d="M0 55 Q 50 40, 90 48 T 180 30 T 260 42 T 340 18 T 420 25 T 500 12 L 500 80 L 0 80 Z"
                    fill="rgba(255, 255, 255, 0.25)"
                  />
                  <path
                    d="M0 55 Q 50 40, 90 48 T 180 30 T 260 42 T 340 18 T 420 25 T 500 12"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="500" cy="12" r="5" fill="#ffffff" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', fontWeight: 600, opacity: 0.85, marginTop: '10px' }}>
                  <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                </div>
              </div>
            </div>

            {/* Telemetry Chips (No emojis, clean labels) */}
            <div className="telemetry-grid">
              <div className="telemetry-chip">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Edge Latency</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>~1.2ms</span>
              </div>
              <div className="telemetry-chip">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Session Policy</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>Single Device</span>
              </div>
              <div className="telemetry-chip">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Active Queue</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{taskCount} items</span>
              </div>
              <div className="telemetry-chip">
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Auth Protocol</span>
                <span style={{ fontSize: '1.35rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>HttpOnly</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mcp-terminal-screen">
            <div className="terminal-header">
              <span className="term-dot red" />
              <span className="term-dot yellow" />
              <span className="term-dot green" />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '8px' }}>
                mcp-server · v2024-11-05
              </span>
            </div>

            <div className="term-dialogue-row user-prompt">
              <span className="term-label">Natural Language Prompt (ChatGPT / Claude)</span>
              <span className="term-text">"Add probability revision to tomorrow's tasks."</span>
            </div>

            <div className="term-dialogue-row ai-response">
              <span className="term-label" style={{ color: 'var(--accent-emerald)' }}>MCP Tool Invocation Dispatched</span>
              <span className="term-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
                → Dispatched tool: <code>create_task</code><br />
                → Arguments: <code>{`{ "title": "Probability revision & problem sets", "tag": "STUDY" }`}</code><br />
                → Result: <code>201 Created (persisted to Cloudflare D1 · User ID 1)</code>
              </span>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '8px' }}>
              <span style={{ color: 'var(--accent-emerald)' }}>●</span>
              <span>Both interfaces share identical state. Zero duplicated databases or conflicting business rules.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
