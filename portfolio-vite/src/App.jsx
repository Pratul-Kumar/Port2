import React, { useState, useCallback } from 'react'
import Home from './Home'
import Nav from './Partials/Nav'
import Loader from './components/Loader'
import { useLenis } from './hooks/useLenis'
import ScrollToTop from './components/ScrollToTop'
import CommandHint from './components/CommandHint'
import CommandPalette from './components/CommandPalette'
import ScrollProgress from './components/ScrollProgress'

const App = () => {
  useLenis()
  const [loaded, setLoaded] = useState(false)
  const handleLoaderFinish = useCallback(() => setLoaded(true), [])

  return (
    <div>
      <ScrollProgress />
      <Loader onFinish={handleLoaderFinish} />
      {/* <NeuralMeshBackground /> */}
      <CommandPalette />
      <Home />
      <CommandHint />
      <ScrollToTop />
      {/* Nav only mounts after loader finishes */}
      {loaded && <Nav />}
    </div>
  )
}

export default App