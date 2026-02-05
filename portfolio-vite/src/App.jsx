import React from 'react'
import Home from './Home'
import Nav from './Partials/Nav'
import NeuralMeshBackground from './components/NeuralMeshBackground'
import Loader from './components/Loader'
import RopeScroll from './components/RopeScroll'
import { useLenis } from './hooks/useLenis'

const App = () => {
  useLenis()

  return (
    <div>
      <Loader />
      {/* <NeuralMeshBackground /> */}
      <Nav />
      <RopeScroll />
      <Home />
    </div>
  )
}

export default App