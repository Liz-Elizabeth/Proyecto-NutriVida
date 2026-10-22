
/*
  NUTRIVIDA - App.jsx

  Contiene todas las rutas del proyecto.

  Header y Footer se muestran en todas
  las páginas de NutriVida.
*/

// CSS principal
import './App.css'

// React Router
import { Routes, Route } from 'react-router-dom'

// Componentes compartidos
import Header from './components/organismos/Header.jsx'
import Footer from './components/organismos/Footer.jsx'

// Páginas
import Inicio from './pages/Inicio.jsx'
import Servicios from './pages/Servicios.jsx'
import Servicio from './pages/Servicio.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Administrador from './pages/Administrador.jsx'
import Carrito from './pages/Carrito.jsx'
import Perfil from './pages/Perfil.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

// Ruta protegida
import RutaProtegida from './RutaProtegida.jsx'

function App() {

  return (
    <>

      {/* Encabezado de NutriVida */}
      <Header />

      {/* Rutas de navegación */}
      <Routes>

        {/* Inicio */}
        <Route
          path="/"
          element={<Inicio />}
        />

        {/* Servicios */}
        <Route
          path="/servicios"
          element={<Servicios />}
        />

        {/* Detalle de servicios */}
        <Route
          path="/servicio"
          element={<Servicio />}
        />

        {/* Inicio de sesión */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Registro */}
        <Route
          path="/registro"
          element={<Registro />}
        />

        {/* Carrito */}
        <Route
          path="/carrito"
          element={<Carrito />}
        />

        {/* Mi Perfil */}
        <Route
          path="/perfil"
          element={<Perfil />}
        />

        {/* Administrador protegido */}
        <Route
          path="/administrador"
          element={
            <RutaProtegida>
              <Administrador />
            </RutaProtegida>
          }
        />

        {/* Página para rutas desconocidas */}
        <Route
          path="*"
          element={<NoEncontrada />}
        />

      </Routes>

      {/* Pie de página de NutriVida */}
      <Footer />

    </>
  )
}

export default App
