
/*
  Importamos la molécula TextoHero.
  ../ significa que salimos de organismos
  y entramos a moleculas.
*/
import TextoHero from '../moleculas/TextoHero.jsx'

// Importamos la imagen original de NutriVida
import imagenHabitos from '../../assets/img/habitos-saludables.png'

// Organismo que representa la portada principal
function Hero() {
  return (
    <section className="hero">

      {/* Contenedor original de la portada */}
      <div className="contenedor hero-contenido">

        {/* Texto, botones y beneficios */}
        <TextoHero />

        {/* Imagen original de la portada */}
        <div className="hero-imagen">
          <img
            src={imagenHabitos}
            alt="Hábitos de alimentación saludable"
          />
        </div>

      </div>

    </section>
  )
}

// Permite importar Hero desde la página Inicio
export default Hero
