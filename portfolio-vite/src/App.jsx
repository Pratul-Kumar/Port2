import React from 'react'
import Home from './Home'
import Nav from './Partials/Nav'
import Loader from './components/Loader'
import { useLenis } from './hooks/useLenis'
import ScrollToTop from './components/ScrollToTop'
import CommandHint from './components/CommandHint'
import CommandPalette from './components/CommandPalette'

const App = () => {
  useLenis()

  return (
    <div>
      <Loader />
      {/* <NeuralMeshBackground /> */}
      <Nav />
      <CommandPalette />
      <Home />
      <CommandHint />
      <ScrollToTop />
    </div>
  )
}

export default App