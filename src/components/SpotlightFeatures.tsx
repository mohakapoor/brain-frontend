export default function SpotlightFeatures() {
  return (
    <section className="section-full section-spacing" id="spotlight-features">
      <div>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
          Engineered for Extreme Focus
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1.05rem', maxWidth: '680px' }}>
          Concrete architectural guarantees built to eliminate ambiguity, stale state, and context switching.
        </p>
      </div>

      <div className="evidence-grid">
        {/* Evidence Panel 1: Strict Hierarchy */}
        <div className="evidence-card reveal-on-scroll reveal-delay-1">
          <div className="evidence-preview-window">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="evidence-badge" style={{ background: 'rgba(255, 70, 36, 0.15)', color: 'var(--accent-hero)', border: '1px solid rgba(255, 70, 36, 0.3)' }}>
                Rule: Unfinished &gt; Done
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>active_queue</span>
            </div>
            <div style={{ background: 'rgba(255, 70, 36, 0.1)', border: '1px solid rgba(255, 70, 36, 0.3)', padding: '10px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-hero)' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ffffff' }}>Probability revision & problem sets</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', padding: '8px 12px', borderRadius: '8px', opacity: 0.5, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)' }}>✓</span>
              <span style={{ fontSize: '0.82rem', textDecoration: 'line-through', color: 'var(--text-muted)' }}>Implement D1 migrations</span>
            </div>
          </div>

          <div>
            <h3 className="evidence-card-title">Strict Visual Hierarchy</h3>
            <p className="evidence-card-desc">
              Unfinished tasks remain permanently pinned above completed ones. No nested boards, kanban lanes, or status dropdowns that create more planning work than actual execution.
            </p>
          </div>
        </div>

        {/* Evidence Panel 2: Single Device Policy */}
        <div className="evidence-card reveal-on-scroll reveal-delay-2">
          <div className="evidence-preview-window">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="evidence-badge" style={{ background: 'rgba(56, 189, 248, 0.12)', color: 'var(--accent-cyan)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                Session Invalidation
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>auth_guard</span>
            </div>
            <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid var(--border-subtle)', padding: '12px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              <span style={{ color: 'var(--accent-cyan)' }}>→ Device #2 authenticated</span><br />
              <span style={{ color: 'var(--accent-hero)' }}>→ Revoked previous cookie</span><br />
              <span>→ Status: 401 Session Replaced</span>
            </div>
          </div>

          <div>
            <h3 className="evidence-card-title">Single-Device Session Guard</h3>
            <p className="evidence-card-desc">
              Strict single-active-session policy backed by encrypted HttpOnly cookies. Logging in from any new device automatically terminates all existing sessions.
            </p>
          </div>
        </div>

        {/* Evidence Panel 3: Cloudflare SQLite Edge */}
        <div className="evidence-card reveal-on-scroll reveal-delay-3">
          <div className="evidence-preview-window">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span className="evidence-badge" style={{ background: 'rgba(0, 229, 153, 0.12)', color: 'var(--accent-emerald)', border: '1px solid rgba(0, 229, 153, 0.25)' }}>
                SQLite D1 Telemetry
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>~0.8ms</span>
            </div>
            <div style={{ background: 'rgba(0, 0, 0, 0.5)', border: '1px solid var(--border-subtle)', padding: '12px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              <code>SELECT * FROM tasks</code><br />
              <code>WHERE user_id = ? ORDER BY completed ASC</code><br />
              <span style={{ color: 'var(--accent-emerald)' }}>→ 0.0ms cold start · 300+ edge nodes</span>
            </div>
          </div>

          <div>
            <h3 className="evidence-card-title">Sub-Millisecond Edge SQLite</h3>
            <p className="evidence-card-desc">
              Runs on Cloudflare Workers and SQLite D1 at the edge. Zero cold-start connection pool bottlenecks with automated typechecked schema migrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
