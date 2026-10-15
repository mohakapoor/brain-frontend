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
    <form className="capture-input-box" onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
      <input
        type="text"
        className="capture-input"
        placeholder="What do you need to execute right now?"
        value={title}
        onChange={e => setTitle(e.target.value)}
        disabled={isSubmitting}
        autoFocus
      />
      <span className="kbd-badge">↵ Enter</span>
      <button
        type="submit"
        className="btn-pill-orange"
        disabled={isSubmitting || !title.trim()}
      >
        {isSubmitting ? 'Capturing...' : 'Capture'}
      </button>
    </form>
  )
}
