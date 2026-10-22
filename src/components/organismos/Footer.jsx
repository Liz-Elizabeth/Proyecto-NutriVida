
/*
  ORGANISMO: Footer.jsx

  Representa el pie de página original de NutriVida.

  Reutiliza el átomo Logo.jsx.
  Conserva las clases CSS, textos y columnas
  del HTML original.

  Más adelante adaptaremos los enlaces
  a React Router.
*/

// Importamos el átomo Logo reutilizable
import Logo from '../atomos/Logo.jsx'

// Creamos el organismo Footer
function Footer() {
  return (
    <footer>

      {/* Contenedor principal del pie de página */}
      <div className="contenedor footer-contenido">

        {/* Marca e información de la clínica */}
        <div className="footer-marca">

          {/* Reutilizamos el átomo Logo */}
          <Logo />

          <p>
            Orientación y acompañamiento nutricional.
          </p>

          <p>
            Temuco, Región de La Araucanía
          </p>

        </div>

        {/* Primera columna: NutriVida */}
        <div className="footer-columna">

          <h3>NutriVida</h3>

          <a href="/">Inicio</a>
          <a href="/#nosotros">Nosotros</a>
          <a href="/#profesionales">Profesionales</a>

        </div>

        {/* Segunda columna: Servicios */}
        <div className="footer-columna">

          <h3>Servicios</h3>

          <a href="/servicios">Planes</a>
          <a href="/servicios">Consulta</a>

        </div>

        {/* Tercera columna: Acceso */}
        <div className="footer-columna">

          <h3>Acceso</h3>

          <a href="/login">Iniciar sesión</a>
          <a href="/registro">Registrarse</a>
          <a href="/#contacto">Contacto</a>

        </div>

      </div>

      {/* Texto inferior original */}
      <div className="footer-final">

        <p>
          © 2026 NutriVida - Proyecto académico
        </p>

      </div>

    </footer>
  )
}

// Permite importar Footer desde App.jsx
export default Footer
