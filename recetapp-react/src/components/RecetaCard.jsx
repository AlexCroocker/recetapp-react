import "./RecetaCard.css";

const categoryClass = {
  Entrada: "categoria-entrada",
  Fondo: "categoria-fondo",
  Postre: "categoria-postre",
};

export function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  const badgeClass = categoryClass[categoria] ?? "categoria-entrada";
  const vegetarianClass = esVegetariana ? "receta-card--vegetariana" : "";

  return (
    <article className={`receta-card ${vegetarianClass}`}>
      <div className="receta-card__header">
        <div>
          <h2 className="receta-card__titulo">{nombre}</h2>
          <p className="receta-card__meta">
            {origen} · {porciones} porciones
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {esVegetariana && <span className="receta-card__veg-badge">VEG</span>}
          <span className={`receta-card__badge ${badgeClass}`}>{categoria}</span>
        </div>
      </div>

      <p className="receta-card__descripcion">{descripcion}</p>

      <section className="receta-card__seccion">
        <div>
          <p className="receta-card__label">Ingredientes</p>
          <ul className="receta-card__ingredientes">
            {ingredientes?.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

export default RecetaCard