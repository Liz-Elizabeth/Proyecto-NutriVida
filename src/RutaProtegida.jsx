
/*
  RutaProtegida.jsx

  Comprueba si existe una sesión de administrador.
  Si no existe, envía al usuario al Login.
*/

// Importamos Navigate para redirigir a otra página
import { Navigate } from 'react-router-dom'

// Recibimos la página que queremos proteger
function RutaProtegida({ children }) {

  // Consultamos la sesión guardada en el navegador
  const sesion = localStorage.getItem('nutrividaSesion')

  // Si no hay una sesión activa, volvemos al Login
  if (sesion !== 'activa') {
    return <Navigate to="/login" replace />
  }

  // Si la sesión está activa, mostramos la página
  return children
}

export default RutaProtegida
