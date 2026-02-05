import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LazySectionWrapper from './components/LazySectionWrapper'

const Home = () => {
  return (
    <div>
      <Hero />
      <LazySectionWrapper>
        <About />
      </LazySectionWrapper>
      <LazySectionWrapper>
        <Skills />
      </LazySectionWrapper>
      <LazySectionWrapper>
        <Achievements />
      </LazySectionWrapper>
      <LazySectionWrapper>
        <Projects />
      </LazySectionWrapper>
      <LazySectionWrapper>
        <Contact />
      </LazySectionWrapper>
    </div>
  )
}

export default Home