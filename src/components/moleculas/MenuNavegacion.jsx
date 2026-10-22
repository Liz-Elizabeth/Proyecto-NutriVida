
/*
  MOLÉCULA: MenuNavegacion.jsx

  Menú principal de NutriVida.

  Conserva los enlaces originales
  y agrega Carrito y Mi Perfil.
*/

import React from 'react'

import { Link } from 'react-router-dom'

function MenuNavegacion() {

  return (
    <nav className="menu">

      {/* Enlaces originales */}
      <a href="/">Inicio</a>

      <a href="/servicios">Servicios</a>

      <a href="/#nosotros">Nosotros</a>

      <a href="/#especialidades">Especialidades</a>

      <a href="/#profesionales">Profesionales</a>

      <a href="/#contacto">Contacto</a>

      {/* Carrito de compras */}
      <Link
        to="/carrito"
        aria-label="Ver carrito de compras"
      >
        🛒 Carrito
      </Link>

      {/* Perfil del usuario */}
      <Link to="/perfil">
        Mi perfil
      </Link>

    </nav>
  )
}

export default MenuNavegacion
