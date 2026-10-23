
/*
  PÁGINA: Servicio.jsx

  Representa servicio.html original.
  Contiene la portada y los detalles de los planes.

  Por ahora conectamos el Plan Integral Mensual.
*/

// Importamos el organismo reutilizable
import DetalleServicio from '../components/organismos/DetalleServicio.jsx'

// Imágenes originales del primer plan
import imagenIntegral from '../assets/img/plan-integral-mensual.jpg'
import imagenCamila from '../assets/img/nutricionista-camila-soto.png'
import imagenValentina from '../assets/img/nutricionista-valentina-munoz.png'
// Imagen original de Consulta Nutricional Inicial
import imagenConsulta from '../assets/img/consulta-nutricional.jpg'

// Fotografía de Felipe Herrera
import imagenFelipe from '../assets/img/nutricionista-felipe-herrera.png'

// Imagen original del Plan Control de Peso
import imagenPeso from '../assets/img/habitos-saludables.png'

// Imagen original del Plan Nutrición Deportiva
import imagenDeportiva from '../assets/img/plan-nutricion-deportiva.png'

// Fotografía original de Daniela Rojas
import imagenDaniela from '../assets/img/nutricionista-daniela-rojas.png'

// Imagen original del Plan Vegetariano y Vegano
import imagenVegetariano from '../assets/img/plan-vegetariano-vegano.png'

// Imagen original del Pack de Seguimiento
import imagenSeguimiento from '../assets/img/pack-seguimiento.png'
// useEffect permite ejecutar una acción cuando cambia la ruta
import { useEffect } from 'react'

// useLocation permite conocer la dirección actual
import { useLocation } from 'react-router-dom'






function Servicio() {
    // Obtenemos la dirección actual del navegador
  const location = useLocation()

  // Buscamos el servicio seleccionado cuando cambia el enlace
  useEffect(() => {

    // Si la dirección no contiene #, no desplazamos la página
    if (!location.hash) {
      return
    }

    // Quitamos el símbolo # para obtener el id
    const idServicio = location.hash.substring(1)

    // Buscamos la sección que tiene ese id
    const seccion = document.getElementById(idServicio)

    // Si encontramos la sección, nos desplazamos hasta ella
    if (seccion) {
      seccion.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

  }, [location.hash])


  return (
    <main>

      {/* Portada original de servicio.html */}
      <section className="portada-interna">
        <div className="contenedor">

          <p className="etiqueta">
            SERVICIOS NUTRICIONALES
          </p>

          <h1>
            Detalle de nuestros servicios
          </h1>

          <p>
            Conoce qué incluye cada alternativa y los
            profesionales que pueden acompañarte.
          </p>

          {/* Regresa al catálogo */}
          <a href="/servicios" className="boton-secundario">
            Volver a Servicios
          </a>

        </div>
      </section>

      {/* Primer servicio: Plan Integral Mensual */}
      <DetalleServicio

        id="plan-integral"

        imagen={imagenIntegral}

        nombre="Plan Integral Mensual"

        tipo="PLAN COMPLETO"

        descripcion="Servicio pensado para personas que desean comenzar un proceso nutricional con evaluación, planificación y seguimiento."

        incluye={[
          'Evaluación nutricional inicial.',
          'Plan alimentario personalizado.',
          'Definición de objetivos.',
          'Seguimiento durante el mes.',
          'Ajustes según evolución.'
        ]}

        profesionales={[
          {
            nombre: 'Camila Soto',
            especialidad: 'Nutrición Clínica y Control de Peso',
            imagen: imagenCamila
          },
          {
            nombre: 'Valentina Muñoz',
            especialidad: 'Nutrición Vegetariana y Vegana',
            imagen: imagenValentina
          }
        ]}

        precio="$35.000"

        informacionExtra="Este plan ofrece mayor acompañamiento que una consulta individual, ya que incluye seguimiento y ajustes durante el proceso."

      />

      {/* Aquí agregaremos los otros cinco servicios */}
      
{/* Segundo servicio: Consulta Nutricional Inicial */}
<DetalleServicio
  id="consulta-inicial"

  // Conservamos la clase alterna del HTML original
  alterno={true}

  imagen={imagenConsulta}

  nombre="Consulta Nutricional Inicial"

  tipo="PRIMERA ATENCIÓN"

  descripcion="Primera evaluación destinada a conocer hábitos, antecedentes y objetivos del paciente."

  incluye={[
    'Entrevista nutricional.',
    'Revisión de hábitos alimentarios.',
    'Registro de antecedentes.',
    'Definición de objetivos.',
    'Orientación inicial.'
  ]}

  profesionales={[
    {
      nombre: 'Camila Soto',
      especialidad: 'Nutrición Clínica',
      imagen: imagenCamila
    },
    {
      nombre: 'Felipe Herrera',
      especialidad: 'Nutrición Clínica y Metabólica',
      imagen: imagenFelipe
    }
  ]}

  precio="$20.000"

  informacionExtra="Esta consulta es ideal para comenzar. Después de la evaluación, el profesional puede orientar al paciente hacia un plan específico."
/>

{/* Tercer servicio: Plan Control de Peso */}
<DetalleServicio
  id="control-peso"

  imagen={imagenPeso}

  nombre="Plan Control de Peso"

  tipo="HÁBITOS Y OBJETIVOS"

  descripcion="Plan orientado a trabajar objetivos relacionados con el peso y mejorar hábitos alimentarios."

  incluye={[
    'Evaluación nutricional.',
    'Registro de mediciones.',
    'Plan alimentario personalizado.',
    'Definición de metas.',
    'Control de progreso.'
  ]}

  profesionales={[
    {
      nombre: 'Camila Soto',
      especialidad: 'Control de Peso',
      imagen: imagenCamila
    },
    {
      nombre: 'Felipe Herrera',
      especialidad: 'Nutrición Metabólica',
      imagen: imagenFelipe
    }
  ]}

  precio="$29.000"

  informacionExtra="El objetivo es realizar cambios progresivos en la alimentación y revisar la evolución del paciente durante los controles."
/>

{/* Cuarto servicio: Plan Nutrición Deportiva */}
<DetalleServicio
  id="nutricion-deportiva"

  alterno={true}

  imagen={imagenDeportiva}

  nombre="Plan Nutrición Deportiva"

  tipo="ACTIVIDAD FÍSICA"

  descripcion="Servicio especializado para personas que realizan actividad física y desean organizar su alimentación según sus entrenamientos."

  incluye={[
    'Evaluación nutricional.',
    'Revisión de actividad física.',
    'Planificación alimentaria.',
    'Orientación pre y post ejercicio.',
    'Seguimiento de objetivos.'
  ]}

  profesionales={[
    {
      nombre: 'Daniela Rojas',
      especialidad: 'Nutrición Deportiva',
      imagen: imagenDaniela
    }
  ]}

  precio="$32.000"

  informacionExtra="El plan considera el tipo de actividad, frecuencia de entrenamiento y objetivos de cada persona."
/>

{/* Quinto servicio: Plan Vegetariano y Vegano */}
<DetalleServicio
  id="vegetariano-vegano"

  imagen={imagenVegetariano}

  nombre="Plan Vegetariano y Vegano"

  tipo="ALIMENTACIÓN BASADA EN PLANTAS"

  descripcion="Orientación para personas que siguen o desean comenzar una alimentación vegetariana o vegana."

  incluye={[
    'Evaluación alimentaria.',
    'Revisión de hábitos.',
    'Planificación personalizada.',
    'Educación alimentaria.',
    'Seguimiento.'
  ]}

  profesionales={[
    {
      nombre: 'Valentina Muñoz',
      especialidad: 'Nutrición Vegetariana y Vegana',
      imagen: imagenValentina
    }
  ]}

  precio="$30.000"

  informacionExtra="La planificación considera las preferencias alimentarias y necesidades individuales de cada paciente."
/>

{/* Sexto servicio: Pack de Seguimiento */}
<DetalleServicio
  id="seguimiento"

  // La clase alterna se activa mediante esta prop
  alterno={true}

  imagen={imagenSeguimiento}

  nombre="Pack de Seguimiento"

  tipo="CONTINUIDAD"

  descripcion="Servicio para pacientes que ya realizaron una evaluación inicial y necesitan revisar su evolución."

  incluye={[
    'Control de progreso.',
    'Revisión de objetivos.',
    'Revisión de mediciones.',
    'Ajustes del plan.',
    'Nuevas recomendaciones.'
  ]}

  profesionales={[
    {
      nombre: 'Camila Soto',
      especialidad: 'Nutrición Clínica',
      imagen: imagenCamila
    },
    {
      nombre: 'Valentina Muñoz',
      especialidad: 'Nutrición Vegetariana y Vegana',
      imagen: imagenValentina
    }
  ]}

  precio="$24.000"

  informacionExtra="Este servicio cuesta menos porque está dirigido a pacientes que ya cuentan con una evaluación y un plan previo."
/>


    </main>
  )
}

export default Servicio
