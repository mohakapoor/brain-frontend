import { useState } from 'react'
import type { DemoTask } from './types/landing'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DualitySection from './components/DualitySection'
import ProofStats from './components/ProofStats'
import ExecutionLoop from './components/ExecutionLoop'
import SpotlightFeatures from './components/SpotlightFeatures'
import LiveStream from './components/LiveStream'
import AuthGateway from './components/AuthGateway'
import Footer from './components/Footer'

export default function App() {
  const [activeNav, setActiveNav] = useState('loop')
  const [tasks, setTasks] = useState<DemoTask[]>([
    { id: 1, title: 'Implement Cloudflare D1 atomic migrations', completed: true, tag: 'INFRA' },
    { id: 2, title: 'Configure single-device HttpOnly session guard', completed: true, tag: 'SECURITY' },
    { id: 3, title: 'Probability revision & problem sets', completed: false, tag: 'STUDY' },
    { id: 4, title: 'Design high-velocity task execution dashboard', completed: false, tag: 'FRONTEND' },
    { id: 5, title: 'Centralize Zod 4 request validation pipeline', completed: false, tag: 'CORE' },
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
        onNavClick={handleNavClick}
        onSignInClick={() => handleNavClick('auth-gateway', 'auth')}
      />

      <Hero>
        <DualitySection
          velocityPercentage={velocityPercentage}
          taskCount={tasks.length}
        />
      </Hero>

      <ProofStats />
      <ExecutionLoop />
      <SpotlightFeatures />
      <LiveStream
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onAddTask={handleAddTask}
      />
      <AuthGateway />
      <Footer />
    </div>
  )
}
