
/*
  ORGANISMO: Bienestar.jsx

  Representa la sección Salud y Bienestar
  de la página original de NutriVida.

  Conserva los textos, estructura y clases CSS.
*/

// Importamos la imagen original desde assets
import imagenBienestar from '../../assets/img/salud-y-bienestar.png'

// Creamos el componente
function Bienestar() {
  return (
    <section className="seccion bienestar">

      {/* Contenedor principal de la sección */}
      <div className="contenedor bienestar-contenido">

        {/* Columna izquierda: información */}
        <div className="bienestar-texto">

          <p className="etiqueta">
            BIENESTAR
          </p>

          <h2>
            Hábitos para una vida más equilibrada
          </h2>

          <p>
            Alimentación, hidratación, actividad
            física y descanso forman parte de un
            estilo de vida saludable.
          </p>

          <p>
            Nuestro objetivo es orientar cambios
            realistas que puedan mantenerse en
            el tiempo.
          </p>

        </div>

        {/* Columna derecha: imagen original */}
        <div className="bienestar-imagen">
          <img
            src={imagenBienestar}
            alt="Salud y Bienestar"
          />
        </div>

      </div>
    </section>
  )
}

// Permite utilizar Bienestar desde Inicio.jsx
export default Bienestar
