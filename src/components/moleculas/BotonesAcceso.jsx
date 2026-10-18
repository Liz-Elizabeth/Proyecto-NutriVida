
import React from 'react'

// Molécula que agrupa los enlaces de acceso de NutriVida
function BotonesAcceso() {
  return (
    // Contenedor original para organizar los dos botones
    <div className="acceso">

      {/* Enlace a la futura página de inicio de sesión */}
      <a href="/login" className="boton-login">
        Iniciar sesión
      </a>

      {/* Enlace a la futura página de registro */}
      <a href="/registro" className="boton-registro">
        Registrarse
      </a>

    </div>
  )
}

// Permite utilizar este componente desde Header.jsx
export default BotonesAcceso
