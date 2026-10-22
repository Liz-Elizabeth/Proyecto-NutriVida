
/*
  ORGANISMO: DetalleServicio.jsx

  Muestra la información completa de un servicio.
  Recibe los datos mediante props.

  useState controla el botón "Ver más información".
*/

import { useState } from 'react'

function DetalleServicio({
  id,
  imagen,
  nombre,
  tipo,
  descripcion,
  incluye,
  profesionales,
  precio,
  informacionExtra,
  alterno = false
}) {

  // Recuerda si la información adicional está visible
  const [mostrarInfo, setMostrarInfo] = useState(false)

  return (
    <section
      className={
        alterno
          ? 'seccion detalle-servicio detalle-alterno'
          : 'seccion detalle-servicio'
      }
      id={id}
    >

      <div className="contenedor detalle-contenido">

        {/* Imagen original del servicio */}
        <div className="imagen-servicio">
          <img src={imagen} alt={nombre} />
        </div>

        {/* Información del servicio */}
        <div className="informacion-servicio">

          <p className="etiqueta">{tipo}</p>

          <h2>{nombre}</h2>

          <p>{descripcion}</p>

          <h3>¿Qué incluye?</h3>

          {/* Prestaciones incluidas */}
          <ul className="lista-detalle">
            {incluye.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Profesionales</h3>

          {/* Profesionales del servicio */}
          <div className="profesionales-detalle">

            {profesionales.map((profesional) => (
              <article
                className="profesional-detalle"
                key={profesional.nombre}
              >

                <img
                  src={profesional.imagen}
                  alt={profesional.nombre}
                />

                <div>
                  <h4>{profesional.nombre}</h4>

                  <p className="especialidad-profesional">
                    {profesional.especialidad}
                  </p>
                </div>

              </article>
            ))}

          </div>

          {/* Precio original */}
          <p className="precio-grande">
            {precio}
          </p>

          {/* Botón que cambia el estado */}
          <button
            type="button"
            className="btn-mas-info"
            onClick={() => setMostrarInfo(!mostrarInfo)}
          >
            Ver más información
          </button>

          {/* Mostramos el contenido cuando el estado es true */}
          {mostrarInfo && (
            <div
              className="informacion-extra"
              style={{ display: 'block' }}
            >
              <h3>Información adicional</h3>

              <p>{informacionExtra}</p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default DetalleServicio
