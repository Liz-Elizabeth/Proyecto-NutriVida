
/*
  MOLÉCULA: TarjetaEspecialidad.jsx

  Componente reutilizable para mostrar
  las especialidades de NutriVida.

  Recibe dos props:
  titulo: nombre de la especialidad.
  descripcion: explicación de la especialidad.
*/

// Recibimos las props desde el componente padre
function TarjetaEspecialidad({ titulo, descripcion }) {
  return (

    // Conservamos el artículo y la clase CSS original
    <article className="tarjeta-especialidad">

      {/* Mostramos el título recibido */}
      <h3>{titulo}</h3>

      {/* Mostramos la descripción recibida */}
      <p>{descripcion}</p>

    </article>
  )
}

// Permite utilizar la tarjeta en otro componente
export default TarjetaEspecialidad
