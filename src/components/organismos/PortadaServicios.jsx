
/*
  ORGANISMO: PortadaServicios.jsx

  Representa la portada de servicios.html.
  Conservamos los textos y las clases CSS
  del proyecto original.
*/

function PortadaServicios() {
  return (
    <section className="portada-interna">

      {/* Contenedor que conserva el ancho original */}
      <div className="contenedor">

        {/* Etiqueta superior de la portada */}
        <p className="etiqueta">
          ATENCIÓN NUTRICIONAL
        </p>

        {/* Título principal de la página Servicios */}
        <h1>
          Nuestros Servicios
        </h1>

        {/* Descripción original */}
        <p>
          Conoce nuestras alternativas de atención
          y encuentra la que mejor se adapte a
          tus necesidades.
        </p>

      </div>
    </section>
  )
}

// Permite utilizar este componente desde Servicios.jsx
export default PortadaServicios
