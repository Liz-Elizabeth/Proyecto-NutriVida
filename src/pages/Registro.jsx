
/*
  PÁGINA: Registro.jsx

  Representa el registro.html original.

  Reúne la presentación y el formulario
  de registro de pacientes de NutriVida.
*/

// Parte izquierda: logo y bienvenida
import PresentacionRegistro from '../components/moleculas/PresentacionRegistro.jsx'

// Parte derecha: formulario y validaciones
import FormularioRegistro from '../components/moleculas/FormularioRegistro.jsx'

function Registro() {

  return (
    <main className="pagina-acceso">

      {/* Conservamos la tarjeta del diseño original */}
      <section className="tarjeta-acceso">

        {/* Lado izquierdo */}
        <PresentacionRegistro />

        {/* Lado derecho */}
        <FormularioRegistro />

      </section>

    </main>
  )
}

export default Registro
