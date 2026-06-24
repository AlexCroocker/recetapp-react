import './LiltroCategoria.css'

export function FiltroCategoria({ filtroCategoria, setFiltroCategoria, busqueda, setBusqueda }) {
  return (
    <div className="filtro-categoria">
      <div className="filtro-categoria__campo">
        <label htmlFor="categoria-select">Categoría</label>
        <select
          id="categoria-select"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="Todas">Todas</option>
          <option value="Entrada">Entrada</option>
          <option value="Fondo">Fondo</option>
          <option value="Postre">Postre</option>
        </select>
      </div>

      <div className="filtro-categoria__campo">
        <label htmlFor="busqueda-nombre">Buscar por nombre</label>
        <input
          id="busqueda-nombre"
          type="search"
          value={busqueda}
          placeholder="Buscar receta..."
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
    </div>
  )
}

export default FiltroCategoria
