
import BotonesHero from './BotonesHero.jsx'
// Molécula que contiene los textos originales
// de la portada de NutriVida
function TextoHero() {
  return (
    <div className="hero-texto">

      {/* Etiqueta pequeña de la portada */}
      <p className="etiqueta">
        CLÍNICA DE NUTRICIÓN
      </p>

      {/* Título principal de la página */}
      <h1>
        Asesoría nutricional personalizada
      </h1>

      {/* Descripción original de NutriVida */}
      <p className="hero-descripcion">
        En NutriVida te acompañamos a mejorar
        tu alimentación mediante una atención
        personalizada según tus necesidades
        y objetivos.
      </p>
      {/* Mostramos los dos botones de la portada */}
      <BotonesHero />


      
     {/* Beneficios destacados de NutriVida */}
        <div className="beneficios-hero">

            {/* Primer beneficio */}
            <div>
                <strong>Atención personalizada Presencial y Online</strong>
                <span>Te acompañamos desde donde estés</span>
            </div>

            {/* Segundo beneficio */}
            <div>
                <strong>Profesionales</strong>
                <span>Distintas especialidades</span>
            </div>

            {/* Tercer beneficio */}
            <div>
                <strong>Seguimiento</strong>
                <span>Acompañamiento continuo</span>
            </div>

        </div>


    </div>




  )
}

// Permite utilizar TextoHero desde Hero.jsx
export default TextoHero
