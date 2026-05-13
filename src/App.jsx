import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { initAnalytics } from './analytics/tracker'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import ProjectPage from './components/Projects/ProjectPage'
import { FloatingCTA } from './components/FloatingCTA'

function MainPage() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <FloatingCTA />
    </div>
  )
}

function Root() {
  return <Outlet />
}

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
])

function App() {
  useEffect(() => {
    initAnalytics()
  }, [])

  return <RouterProvider router={router} />
}

export default App
