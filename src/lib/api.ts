const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BASE_URL}${path}`

  const response = await fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    let message = 'An unexpected error occurred'
    if (typeof data.error === 'string') {
      message = data.error
    } else if (data.error?.issues?.[0]?.message) {
      message = data.error.issues[0].message
    }
    throw new Error(message)
  }

  return data as T
}
