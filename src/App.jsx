
/* Importamos los estilos originales de NutriVida */
import './App.css'

/* Importamos el componente Header que creamos */
import Header from './components/organismos/Header.jsx'

// Importamos la página Inicio
import Inicio from './pages/Inicio.jsx'

// Componente principal de nuestra aplicación
function App() {

  return (
    <>
      {/* Mostramos el encabezado de NutriVida */}
      <Header />

      <Inicio />
    </>
  )

}

// Permitimos que main.jsx utilice App
export default App
