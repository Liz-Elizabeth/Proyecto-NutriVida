
/*
  MOLÉCULA: PresentacionRegistro.jsx

  Contiene la parte izquierda de registro.html.
  Conserva el logo y los textos originales.
*/

// Importamos el logo original de NutriVida
import logoNutriVida from '../../assets/img/logo-nutrivida.png'

function PresentacionRegistro() {

  return (
    <div className="lado-acceso">

      {/* Logo de NutriVida */}
      <img
        src={logoNutriVida}
        alt="Logo Clínica NutriVida"
      />

      {/* Título original */}
      <h1>Crea tu cuenta</h1>

      {/* Mensaje original */}
      <p>
        Regístrate para acceder a los servicios
        de NutriVida.
      </p>

    </div>
  )
}

// Permite usar el componente desde Registro.jsx
export default PresentacionRegistro
