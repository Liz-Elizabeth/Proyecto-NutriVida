
/*
  ORGANISMO: SobreNosotros.jsx

  Representa la sección Sobre Nosotros
  del HTML original de NutriVida.
*/

import imagenNosotros from '../../assets/img/quienes-somos.png'

function SobreNosotros() {
  return (
    <section className="seccion nosotros" id="nosotros">

      {/* Contenedor original de la sección */}
      <div className="contenedor">

        {/* Título de la sección */}
        <div className="titulo-seccion">
          <p className="etiqueta">CONÓCENOS</p>
          <h2>Sobre Nosotros</h2>
        </div>

        {/* Contenido organizado en dos columnas */}
        <div className="nosotros-contenido">

          {/* Imagen original de la clínica */}
          <div className="nosotros-imagen">
            <img
              src={imagenNosotros}
              alt="Clínica nutricional NutriVida"
            />
          </div>

          {/* Información original de NutriVida */}
          <div className="nosotros-texto">
            <h3>Nutrición adaptada a cada persona</h3>

            <p>
              NutriVida es una clínica nutricional
              fundada en 2016 en Temuco, Región de
              La Araucanía.
            </p>

            <p>
              Contamos con cuatro nutricionistas que
              trabajan en control de peso, enfermedades
              metabólicas, nutrición deportiva y
              alimentación vegetariana y vegana.
            </p>

            <p>
              Nuestro objetivo es entregar orientación,
              educación alimentaria y seguimiento para
              acompañar al paciente durante su proceso.
            </p>

            
            {/* Datos destacados de la clínica */}
            <div className="datos-nosotros">

            {/* Primer dato: experiencia */}
            <div>
                <strong>Desde 2016</strong>
                <span>Experiencia</span>
            </div>

            {/* Segundo dato: equipo */}
            <div>
                <strong>4 profesionales</strong>
                <span>Equipo especializado</span>
            </div>

            {/* Tercer dato: seguimiento */}
            <div>
                <strong>Seguimiento</strong>
                <span>Atención continua</span>
            </div>

            </div>




          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreNosotros
