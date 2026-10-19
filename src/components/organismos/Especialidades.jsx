
/*
  ORGANISMO: Especialidades.jsx

  Representa la sección Nuestras Especialidades
  del HTML original de NutriVida.

  Utiliza componentes reutilizables con props.
*/

// Importamos la molécula que representa una tarjeta
import TarjetaEspecialidad from '../moleculas/TarjetaEspecialidad.jsx'

// Importamos nuestro átomo reutilizable Boton
import Boton from '../atomos/Boton.jsx'

// Organismo de Especialidades
function Especialidades() {
  return (
    <section className="seccion especialidades" id="especialidades">

      {/* Contenedor original de NutriVida */}
      <div className="contenedor">

        {/* Encabezado de la sección */}
        <div className="titulo-seccion">
          <p className="etiqueta">ÁREAS DE ATENCIÓN</p>

          <h2>Nuestras Especialidades</h2>

          <p>
            Diferentes áreas para distintas
            necesidades nutricionales.
          </p>
        </div>

        {/* Contenedor de las cuatro tarjetas */}
        <div className="lista-especialidades">

          {/* Especialidad 1 */}
          <TarjetaEspecialidad
            titulo="Control de Peso"
            descripcion="Planificación y seguimiento para mejorar hábitos y trabajar objetivos relacionados con el peso."
          />

          {/* Especialidad 2 */}
          <TarjetaEspecialidad
            titulo="Nutrición Metabólica"
            descripcion="Orientación alimentaria para personas que requieren apoyo relacionado con factores metabólicos."
          />

          {/* Especialidad 3 */}
          <TarjetaEspecialidad
            titulo="Nutrición Deportiva"
            descripcion="Alimentación adaptada a actividad física, rendimiento y recuperación."
          />

          {/* Especialidad 4 */}
          <TarjetaEspecialidad
            titulo="Nutrición Vegetariana y Vegana"
            descripcion="Orientación para organizar una alimentación equilibrada basada en plantas."
          />

        </div>

        {/* Botón original para conocer los servicios */}
        <div className="centrar">
          <Boton
            texto="Conocer servicios"
            enlace="/servicios"
            clase="boton-principal"
          />
        </div>

      </div>
    </section>
  )
}

// Permite importar Especialidades desde Inicio.jsx
export default Especialidades
