
/*
  MOLÉCULA: TarjetaProfesional.jsx

  Recibe mediante props:
  imagen: fotografía del profesional.
  nombre: nombre del nutricionista.
  especialidad: área de atención.
  descripcion: información del profesional.
*/

function TarjetaProfesional({
  imagen,
  nombre,
  especialidad,
  descripcion
}) {
  return (
    // Tarjeta con el diseño original de NutriVida
    <article className="tarjeta-profesional">

      {/* Fotografía recibida mediante props */}
      <img src={imagen} alt={nombre} />

      {/* Información del profesional */}
      <div className="contenido-profesional">

        {/* Nombre */}
        <h3>{nombre}</h3>

        {/* Especialidad */}
        <h4>{especialidad}</h4>

        {/* Descripción */}
        <p>{descripcion}</p>

      </div>

    </article>
  )
}

// Permite importar la tarjeta desde otro componente
export default TarjetaProfesional
