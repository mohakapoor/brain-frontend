export interface User {
  id: number
  username: string
  createdAt?: string
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  checkAuth: () => Promise<void>
  logout: () => Promise<void>
}
