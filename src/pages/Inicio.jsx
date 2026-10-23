
/*
  PÁGINA: Inicio.jsx

  Reúne las secciones de la página principal
  de NutriVida, que antes estaban en index.html.
*/

// Importamos el organismo de la portada
import Hero from '../components/organismos/Hero.jsx'

// Importamos el organismo Sobre Nosotros
import SobreNosotros from '../components/organismos/SobreNosotros.jsx'
// Importamos el organismo de Misión, Visión y Valores
import Valores from '../components/organismos/Valores.jsx'
// Importamos el organismo de las especialidades
import Especialidades from '../components/organismos/Especialidades.jsx'
// Importamos el organismo Acompañamiento
import Acompanamiento from '../components/organismos/Acompanamiento.jsx'
// Importamos el organismo Nuestros Profesionales
import Profesionales from '../components/organismos/Profesionales.jsx'
// Importamos el organismo Salud y Bienestar
import Bienestar from '../components/organismos/Bienestar.jsx'
// Importamos el organismo de Educación Nutricional
import VideoEducativo from '../components/organismos/VideoEducativo.jsx'
// Importamos el organismo de Contacto
import Contacto from '../components/organismos/Contacto.jsx'



// Creamos la página Inicio
function Inicio() {
  return (
    <main>

      {/* Primera sección: portada */}
      <Hero />

      {/* Segunda sección: Sobre Nosotros */}
      <SobreNosotros />

      {/* Tercera sección: Misión, Visión y Valores */}
      <Valores />
      {/* Cuarta sección: Especialidades */}
      <Especialidades />

      {/* Quinta sección: Acompañamiento */}
      <Acompanamiento />

      {/* Sexta sección: Nuestros Profesionales */}
      <Profesionales />

      {/* Séptima sección: Salud y Bienestar */}
      <Bienestar />
      
      {/* Octava sección: Educación Nutricional */}
      <VideoEducativo />

      {/* Novena sección: Contacto */}
      <Contacto />


    </main>
  )
}

// Permite importar Inicio desde App.jsx
export default Inicio
