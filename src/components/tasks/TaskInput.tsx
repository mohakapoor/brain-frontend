import { useState } from 'react'

interface TaskInputProps {
  onAdd: (title: string) => Promise<boolean>
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [title, setTitle] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || isSubmitting) return

    setIsSubmitting(true)
    const success = await onAdd(title.trim())
    if (success) {
      setTitle('')
    }
    setIsSubmitting(false)
  }

  return (
    <form className="task-capture-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-capture-input"
        placeholder="What do you need to do?"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={isSubmitting}
        autoFocus
      />
      <button
        type="submit"
        className="task-capture-btn"
        disabled={isSubmitting || !title.trim()}
      >
        {isSubmitting ? 'Adding...' : 'Add'}
      </button>
    </form>
  )
}
