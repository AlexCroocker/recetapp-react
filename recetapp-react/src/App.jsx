import { recetas } from './data/recetas'
import { RecetaCard } from './components/RecetaCard'
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

      <section
        style={{
          display: 'grid',
          gap: '24px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        {recetas.map((receta) => (
          <RecetaCard
            key={receta.id}
            nombre={receta.nombre}
            origen={receta.origen}
            porciones={receta.porciones}
            categoria={receta.categoria}
            descripcion={receta.descripcion}
            ingredientes={receta.ingredientes}
          />
        ))}
      </section>
    </main>
  )
}

export default App