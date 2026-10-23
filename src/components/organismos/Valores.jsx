
/*
  ORGANISMO: Valores.jsx

  Representa la sección Nuestro compromiso.
  Conserva los textos y clases del HTML original.
*/

function Valores() {
  return (
    <section className="seccion valores">

      {/* Contenedor principal */}
      <div className="contenedor">

        {/* Título original de la sección */}
        <div className="titulo-seccion">
          <h2>Nuestro compromiso</h2>

          <p>
            Una atención basada en cercanía,
            profesionalismo y acompañamiento.
          </p>
        </div>

        {/* Agrupamos las tres tarjetas originales */}
        <div className="tarjetas-valores">

          {/* Tarjeta de Misión */}
          <article className="tarjeta-valor">
            <div className="icono-valor">✓</div>

            <h3>Nuestra Misión</h3>

            <p>
              Promover hábitos saludables mediante
              orientación nutricional personalizada
              y educación alimentaria.
            </p>
          </article>

          {/* Tarjeta de Visión */}
          <article className="tarjeta-valor">
            <div className="icono-valor">★</div>

            <h3>Nuestra Visión</h3>

            <p>
              Ser reconocidos por la calidad de
              nuestra atención y el compromiso
              con cada paciente.
            </p>
          </article>

          {/* Tarjeta de Valores */}
          <article className="tarjeta-valor">
            <div className="icono-valor">♡</div>

            <h3>Nuestros Valores</h3>

            <p>
              Empatía, respeto, responsabilidad,
              profesionalismo y confidencialidad.
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}

// Permite importar Valores desde Inicio.jsx
export default Valores
