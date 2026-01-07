import React from 'react'
import Home from './Home'
import Nav from './Partials/Nav'
import NeuralMeshBackground from './components/bg'
import Loader from './components/Loader'

const App = () => {
  return (
    <div>
      <Loader />
      <NeuralMeshBackground />
      <Nav />
      <Home />
    </div>
  )
}

export default App