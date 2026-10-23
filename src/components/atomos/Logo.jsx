
import React from 'react'

// Importamos la imagen original de NutriVida
import logoNutri from '../../assets/img/logo-nutrivida.png'

// Creamos el componente reutilizable Logo
function Logo() {
  return (
    // Mostramos la imagen de la clínica
    <img src={logoNutri} alt="Logo NutriVida" />
  )
}

// Permite utilizar Logo en otros componentes
export default Logo
