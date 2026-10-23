
/*
  ORGANISMO: OrientacionServicios.jsx

  Representa la sección "Ayuda para elegir"
  del archivo original servicios.html.

  Conservamos los textos, la imagen
  y las clases CSS del diseño original.
*/

// Importamos la imagen original de NutriVida
import imagenBienestar from '../../assets/img/salud-y-bienestar.png'

function OrientacionServicios() {
  return (
    <section className="seccion orientacion-servicios">

      {/* Contenedor de las dos columnas */}
      <div className="contenedor orientacion-contenido">

        {/* Columna izquierda: imagen original */}
        <div className="orientacion-imagen">
          <img
            src={imagenBienestar}
            alt="Salud y bienestar"
          />
        </div>

        {/* Columna derecha: información de orientación */}
        <div className="orientacion-texto">

          <p className="etiqueta">
            ¿NO SABES CUÁL ELEGIR?
          </p>

          <h2>
            Puedes comenzar con una consulta inicial
          </h2>

          <p>
            Si es tu primera atención, el nutricionista
            puede evaluar tus necesidades y orientarte
            hacia el servicio más adecuado.
          </p>

          {/* Enlace hacia Contacto en la página Inicio */}
          <a href="/#contacto" className="boton-principal">
            Contáctanos
          </a>

        </div>

      </div>
    </section>
  )
}

// Permite utilizar el organismo desde Servicios.jsx
export default OrientacionServicios
