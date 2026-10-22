
/*
  PÁGINA: Administrador.jsx

  Página privada de NutriVida.

  Permite administrar los servicios de la clínica
  y cerrar la sesión del administrador.
*/

// Importamos useNavigate para cambiar de página
import { useNavigate } from 'react-router-dom'

// Importamos el organismo que contiene el CRUD
import GestionServicios from '../components/organismos/GestionServicios.jsx'

function Administrador() {

  // Obtenemos la función para navegar entre páginas
  const navigate = useNavigate()

  // ==========================================
  // FUNCIÓN PARA CERRAR SESIÓN
  // ==========================================

  function cerrarSesion() {

    // Eliminamos la sesión guardada en el navegador
    localStorage.removeItem('nutrividaSesion')

    // Regresamos al Login
    navigate('/login', { replace: true })
  }

  // ==========================================
  // ESTRUCTURA VISUAL DEL ADMINISTRADOR
  // ==========================================

  return (
    // Contenedor exclusivo del Panel de Administración
    <main className="panel-administrador">

      {/* Título principal */}
      <h1>Panel de Administración</h1>

      {/* Botón para cerrar sesión */}
      <button
        type="button"
        className="boton-cerrar-sesion"
        onClick={cerrarSesion}
      >
        Cerrar sesión
      </button>

      {/* Organismo que contiene el CRUD de servicios */}
      <GestionServicios />

    </main>
  )
}

// Permite importar esta página desde App.jsx
export default Administrador
