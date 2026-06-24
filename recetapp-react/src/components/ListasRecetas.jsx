import { RecetaCard } from "./RecetaCard";

export function ListasRecetas({ recetas }) {
  return (
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
          esVegetariana={receta.esVegetariana}
        />
      ))}
    </section>
  );
}

export default ListasRecetas