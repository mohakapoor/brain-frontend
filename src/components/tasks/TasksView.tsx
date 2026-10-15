import type { Task } from '../../types/tasks'
import { TaskItem } from './TaskItem'

interface TasksViewProps {
  tasks: Task[]
  isLoading: boolean
  error: string | null
  onToggle: (id: number, completed: number) => void
  onDelete: (id: number) => void
  onEdit?: (id: number, title: string) => void
}

export function TasksView({ tasks, isLoading, error, onToggle, onDelete, onEdit }: TasksViewProps) {
  if (isLoading) {
    return (
      <div className="tasks-state-box">
        <span>Loading tasks...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="tasks-state-box error">
        <span>{error}</span>
      </div>
    )
  }

  if (tasks.length === 0) {
    return (
      <div className="tasks-empty-state">
        <span className="empty-glyph">✦</span>
        <p className="empty-title">No tasks captured yet</p>
        <p className="empty-subtitle">Capture a task to get started.</p>
      </div>
    )
  }

  const pendingTasks = tasks.filter(t => t.completed === 0)
  const completedTasks = tasks.filter(t => t.completed === 1)

  return (
    <div className="tasks-view-container">
      {/* Incomplete tasks group */}
      <div className="tasks-section">
        <div className="tasks-section-header">
          <span className="tasks-section-title">Incomplete</span>
          <span className="tasks-count-badge">{pendingTasks.length}</span>
        </div>

        {pendingTasks.length === 0 ? (
          <div className="tasks-empty-sub">All clear. No pending tasks.</div>
        ) : (
          <div className="task-stream-list">
            {pendingTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        )}
      </div>

      {/* Completed tasks group */}
      {completedTasks.length > 0 && (
        <div className="tasks-section completed-group">
          <div className="tasks-section-header">
            <span className="tasks-section-title">Completed</span>
            <span className="tasks-count-badge">{completedTasks.length}</span>
          </div>

          <div className="task-stream-list">
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggle}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
