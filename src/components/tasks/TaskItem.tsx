import { useState } from 'react'
import type { Task } from '../../types/tasks'

interface TaskItemProps {
  task: Task
  onToggle: (id: number, completed: number) => void
  onDelete: (id: number) => void
  onEdit?: (id: number, title: string) => void
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const isCompleted = task.completed === 1

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp * 1000)
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
  }

  const handleSave = () => {
    if (editTitle.trim() && editTitle.trim() !== task.title) {
      onEdit?.(task.id, editTitle.trim())
    } else {
      setEditTitle(task.title)
    }
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      setEditTitle(task.title)
      setIsEditing(false)
    }
  }

  return (
    <div className={`task-item-row ${isCompleted ? 'completed' : ''}`}>
      <div className="task-left" style={{ flex: 1, minWidth: 0 }}>
        <button
          type="button"
          className={`custom-checkbox ${isCompleted ? 'checked' : ''}`}
          onClick={() => onToggle(task.id, task.completed)}
          aria-label={isCompleted ? 'Mark task incomplete' : 'Mark task complete'}
        >
          <span className="checkmark-icon">✓</span>
        </button>

        {isEditing ? (
          <input
            type="text"
            className="task-inline-edit-input"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            className="task-text"
            onDoubleClick={() => !isCompleted && setIsEditing(true)}
            title={isCompleted ? undefined : 'Double-click to edit'}
          >
            {task.title}
          </span>
        )}
      </div>

      <div className="task-right" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
        <span className="task-meta-tag">{formatDate(task.created_at)}</span>

        <div className="task-row-actions">
          {!isCompleted && !isEditing && (
            <button
              type="button"
              className="task-action-btn edit"
              onClick={() => setIsEditing(true)}
              aria-label="Edit task"
              title="Edit task"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </button>
          )}

          <button
            type="button"
            className="task-action-btn delete"
            onClick={() => onDelete(task.id)}
            aria-label="Delete task"
            title="Delete task"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
