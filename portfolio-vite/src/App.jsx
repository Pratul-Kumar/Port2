import React from 'react'
import Home from './Home'
import Nav from './Partials/Nav'
import NeuralMeshBackground from './components/bg'
import Loader from './components/Loader'
import RopeScroll from './components/RopeScroll'

const App = () => {
  return (
    <div>
      <Loader />
      <NeuralMeshBackground />
      <Nav />
      <RopeScroll />
      <Home />
    </div>
  )
}

export default App