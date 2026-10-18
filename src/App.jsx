
/* Importamos los estilos originales de NutriVida */
import './App.css'

/* Importamos el componente Header que creamos */
import Header from './components/organismos/Header.jsx'

// Componente principal de nuestra aplicación
function App() {

  return (
    <>
      {/* Mostramos el encabezado de NutriVida */}
      <Header />
    </>
  )

}

// Permitimos que main.jsx utilice App
export default App
