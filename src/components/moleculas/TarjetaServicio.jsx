
/*
  MOLÉCULA: TarjetaServicio.jsx

  Representa una tarjeta del catálogo original.
  Recibe los datos de cada servicio mediante props.

  Conservamos las clases CSS de servicios.html.

  Agregamos el botón para comprar servicios
  sin modificar el diseño original.
*/

// Importamos el botón de agregar al carrito
import BotonAgregarCarrito from '../atomos/BotonAgregarCarrito.jsx'

// Identificadores de los seis servicios originales
// Deben coincidir con los ID de Carrito.jsx
const identificadoresServicios = {
  'Plan Integral Mensual': 1,
  'Consulta Nutricional Inicial': 2,
  'Plan Control de Peso': 3,
  'Plan Nutrición Deportiva': 4,
  'Plan Vegetariano y Vegano': 5,
  'Pack de Seguimiento': 6
}

function TarjetaServicio({
  imagen,
  nombre,
  tipo,
  descripcion,
  incluye,
  tituloProfesionales,
  profesionales,
  etiquetaPrecio,
  precio,
  enlace
}) {

  // Buscamos el identificador correspondiente
  // al nombre del servicio recibido
  const idServicio = identificadoresServicios[nombre]

  return (
    <article className="tarjeta-servicio">

      {/* Imagen correspondiente al servicio */}
      <img src={imagen} alt={nombre} />

      <div className="contenido-servicio">

        {/* Categoría del servicio */}
        <p className="tipo-servicio">
          {tipo}
        </p>

        {/* Nombre del servicio */}
        <h2>{nombre}</h2>

        {/* Descripción del servicio */}
        <p>{descripcion}</p>

        {/* Lista de prestaciones incluidas */}
        <ul className="lista-incluye">

          {incluye.map((prestacion) => (
            <li key={prestacion}>
              {prestacion}
            </li>
          ))}

        </ul>

        {/* Título original: Profesionales o Especialista */}
        <h3 className="titulo-profesionales-servicio">
          {tituloProfesionales}
        </h3>

        {/* Profesionales asociados al servicio */}
        <div className="profesionales-servicio">

          {profesionales.map((profesional) => (
            <div
              className="profesional-mini"
              key={profesional.nombre}
            >

              <img
                src={profesional.imagen}
                alt={profesional.nombre}
              />

              <div>
                <strong>{profesional.nombre}</strong>
                <span>{profesional.especialidad}</span>
              </div>

            </div>
          ))}

        </div>

        {/* Precio original del servicio */}
        <div className="precio-servicio">
          <span>{etiquetaPrecio}</span>
          <strong>{precio}</strong>
        </div>

        {/* Enlace original a la página de detalle */}
        <a href={enlace} className="boton-detalle">
          Ver detalle
        </a>

        {/* NUEVO: botón para agregar al carrito */}
        {/* Solo aparece si reconocemos el servicio */}
        {idServicio !== undefined && (
          <BotonAgregarCarrito idServicio={idServicio} />
        )}

      </div>
    </article>
  )
}

export default TarjetaServicio
