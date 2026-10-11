import type { Task } from '../../types/tasks'

interface TaskItemProps {
  task: Task
  onToggle: (id: number, completed: number) => void
  onDelete: (id: number) => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const isCompleted = task.completed === 1

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp * 1000)
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
  }

  return (
    <div className={`task-row ${isCompleted ? 'completed' : ''}`}>
      <button
        type="button"
        className={`task-checkbox ${isCompleted ? 'checked' : ''}`}
        onClick={() => onToggle(task.id, task.completed)}
        aria-label={isCompleted ? 'Mark task incomplete' : 'Mark task complete'}
      >
        {isCompleted && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      <span className="task-title-text">{task.title}</span>

      <span className="task-date-pill">{formatDate(task.created_at)}</span>

      <button
        type="button"
        className="task-action-btn delete"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        title="Delete task"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  )
}
