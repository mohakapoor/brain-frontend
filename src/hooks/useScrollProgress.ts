import { useState, useEffect } from 'react'

/**
 * Tracks scroll progress over the initial hero viewport range [0, 280px].
 * Returns a normalized value between 0.0 (top of page) and 1.0 (scrolled down).
 * Uses requestAnimationFrame for jitter-free 60/120fps GPU performance.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollY = window.scrollY
      // 0 at top, 1 when scrolled 280px towards showcase
      const factor = Math.min(Math.max(scrollY / 280, 0), 1)
      setProgress(factor)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}
