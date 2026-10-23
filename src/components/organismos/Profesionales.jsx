
/*
  ORGANISMO: Profesionales.jsx

  Muestra el equipo de NutriVida.
  Utiliza un arreglo y map() para generar
  las tarjetas mediante props.
*/

// Importamos la molécula reutilizable
import TarjetaProfesional from '../moleculas/TarjetaProfesional.jsx'

// Importamos las cuatro imágenes originales
import imagenCamila from '../../assets/img/nutricionista-camila-soto.png'
import imagenFelipe from '../../assets/img/nutricionista-felipe-herrera.png'
import imagenDaniela from '../../assets/img/nutricionista-daniela-rojas.png'
import imagenValentina from '../../assets/img/nutricionista-valentina-munoz.png'

// Arreglo que contiene los datos originales
const profesionales = [
  {
    id: 1,
    imagen: imagenCamila,
    nombre: 'Camila Soto',
    especialidad: 'Nutrición Clínica y Control de Peso',
    descripcion: 'Evaluación nutricional, hábitos y control de peso.'
  },
  {
    id: 2,
    imagen: imagenFelipe,
    nombre: 'Felipe Herrera',
    especialidad: 'Nutrición Metabólica',
    descripcion: 'Orientación nutricional asociada a salud clínica y metabólica.'
  },
  {
    id: 3,
    imagen: imagenDaniela,
    nombre: 'Daniela Rojas',
    especialidad: 'Nutrición Deportiva',
    descripcion: 'Alimentación para rendimiento, actividad física y recuperación.'
  },
  {
    id: 4,
    imagen: imagenValentina,
    nombre: 'Valentina Muñoz',
    especialidad: 'Nutrición Vegetariana y Vegana',
    descripcion: 'Orientación en alimentación vegetariana, vegana y plant-based.'
  }
]

// Organismo que reúne las tarjetas
function Profesionales() {
  return (
    <section className="seccion profesionales" id="profesionales">

      {/* Contenedor original de la sección */}
      <div className="contenedor">

        {/* Título y descripción originales */}
        <div className="titulo-seccion">
          <p className="etiqueta">EQUIPO NUTRIVIDA</p>
          <h2>Nuestros Profesionales</h2>
          <p>
            Conoce las principales áreas de
            nuestro equipo de nutricionistas.
          </p>
        </div>

        {/* Contenedor de las cuatro tarjetas */}
        <div className="lista-profesionales">

          {/* Recorremos el arreglo y generamos las tarjetas */}
          {profesionales.map((profesional) => (
            <TarjetaProfesional
              key={profesional.id}
              imagen={profesional.imagen}
              nombre={profesional.nombre}
              especialidad={profesional.especialidad}
              descripcion={profesional.descripcion}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

// Permite importar el organismo en Inicio.jsx
export default Profesionales
