import { useState, useEffect, useCallback } from 'react'
import type { Task, TasksResponse, SingleTaskResponse } from '../types/tasks'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const apiBase = import.meta.env.VITE_API_BASE_URL

  const fetchTasks = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch(`${apiBase}/api_brain/tasks`, {
        method: 'GET',
        credentials: 'include',
      })
      if (!res.ok) {
        throw new Error('Failed to load tasks')
      }
      const data: TasksResponse = await res.json()
      setTasks(data.tasks || [])
    } catch (err: any) {
      setError(err.message || 'Error loading tasks')
    } finally {
      setIsLoading(false)
    }
  }, [apiBase])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const createTask = async (title: string): Promise<boolean> => {
    if (!title.trim()) return false
    setError(null)
    try {
      const res = await fetch(`${apiBase}/api_brain/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title: title.trim() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to create task')
      }
      const data: SingleTaskResponse = await res.json()
      // Incomplete tasks appear at top
      setTasks(prev => [data.task, ...prev])
      return true
    } catch (err: any) {
      setError(err.message || 'Error creating task')
      return false
    }
  }

  const toggleTask = async (id: number, currentCompleted: number): Promise<boolean> => {
    setError(null)
    const nextCompleted = currentCompleted === 0
    try {
      const res = await fetch(`${apiBase}/api_brain/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ completed: nextCompleted }),
      })
      if (!res.ok) {
        throw new Error('Failed to update task')
      }
      const data: SingleTaskResponse = await res.json()
      setTasks(prev => {
        const updated = prev.map(t => (t.id === id ? data.task : t))
        // Maintain incomplete first ordering
        return updated.sort((a, b) => {
          if (a.completed !== b.completed) return a.completed - b.completed
          return b.created_at - a.created_at
        })
      })
      return true
    } catch (err: any) {
      setError(err.message || 'Error updating task')
      return false
    }
  }

  const editTask = async (id: number, title: string): Promise<boolean> => {
    if (!title.trim()) return false
    setError(null)
    try {
      const res = await fetch(`${apiBase}/api_brain/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ title: title.trim() }),
      })
      if (!res.ok) {
        throw new Error('Failed to edit task')
      }
      const data: SingleTaskResponse = await res.json()
      setTasks(prev => prev.map(t => (t.id === id ? data.task : t)))
      return true
    } catch (err: any) {
      setError(err.message || 'Error editing task')
      return false
    }
  }

  const deleteTask = async (id: number): Promise<boolean> => {
    setError(null)
    try {
      const res = await fetch(`${apiBase}/api_brain/tasks/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!res.ok) {
        throw new Error('Failed to delete task')
      }
      setTasks(prev => prev.filter(t => t.id !== id))
      return true
    } catch (err: any) {
      setError(err.message || 'Error deleting task')
      return false
    }
  }

  return {
    tasks,
    isLoading,
    error,
    refetch: fetchTasks,
    createTask,
    toggleTask,
    editTask,
    deleteTask,
  }
}
