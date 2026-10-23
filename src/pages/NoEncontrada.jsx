
/*
  PÁGINA: NoEncontrada.jsx

  Muestra un mensaje cuando el usuario
  intenta entrar a una página que no existe.
*/

import { Link } from 'react-router-dom'

function NoEncontrada() {

  return (
    <main className="pagina-no-encontrada">

      <section className="contenido-no-encontrado">

        <h1>404</h1>

        <h2>Página no encontrada</h2>

        <p>
          Lo sentimos, la página que buscas
          no existe o ya no está disponible.
        </p>

        <Link
          to="/"
          className="boton-principal"
        >
          Volver al inicio
        </Link>

      </section>

    </main>
  )
}

export default NoEncontrada
