import React, { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import LazySectionWrapper from '../components/LazySectionWrapper'

// Lazy loaded components
const Skills = lazy(() => import('../components/Skills'))
const Projects = lazy(() => import('../components/Projects'))
const Highlights = lazy(() => import('../components/Highlights'))
const About = lazy(() => import('../components/About'))
const Contact = lazy(() => import('../components/Contact'))

const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div className="h-screen bg-[#E8E6D9]" />}>
        <LazySectionWrapper>
          <About />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <Skills />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <Projects />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <Highlights />
        </LazySectionWrapper>
        <LazySectionWrapper>
          <Contact />
        </LazySectionWrapper>
      </Suspense>
    </div>
  )
}

export default Home