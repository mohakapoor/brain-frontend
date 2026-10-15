import { useState, useEffect, useCallback } from 'react'
import type { Task, TasksResponse, SingleTaskResponse } from '../types/tasks'
import { apiRequest } from '../lib/api'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchTasks = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await apiRequest<TasksResponse>('/api_brain/tasks', {
        method: 'GET',
      })
      setTasks(data.tasks || [])
    } catch (err: any) {
      setError(err.message || 'Error loading tasks')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const createTask = async (title: string): Promise<boolean> => {
    if (!title.trim()) return false
    setError(null)
    try {
      const data = await apiRequest<SingleTaskResponse>('/api_brain/tasks', {
        method: 'POST',
        body: JSON.stringify({ title: title.trim() }),
      })
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

    // Optimistic UI update: instantly update visual state and ordering
    setTasks(prev => {
      const updated = prev.map(t =>
        t.id === id ? { ...t, completed: nextCompleted ? 1 : 0 } : t
      )
      return updated.sort((a, b) => {
        if (a.completed !== b.completed) return a.completed - b.completed
        return b.created_at - a.created_at
      })
    })

    try {
      const data = await apiRequest<SingleTaskResponse>(`/api_brain/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: nextCompleted }),
      })
      setTasks(prev => {
        const updated = prev.map(t => (t.id === id ? data.task : t))
        return updated.sort((a, b) => {
          if (a.completed !== b.completed) return a.completed - b.completed
          return b.created_at - a.created_at
        })
      })
      return true
    } catch (err: any) {
      fetchTasks()
      setError(err.message || 'Error updating task')
      return false
    }
  }

  const editTask = async (id: number, title: string): Promise<boolean> => {
    if (!title.trim()) return false
    setError(null)
    try {
      const data = await apiRequest<SingleTaskResponse>(`/api_brain/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ title: title.trim() }),
      })
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
      await apiRequest(`/api_brain/tasks/${id}`, {
        method: 'DELETE',
      })
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
