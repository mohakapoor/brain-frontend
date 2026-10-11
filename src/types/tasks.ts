export interface Task {
  id: number
  user_id: number
  title: string
  completed: number // 0 = incomplete, 1 = completed
  created_at: number // unix timestamp (seconds)
  updated_at: number // unix timestamp (seconds)
  completed_at: number | null // unix timestamp (seconds)
}

export interface TasksResponse {
  tasks: Task[]
}

export interface SingleTaskResponse {
  message: string
  task: Task
}
