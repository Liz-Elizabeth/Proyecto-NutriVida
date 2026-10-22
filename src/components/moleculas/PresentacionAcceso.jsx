
/*
  MOLÉCULA: PresentacionAcceso.jsx

  Representa el lado izquierdo del login original.
  Conservamos sus textos, logo y clases CSS.
*/

// Importamos la imagen original del logo
import logoNutriVida from '../../assets/img/logo-nutrivida.png'

function PresentacionAcceso() {
  return (
    <div className="lado-acceso">

      {/* Logo original de NutriVida */}
      <img
        src={logoNutriVida}
        alt="Logo de la clínica NutriVida"
        className="logo-acceso"
      />

      {/* Mensaje de bienvenida */}
      <h2>
        Bienvenido a NutriVida
      </h2>

      {/* Descripción original */}
      <p>
        Accede a tu cuenta para continuar utilizando
        los servicios disponibles en nuestra plataforma.
      </p>

      {/* Mensaje secundario */}
      <p className="texto-acceso-secundario">
        Nutrición, acompañamiento y bienestar
        en un solo lugar.
      </p>

    </div>
  )
}

// Permite utilizarlo desde Login.jsx
export default PresentacionAcceso
