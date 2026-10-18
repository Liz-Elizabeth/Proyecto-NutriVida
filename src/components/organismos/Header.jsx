
import React from 'react'

// Importamos el átomo que muestra el logo de NutriVida
import Logo from '../atomos/Logo.jsx'

// Importamos la molécula del menú de navegación
import MenuNavegacion from '../moleculas/MenuNavegacion.jsx'

// Importamos la molécula de los botones de acceso
import BotonesAcceso from '../moleculas/BotonesAcceso.jsx'

// Organismo que reúne las partes del encabezado
function Header() {
  return (
    <header>

      {/* Este contenedor organiza los tres componentes */}
      <div className="contenedor encabezado">

        {/* Átomo: logo de NutriVida */}
        <a href="/" className="logo">
          <Logo />
        </a>

        {/* Molécula: menú de navegación */}
        <MenuNavegacion />

        {/* Molécula: botones de acceso */}
        <BotonesAcceso />

      </div>

    </header>
  )
}

// Permite utilizar Header desde App.jsx
export default Header



/*
  REFERENCIA PARA ESTUDIAR:

  El encabezado HTML original está guardado
  en Header-original.txt.

  Se conservó para comparar los cambios
  realizados durante la migración a React.
*/
/* LOGO DE NUTRIVIDA

  HTML ORIGINAL:
  <a href="index.html" class="logo">
    <img src="assets/img/logo-nutrivida.png">
  </a>

  CAMBIOS REALIZADOS:
  1. href="index.html" se cambió por href="/"
     porque "/" representa la página de Inicio.

  2. class se cambió por className
     porque estamos utilizando JSX.

  3. src se cambió por {logoNutri}
     porque importamos la imagen desde src/assets.

  El diseño original se mantiene. LUEGO SEPARE LOGO EN ATOMO NAVEGACION EN MOLECULA Y BOTONES DE ACCESO EN MOLECULA 
*/





