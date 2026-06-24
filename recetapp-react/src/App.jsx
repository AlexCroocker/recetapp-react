import { recetas } from './data/recetas'
import RecetaCard from './components/RecetaCard'
import { ListasRecetas } from './components/ListasRecetas'
import './App.css'

function App() {
  return (
    <main style={{ padding: '24px', display: 'grid', gap: '24px' }}>
      <header>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Recetas</h1>
        <p style={{ margin: '8px 0 0', color: '#475569' }}>
          Descubre recetas organizadas con categorías y un diseño fácil de leer.
        </p>
      </header>

      <ListasRecetas recetas={recetas} />
    </main>
  )
}

export default App