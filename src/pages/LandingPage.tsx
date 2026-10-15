import { useState } from 'react'
import type { DemoTask } from '../types/landing'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DualitySection from '../components/DualitySection'
import ProofStats from '../components/ProofStats'
import ExecutionLoop from '../components/ExecutionLoop'
import LiveStream from '../components/LiveStream'
import LandingCTA from '../components/LandingCTA'
import Footer from '../components/Footer'

interface LandingPageProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function LandingPage({ theme, onToggleTheme }: LandingPageProps) {
  useDocumentTitle('Brain')
  useScrollReveal()
  const [activeNav, setActiveNav] = useState('loop')

  const [tasks, setTasks] = useState<DemoTask[]>([
    { id: 1, title: 'Review quarterly revenue and runway', completed: true, tag: 'FINANCE' },
    { id: 2, title: 'Deep work: write chapter 3 draft', completed: true, tag: 'WRITING' },
    { id: 3, title: 'Probability revision & problem sets', completed: false, tag: 'STUDY' },
    { id: 4, title: 'Ship v1 landing page update', completed: false, tag: 'WORK' },
    { id: 5, title: 'Strength session: 5x5 squats', completed: false, tag: 'HEALTH' },
  ])

  const handleNavClick = (sectionId: string, navKey: string) => {
    setActiveNav(navKey)
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleToggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const handleAddTask = (title: string) => {
    const newTask: DemoTask = {
      id: Date.now(),
      title,
      completed: false,
      tag: 'NEW',
    }
    setTasks(prev => [newTask, ...prev])
  }

  const completedCount = tasks.filter(t => t.completed).length
  const velocityPercentage = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 100

  return (
    <div>
      <Navbar
        activeNav={activeNav}
        theme={theme}
        onNavClick={handleNavClick}
        onToggleTheme={onToggleTheme}
      />

      <Hero>
        <DualitySection
          velocityPercentage={velocityPercentage}
          taskCount={tasks.length}
        />
      </Hero>

      <ProofStats />
      <ExecutionLoop />
      <LiveStream
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onAddTask={handleAddTask}
      />
      <LandingCTA />
      <Footer />
    </div>
  )
}
