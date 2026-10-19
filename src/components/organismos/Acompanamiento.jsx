
/*
  ORGANISMO: Acompanamiento.jsx

  Representa la sección Acompañamiento
  del HTML original de NutriVida.

  Reutiliza el átomo Boton mediante props.
*/

// Importamos la imagen original
import imagenAcompanamiento from '../../assets/img/acompanamiento-nutricional.png'

// Importamos el átomo reutilizable
import Boton from '../atomos/Boton.jsx'

// Creamos el organismo
function Acompanamiento() {
  return (
    <section className="seccion acompanamiento">

      {/* Contenedor original de las dos columnas */}
      <div className="contenedor acompanamiento-contenido">

        {/* Columna izquierda: imagen */}
        <div className="acompanamiento-imagen">
          <img
            src={imagenAcompanamiento}
            alt="Consulta nutricional"
          />
        </div>

        {/* Columna derecha: información */}
        <div className="acompanamiento-texto">

          <p className="etiqueta">
            ACOMPAÑAMIENTO
          </p>

          <h2>Un proceso personalizado</h2>

          <p>
            Durante la consulta se revisan hábitos,
            objetivos y antecedentes para entregar
            orientación adaptada a cada paciente.
          </p>

          <p>
            Los controles posteriores permiten
            observar avances y realizar ajustes
            cuando sea necesario.
          </p>

          {/* Reutilizamos el botón que recibe props */}
          <Boton
            texto="Ver planes"
            enlace="/servicios"
            clase="boton-principal"
          />

        </div>
      </div>
    </section>
  )
}

// Permite importar este organismo desde Inicio.jsx
export default Acompanamiento
