import './App.css'
{/* 1. importacion de imagenes en variables*/ }
import logoImg from './assets/logo-nutrivida.png'
import imgHabitos from './assets/habitos-saludables.png'
import imgNutri from './assets/quienes-somos.png'


function App() {

  return (
    <>
      {/* 1. ENCABEZADO */}
      <header>
        <div className="contenedor encabezado">
          <div className="logo">
            <img src={logoImg} alt="NutriVida Logo" />
          </div>

          <nav className="menu">
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#especialidades">Especialidades</a>
            <a href="#equipo">Equipo</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="acceso">
            <a href="#login" className="boton-login">Iniciar Sesión</a>
            <a href="#registro" className="boton-registro">Registrarse</a>
          </div>
        </div>
      </header>

      <section className="hero">

        <div className="contenedor hero-contenido">

          <div className="hero-texto">

            <p className="etiqueta">
              CLÍNICA DE NUTRICIÓN
            </p>

            <h1>
              Asesoría nutricional personalizada
            </h1>

            <p className="hero-descripcion">

              En NutriVida te acompañamos a mejorar
              tu alimentación mediante una atención
              personalizada según tus necesidades
              y objetivos.

            </p>

            <div className="hero-botones">

              <a href="servicios.html" className="boton-principal">
                Ver servicios
              </a>

              <a href="#nosotros" className="boton-secundario">
                Conócenos
              </a>

            </div>

            <div className="beneficios-hero">
              <div>
                <strong>Atención personalizada Presencial y Online</strong>
                <span>Te acompañamos desde donde estés</span>
              </div>
              <div>
                <strong>Profesionales</strong>
                <span>Distintas especialidades</span>
              </div>
              <div>
                <strong>Seguimiento</strong>
                <span>Acompañamiento continuo</span>
              </div>
            </div>
          </div>
          <div className="hero-imagen">

            <img src={imgHabitos} alt="Hábitos de alimentación saludable" />

          </div>

        </div>

      </section>

      <section className="seccion nosotros" id="nosotros">
        <div className="contenedor">


          <div className="titulo-seccion">

            <p className="etiqueta">
              CONÓCENOS
            </p>

            <h2>
              Sobre Nosotros
            </h2>

          </div>

          <div className="nosotros-contenido">

            <div className="nosotros-imagen">

              <img src={imgNutri} alt="Clínica nutricional NutriVida" />

            </div>
            <div className="nosotros-texto">

              <h3>
                Nutrición adaptada a cada persona
              </h3>

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


              <div className="datos-nosotros">

                <div>
                  <strong>Desde 2016</strong>
                  <span>Experiencia</span>
                </div>

                <div>
                  <strong>4 profesionales</strong>
                  <span>Equipo especializado</span>
                </div>

                <div>
                  <strong>Seguimiento</strong>
                  <span>Atención continua</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section class="seccion valores">

        <div class="contenedor">


          <div class="titulo-seccion">

            <h2>
              Nuestro compromiso
            </h2>

            <p>
              Una atención basada en cercanía,
              profesionalismo y acompañamiento.
            </p>

          </div>


          <div class="tarjetas-valores">




            <article class="tarjeta-valor">

              <div class="icono-valor">✓</div>

              <h3>
                Nuestra Misión
              </h3>

              <p>

                Promover hábitos saludables mediante
                orientación nutricional personalizada
                y educación alimentaria.

              </p>

            </article>


            <article class="tarjeta-valor">

              <div class="icono-valor">★</div>

              <h3>
                Nuestra Visión
              </h3>

              <p>

                Ser reconocidos por la calidad de
                nuestra atención y el compromiso
                con cada paciente.

              </p>

            </article>


            <article class="tarjeta-valor">

              <div class="icono-valor">♡</div>

              <h3>
                Nuestros Valores
              </h3>

              <p>

                Empatía, respeto, responsabilidad,
                profesionalismo y confidencialidad.

              </p>

            </article>

          </div>

        </div>

      </section>

      <section class="seccion especialidades" id="especialidades">

        <div class="contenedor">


          <div class="titulo-seccion">

            <p class="etiqueta">
              ÁREAS DE ATENCIÓN
            </p>

            <h2>
              Nuestras Especialidades
            </h2>

            <p>
              Diferentes áreas para distintas
              necesidades nutricionales.
            </p>

          </div>


          <div class="lista-especialidades">


            <article class="tarjeta-especialidad">

              <h3>
                Control de Peso
              </h3>

              <p>
                Planificación y seguimiento para
                mejorar hábitos y trabajar objetivos
                relacionados con el peso.
              </p>

            </article>


            <article class="tarjeta-especialidad">

              <h3>
                Nutrición Metabólica
              </h3>

              <p>
                Orientación alimentaria para personas
                que requieren apoyo relacionado con
                factores metabólicos.
              </p>

            </article>


            <article class="tarjeta-especialidad">

              <h3>
                Nutrición Deportiva
              </h3>

              <p>
                Alimentación adaptada a actividad
                física, rendimiento y recuperación.
              </p>

            </article>


            <article class="tarjeta-especialidad">

              <h3>
                Nutrición Vegetariana y Vegana
              </h3>

              <p>
                Orientación para organizar una
                alimentación equilibrada basada
                en plantas.
              </p>

            </article>

          </div>


          <div class="centrar">

            <a href="servicios.html" class="boton-principal">
              Conocer servicios
            </a>

          </div>

        </div>

      </section>

      <section class="seccion acompanamiento">

        <div class="contenedor acompanamiento-contenido">


          <div class="acompanamiento-imagen">

            <img src="assets/img/acompanamiento-nutricional.png" alt="Consulta nutricional" />

          </div>


          <div class="acompanamiento-texto">

            <p class="etiqueta">
              ACOMPAÑAMIENTO
            </p>

            <h2>
              Un proceso personalizado
            </h2>

            <p>

              Durante la consulta se revisan hábitos,
              objetivos y antecedentes para entregar
              orientación adaptada a cada paciente.

            </p>

            <p>

              Los controles posteriores permiten
              observar avances y realizar ajustes
              cuando sea necesario.

            </p>

            <a href="servicios.html" class="boton-principal">
              Ver planes
            </a>

          </div>

        </div>

      </section>


      <section class="seccion profesionales" id="profesionales">

        <div class="contenedor">


          <div class="titulo-seccion">

            <p class="etiqueta">
              EQUIPO NUTRIVIDA
            </p>

            <h2>
              Nuestros Profesionales
            </h2>

            <p>
              Conoce las principales áreas de
              nuestro equipo de nutricionistas.
            </p>

          </div>


          <div class="lista-profesionales">




            <article class="tarjeta-profesional">

              <img src="assets/img/nutricionista-camila-soto.png" alt="Camila Soto" />

              <div class="contenido-profesional">

                <h3>
                  Camila Soto
                </h3>

                <h4>
                  Nutrición Clínica y Control de Peso
                </h4>

                <p>
                  Evaluación nutricional,
                  hábitos y control de peso.
                </p>

              </div>

            </article>




            <article class="tarjeta-profesional">

              <img src="assets/img/nutricionista-felipe-herrera.png" alt="Felipe Herrera" />

              <div class="contenido-profesional">

                <h3>
                  Felipe Herrera
                </h3>

                <h4>
                  Nutrición Metabólica
                </h4>

                <p>
                  Orientación nutricional asociada
                  a salud clínica y metabólica.
                </p>

              </div>

            </article>




            <article class="tarjeta-profesional">

              <img src="assets/img/nutricionista-daniela-rojas.png" alt="Daniela Rojas" />

              <div class="contenido-profesional">

                <h3>
                  Daniela Rojas
                </h3>

                <h4>
                  Nutrición Deportiva
                </h4>

                <p>
                  Alimentación para rendimiento,
                  actividad física y recuperación.
                </p>

              </div>

            </article>




            <article class="tarjeta-profesional">

              <img src="assets/img/nutricionista-valentina-munoz.png" alt="Valentina Muñoz" />

              <div class="contenido-profesional">

                <h3>
                  Valentina Muñoz
                </h3>

                <h4>
                  Nutrición Vegetariana y Vegana
                </h4>

                <p>
                  Orientación en alimentación
                  vegetariana, vegana y plant-based.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>

      <section class="seccion bienestar">

        <div class="contenedor bienestar-contenido">


          <div class="bienestar-texto">

            <p class="etiqueta">
              BIENESTAR
            </p>

            <h2>
              Hábitos para una vida más equilibrada
            </h2>

            <p>

              Alimentación, hidratación, actividad
              física y descanso forman parte de un
              estilo de vida saludable.

            </p>

            <p>

              Nuestro objetivo es orientar cambios
              realistas que puedan mantenerse en
              el tiempo.

            </p>

          </div>


          <div class="bienestar-imagen">

            <img src="assets/img/salud-y-bienestar.png" alt="Salud y Bienestar" />

          </div>

        </div>

      </section>

      <section class="seccion seccion-video">

        <div class="contenedor video-contenido">


          <div class="video-texto">

            <p class="etiqueta">
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
          <div class="video">

            <iframe src="https://www.youtube.com/embed/QLlFcN32WXg" title="Video sobre alimentación saludable"
              allowfullscreen>
            </iframe>

          </div>

        </div>

      </section>

      <section class="seccion contacto" id="contacto">

        <div class="contenedor contacto-contenido">


          <div class="contacto-texto">

            <p class="etiqueta">
              CONTACTO
            </p>

            <h2>
              ¿Tienes alguna consulta?
            </h2>

          </div>

          <div class="contacto-columnas">

            <div class="info-clinica">

              <h3>Información de la Clínica</h3>

              <p>Visítanos en nuestras instalaciones o contáctanos por nuestros canales oficiales de atención.
              </p>

              <div class="info-item">
                <span class="info-icono">📍</span>
                <div>
                  <strong>Dirección Clínica</strong>
                  <p>Av. Alemania 01234, Edificio Médico, Temuco, Chile</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icono">📞</span>
                <div>
                  <strong>Teléfono / WhatsApp</strong>
                  <p>+56 9 8765 4321</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icono">✉️</span>
                <div>
                  <strong>Correo Electrónico</strong>
                  <p>contacto@nutrivida.cl</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icono">🕐</span>
                <div>
                  <strong>Horarios de Atención</strong>
                  <p>Lunes a Viernes: 08:30 - 19:00 hrs</p>
                  <p>Sábados: 09:00 - 14:00 hrs</p>
                </div>
              </div>

            </div>
            <form id="formularioContacto" className="formulario">

              <label htmlFor="nombreContacto">
                Nombre
              </label>

              <input type="text" id="nombreContacto" placeholder="Ingresa tu nombre" />

              <label htmlFor="correoContacto">
                Correo electrónico
              </label>

              <input type="email" id="correoContacto" placeholder="Ingresa tu correo" />

              <label htmlFor="mensajeContacto">
                Mensaje
              </label>

              <textarea id="mensajeContacto" rows="5" placeholder="Escribe tu consulta"></textarea>

              <button type="submit">
                Enviar mensaje
              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  )
}

export default App
