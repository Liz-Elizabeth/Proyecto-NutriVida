
/*
  Importamos el átomo reutilizable Boton.

  ../ permite salir de la carpeta moleculas
  y entrar a la carpeta atomos.
*/
import Boton from '../atomos/Boton.jsx'

// Molécula que agrupa los botones de acceso
function BotonesAcceso() {
  return (
    <div className="acceso">

      {/* Botón para ingresar a NutriVida */}
      <Boton
        texto="Iniciar sesión"
        enlace="/login"
        clase="boton-login"
      />

      {/* Botón para registrar una cuenta */}
      <Boton
        texto="Registrarse"
        enlace="/registro"
        clase="boton-registro"
      />

    </div>
  )
}

// Exportamos la molécula para utilizarla en Header.jsx
export default BotonesAcceso
