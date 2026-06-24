import { useState } from 'react'
import { recetas } from './data/recetas'
import { ListasRecetas } from './components/ListasRecetas'
import { FiltroCategoria } from './components/LiltroCategoria'
import './App.css'

function App() {
  const [filtroCategoria, setFiltroCategoria] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const recetasFiltradas = recetas.filter((receta) => {
    const categoriaValida = filtroCategoria === 'Todas' || receta.categoria === filtroCategoria
    const nombreValido = receta.nombre.toLowerCase().includes(busqueda.trim().toLowerCase())
    return categoriaValida && nombreValido
  })

  return (
    <main style={{ padding: '24px', display: 'grid', gap: '24px' }}>
      <header>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Recetas</h1>
        <p style={{ margin: '8px 0 0', color: '#475569' }}>
          Descubre recetas organizadas con categorías y un diseño fácil de leer.
        </p>
      </header>

      <FiltroCategoria
        filtroCategoria={filtroCategoria}
        setFiltroCategoria={setFiltroCategoria}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <div style={{ color: '#0f172a', fontWeight: 700 }}>
        Recetas vegetarianas: {recetasFiltradas.filter((receta) => receta.esVegetariana).length}
      </div>

      {recetasFiltradas.length > 0 ? (
        <ListasRecetas recetas={recetasFiltradas} />
      ) : (
        <p style={{ color: '#475569', fontSize: '1rem' }}>
          No hay recetas que coincidan.
        </p>
      )}
    </main>
  )
}

export default App