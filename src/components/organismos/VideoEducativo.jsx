
/*
  ORGANISMO: VideoEducativo.jsx

  Representa la sección de Educación Nutricional.
  Mantiene el video y los textos del HTML original.
*/

function VideoEducativo() {
  return (
    <section className="seccion seccion-video">

      {/* Contenedor principal */}
      <div className="contenedor video-contenido">

        {/* Columna de información */}
        <div className="video-texto">

          <p className="etiqueta">
            EDUCACIÓN NUTRICIONAL
          </p>

          <h2>
            Aprende sobre alimentación saludable
          </h2>

          <p>
            Conocer los alimentos también ayuda a
            tomar mejores decisiones en la vida
            cotidiana.
          </p>

        </div>

        {/* Video original de YouTube */}
        <div className="video">

          <iframe
            src="https://www.youtube.com/embed/QLlFcN32WXg"
            title="Video sobre alimentación saludable"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  )
}

export default VideoEducativo
