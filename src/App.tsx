import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

const App: React.FC = (): JSX.Element => {
  return (
    <main data-testid="main-component" className="app transition-all-ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
