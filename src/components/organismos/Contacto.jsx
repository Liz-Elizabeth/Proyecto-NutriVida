
/*
  ORGANISMO: Contacto.jsx

  Representa la sección Contacto del HTML original.

  Reúne dos componentes:
  - InfoClinica: datos de la clínica.
  - FormularioContacto: formulario con useState.

  Conserva las clases CSS y el diseño original.
*/

// Importamos la información de la clínica
import InfoClinica from '../moleculas/InfoClinica.jsx'

// Importamos el formulario con sus validaciones
import FormularioContacto from '../moleculas/FormularioContacto.jsx'

// Creamos el organismo Contacto
function Contacto() {
  return (
    <section className="seccion contacto" id="contacto">

      {/* Contenedor principal */}
      <div className="contenedor contacto-contenido">

        {/* Encabezado original */}
        <div className="contacto-texto">

          <p className="etiqueta">
            CONTACTO
          </p>

          <h2>¿Tienes alguna consulta?</h2>

        </div>

        {/* Dos columnas originales del HTML */}
        <div className="contacto-columnas">

          {/* Columna izquierda */}
          <InfoClinica />

          {/* Columna derecha */}
          <FormularioContacto />

        </div>

      </div>
    </section>
  )
}

// Permite importar este organismo desde Inicio.jsx
export default Contacto
