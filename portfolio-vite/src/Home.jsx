import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home