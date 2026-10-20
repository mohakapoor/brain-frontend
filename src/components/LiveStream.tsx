import { useState } from 'react'
import type { DemoTask } from '../types/landing'

interface LiveStreamProps {
  tasks: DemoTask[]
  onToggleTask: (id: number) => void
  onAddTask: (title: string) => void
}

export default function LiveStream({ tasks, onToggleTask, onAddTask }: LiveStreamProps) {
  const [inputVal, setInputVal] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputVal.trim()) return
    onAddTask(inputVal.trim())
    setInputVal('')
  }

  return (
    <section className="section-full section-spacing" id="live-stream">
      <div className="stream-box-wide reveal-on-scroll">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '4px' }}>
              Interactive Demo
            </h2>
          </div>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Click any task to mark it complete
          </span>
        </div>

        <form onSubmit={handleSubmit} className="capture-input-box">
          <input
            type="text"
            className="capture-input"
            placeholder="What are you working on right now?"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
          />
          <span className="kbd-badge">↵ Enter</span>
          <button type="submit" className="btn-pill-orange">
            Capture
          </button>
        </form>

        <div className="task-stream-list">
          {tasks.map(task => (
            <div
              key={task.id}
              className={`task-item-row ${task.completed ? 'completed' : ''}`}
              onClick={() => onToggleTask(task.id)}
            >
              <div className="task-left">
                <div className="custom-checkbox">
                  <span className="checkmark-icon">✓</span>
                </div>
                <span className="task-text">{task.title}</span>
              </div>
              <span className="task-meta-tag">{task.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
