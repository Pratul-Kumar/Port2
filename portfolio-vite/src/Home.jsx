import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
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
        <Certifications />
      </LazySectionWrapper>
      <LazySectionWrapper>
         <Projects />
      </LazySectionWrapper>
      <LazySectionWrapper>
        <Achievements />
      </LazySectionWrapper>
      <LazySectionWrapper>
        <Contact />
      </LazySectionWrapper>
    </div>
  )
}

export default Home