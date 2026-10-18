
import React from 'react'

// Molécula que contiene los enlaces del menú principal
function MenuNavegacion() {
  return (
    // nav identifica el menú de navegación
    <nav className="menu">

      {/* Ruta principal de NutriVida */}
      <a href="/">Inicio</a>

      {/* Ruta de los servicios nutricionales */}
      <a href="/servicios">Servicios</a>

      {/* Secciones ubicadas dentro de Inicio */}
      <a href="/#nosotros">Nosotros</a>
      <a href="/#especialidades">Especialidades</a>
      <a href="/#profesionales">Profesionales</a>
      <a href="/#contacto">Contacto</a>

    </nav>
  )
}

// Permite importar el menú desde Header.jsx
export default MenuNavegacion
