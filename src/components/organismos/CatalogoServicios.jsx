
/*
  ORGANISMO: CatalogoServicios.jsx

  Contiene los seis servicios originales de NutriVida.

  Utilizamos un arreglo de objetos para guardar
  los datos y .map() para mostrar las tarjetas.

  Reutilizamos la molécula TarjetaServicio.jsx.
*/

// Importamos la tarjeta reutilizable
import TarjetaServicio from '../moleculas/TarjetaServicio.jsx'

// Imágenes originales de los servicios
import imagenIntegral from '../../assets/img/plan-integral-mensual.jpg'
import imagenConsulta from '../../assets/img/consulta-nutricional.jpg'
import imagenPeso from '../../assets/img/habitos-saludables.png'
import imagenDeportiva from '../../assets/img/plan-nutricion-deportiva.png'
import imagenVegetariano from '../../assets/img/plan-vegetariano-vegano.png'
import imagenSeguimiento from '../../assets/img/pack-seguimiento.png'

// Fotografías originales de los profesionales
import imagenCamila from '../../assets/img/nutricionista-camila-soto.png'
import imagenFelipe from '../../assets/img/nutricionista-felipe-herrera.png'
import imagenDaniela from '../../assets/img/nutricionista-daniela-rojas.png'
import imagenValentina from '../../assets/img/nutricionista-valentina-munoz.png'

// Arreglo con los datos originales de los seis servicios
const servicios = [
  {
    id: 'plan-integral',
    imagen: imagenIntegral,
    nombre: 'Plan Integral Mensual',
    tipo: 'PLAN COMPLETO',
    descripcion: 'Evaluación, planificación alimentaria y seguimiento durante un mes.',
    incluye: [
      'Evaluación inicial',
      'Plan personalizado',
      'Seguimiento mensual'
    ],
    tituloProfesionales: 'Profesionales',
    profesionales: [
      {
        nombre: 'Camila Soto',
        especialidad: 'Nutrición clínica',
        imagen: imagenCamila
      },
      {
        nombre: 'Valentina Muñoz',
        especialidad: 'Nutrición plant-based',
        imagen: imagenValentina
      }
    ],
    etiquetaPrecio: 'Valor del plan',
    precio: '$35.000',
    enlace: '/servicio#plan-integral'
  },
  {
    id: 'consulta-inicial',
    imagen: imagenConsulta,
    nombre: 'Consulta Nutricional Inicial',
    tipo: 'PRIMERA ATENCIÓN',
    descripcion: 'Primera evaluación para conocer antecedentes, hábitos y objetivos.',
    incluye: [
      'Entrevista nutricional',
      'Revisión de hábitos',
      'Orientación inicial'
    ],
    tituloProfesionales: 'Profesionales',
    profesionales: [
      {
        nombre: 'Camila Soto',
        especialidad: 'Nutrición clínica',
        imagen: imagenCamila
      },
      {
        nombre: 'Felipe Herrera',
        especialidad: 'Nutrición metabólica',
        imagen: imagenFelipe
      }
    ],
    etiquetaPrecio: 'Valor de consulta',
    precio: '$20.000',
    enlace: '/servicio#consulta-inicial'
  },
  {
    id: 'control-peso',
    imagen: imagenPeso,
    nombre: 'Plan Control de Peso',
    tipo: 'CAMBIO DE HÁBITOS',
    descripcion: 'Orientación y seguimiento para trabajar objetivos relacionados con el peso.',
    incluye: [
      'Evaluación',
      'Plan personalizado',
      'Control de progreso'
    ],
    tituloProfesionales: 'Profesionales',
    profesionales: [
      {
        nombre: 'Camila Soto',
        especialidad: 'Control de peso',
        imagen: imagenCamila
      },
      {
        nombre: 'Felipe Herrera',
        especialidad: 'Nutrición metabólica',
        imagen: imagenFelipe
      }
    ],
    etiquetaPrecio: 'Valor del plan',
    precio: '$29.000',
    enlace: '/servicio#control-peso'
  },
  {
    id: 'nutricion-deportiva',
    imagen: imagenDeportiva,
    nombre: 'Plan Nutrición Deportiva',
    tipo: 'ACTIVIDAD FÍSICA',
    descripcion: 'Alimentación adaptada al entrenamiento, rendimiento y recuperación.',
    incluye: [
      'Evaluación deportiva',
      'Plan alimentario',
      'Seguimiento'
    ],
    tituloProfesionales: 'Especialista',
    profesionales: [
      {
        nombre: 'Daniela Rojas',
        especialidad: 'Nutrición deportiva',
        imagen: imagenDaniela
      }
    ],
    etiquetaPrecio: 'Valor del plan',
    precio: '$32.000',
    enlace: '/servicio#nutricion-deportiva'
  },
  {
    id: 'vegetariano-vegano',
    imagen: imagenVegetariano,
    nombre: 'Plan Vegetariano y Vegano',
    tipo: 'ALIMENTACIÓN PLANT-BASED',
    descripcion: 'Orientación especializada para alimentación vegetariana y vegana.',
    incluye: [
      'Evaluación alimentaria',
      'Plan personalizado',
      'Educación nutricional'
    ],
    tituloProfesionales: 'Especialista',
    profesionales: [
      {
        nombre: 'Valentina Muñoz',
        especialidad: 'Nutrición vegetariana y vegana',
        imagen: imagenValentina
      }
    ],
    etiquetaPrecio: 'Valor del plan',
    precio: '$30.000',
    enlace: '/servicio#vegetariano-vegano'
  },
  {
    id: 'seguimiento',
    imagen: imagenSeguimiento,
    nombre: 'Pack de Seguimiento',
    tipo: 'CONTINUIDAD',
    descripcion: 'Controles para pacientes que ya cuentan con una evaluación y planificación.',
    incluye: [
      'Control de progreso',
      'Revisión de objetivos',
      'Ajustes del plan'
    ],
    tituloProfesionales: 'Profesionales',
    profesionales: [
      {
        nombre: 'Camila Soto',
        especialidad: 'Nutrición clínica',
        imagen: imagenCamila
      },
      {
        nombre: 'Valentina Muñoz',
        especialidad: 'Nutrición plant-based',
        imagen: imagenValentina
      }
    ],
    etiquetaPrecio: 'Valor del pack',
    precio: '$24.000',
    enlace: '/servicio#seguimiento'
  }
]

// Organismo que reúne las tarjetas
function CatalogoServicios() {
  return (
    <section className="seccion catalogo-servicios">
      <div className="contenedor">
        <div className="lista-servicios">

          {/* Recorremos los seis servicios originales */}
          {servicios.map((servicio) => (
            <TarjetaServicio
              key={servicio.id}
              imagen={servicio.imagen}
              nombre={servicio.nombre}
              tipo={servicio.tipo}
              descripcion={servicio.descripcion}
              incluye={servicio.incluye}
              tituloProfesionales={servicio.tituloProfesionales}
              profesionales={servicio.profesionales}
              etiquetaPrecio={servicio.etiquetaPrecio}
              precio={servicio.precio}
              enlace={servicio.enlace}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default CatalogoServicios
