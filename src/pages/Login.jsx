
/*
  PÁGINA: Login.jsx

  Representa el login.html original.
  Reúne la presentación y el formulario.
*/

// Traemos el componente con el logo y la bienvenida
import PresentacionAcceso from '../components/moleculas/PresentacionAcceso.jsx'

// Traemos el componente que contiene el formulario
import FormularioLogin from '../components/moleculas/FormularioLogin.jsx'

// Creamos la página Login
function Login() {
  return (

    // Contenido principal del Login
    <main className="pagina-acceso">

      {/* Tarjeta que agrupa las dos columnas */}
      <section className="tarjeta-acceso">

        {/* Lado izquierdo: logo y bienvenida */}
        <PresentacionAcceso />

        {/* Lado derecho: formulario de acceso */}
        <FormularioLogin />

      </section>

    </main>
  )
}

// Permite usar esta página desde App.jsx
export default Login
