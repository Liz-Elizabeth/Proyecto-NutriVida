
/*
  Importamos el átomo Boton.

  ../ significa que salimos de la carpeta moleculas
  y entramos a la carpeta atomos.
*/
import Boton from '../atomos/Boton.jsx'

// Molécula que agrupa los botones de la portada
function BotonesHero() {
  return (
    <div className="hero-botones">

      {/* Primer botón: navegar a Servicios */}
      <Boton
        texto="Ver servicios"
        enlace="/servicios"
        clase="boton-principal"
      />

      {/* Segundo botón: navegar a Sobre Nosotros */}
      <Boton
        texto="Conócenos"
        enlace="/#nosotros"
        clase="boton-secundario"
      />

    </div>
  )
}

// Permite utilizar BotonesHero desde TextoHero.jsx
export default BotonesHero
