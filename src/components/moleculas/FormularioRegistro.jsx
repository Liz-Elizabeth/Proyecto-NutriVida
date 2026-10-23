
/*
  MOLÉCULA: FormularioRegistro.jsx

  Formulario de registro de NutriVida.

  Conserva todos los campos originales:
  - RUN
  - Nombre
  - Apellidos
  - Correo
  - Fecha de nacimiento
  - Región y comuna
  - Objetivo nutricional
  - Dirección
  - Contraseña y confirmación

  Ahora también permite crear una cuenta
  de demostración y regresar al Login.
*/

// useState permite recordar lo que escribe el usuario
import { useState } from 'react'

// Link permite navegar entre páginas
// useNavigate permite cambiar de página desde una función
import { Link, useNavigate } from 'react-router-dom'

// Validaciones originales de NutriVida
import { validarRegistro } from '../../validaciones/validarRegistro.js'

// Regiones y comunas originales
import { regiones, comunas } from '../../datos/regionesComunas.js'

// Función para registrar una cuenta de demostración
import { registrarCuenta } from '../../datos/cuentas.js'

function FormularioRegistro() {

  // Permite navegar hacia la página Login
  const navigate = useNavigate()

  // Guardamos todos los campos en un estado de React
  const [datos, setDatos] = useState({
    runRegistro: '',
    nombreRegistro: '',
    apellidoRegistro: '',
    correoRegistro: '',
    fechaNacimiento: '',
    regionRegistro: '',
    comunaRegistro: '',
    objetivoRegistro: '',
    direccionRegistro: '',
    passwordRegistro: '',
    confirmarPassword: ''
  })

  // Evita registrar dos veces mientras se procesa
  const [registrando, setRegistrando] = useState(false)

  // ==========================================
  // FUNCIÓN PARA ACTUALIZAR LOS CAMPOS
  // ==========================================

  function cambiarCampo(evento) {

    // Identificamos qué campo cambió
    const id = evento.target.id

    // Obtenemos su nuevo valor
    const valor = evento.target.value

    // Si cambia la región, limpiamos la comuna
    if (id === 'regionRegistro') {

      setDatos({
        ...datos,
        regionRegistro: valor,
        comunaRegistro: ''
      })

      return
    }

    // Actualizamos solamente el campo correspondiente
    setDatos({
      ...datos,
      [id]: valor
    })
  }

  // ==========================================
  // COMUNAS DE LA REGIÓN SELECCIONADA
  // ==========================================

  const comunasDisponibles =
    datos.regionRegistro === ''
      ? []
      : comunas[Number(datos.regionRegistro)]

  // ==========================================
  // FUNCIÓN PARA REGISTRAR AL PACIENTE
  // ==========================================

  async function manejarRegistro(evento) {

    // Evitamos que se recargue la página
    evento.preventDefault()

    // Evitamos envíos repetidos
    if (registrando) {
      return
    }

    // Ejecutamos las validaciones originales
    const error = validarRegistro(datos)

    // Si existe un error, mostramos su mensaje
    if (error !== null) {

      alert(error.mensaje)

      // Colocamos el cursor en el campo incorrecto
      document.getElementById(error.campo)?.focus()

      return
    }

    // Indicamos que comienza el registro
    setRegistrando(true)

    try {

      // Intentamos crear la cuenta de demostración
      const resultado = await registrarCuenta(datos)

      // Por ejemplo, si el correo ya estaba registrado
      if (!resultado.correcto) {

        alert(resultado.mensaje)

        return
      }

      // Mensaje original del proyecto
      alert('REGISTRO VALIDADO CORRECTAMENTE')

      // Después del registro, abrimos el Login
      navigate('/login')

    } catch (error) {

      console.error('Error al registrar la cuenta:', error)

      alert(
        'NO FUE POSIBLE COMPLETAR EL REGISTRO. INTÉNTALO NUEVAMENTE.'
      )

    } finally {

      // Permitimos intentar registrarse nuevamente
      setRegistrando(false)
    }
  }

  // ==========================================
  // ESTRUCTURA VISUAL DEL FORMULARIO
  // ==========================================

  return (
    <div className="formulario-acceso">

      {/* TÍTULO ORIGINAL */}
      <h2>Registro de usuario</h2>

      <p>
        Completa tus datos para crear una cuenta.
      </p>

      <form
        id="formularioRegistro"
        onSubmit={manejarRegistro}
        noValidate
      >

        {/* RUN */}
        <label htmlFor="runRegistro">
          RUN
        </label>

        <input
          type="text"
          id="runRegistro"
          maxLength="9"
          placeholder="Ejemplo: 19011022K"
          value={datos.runRegistro}
          onChange={cambiarCampo}
        />

        <small>
          Ingresa tu RUN sin puntos ni guion.
        </small>

        {/* NOMBRE Y APELLIDOS */}
        <div className="fila-formulario">

          <div className="campo-formulario">

            <label htmlFor="nombreRegistro">
              Nombre
            </label>

            <input
              type="text"
              id="nombreRegistro"
              maxLength="50"
              placeholder="Ingresa tu nombre"
              value={datos.nombreRegistro}
              onChange={cambiarCampo}
            />

          </div>

          <div className="campo-formulario">

            <label htmlFor="apellidoRegistro">
              Apellidos
            </label>

            <input
              type="text"
              id="apellidoRegistro"
              maxLength="100"
              placeholder="Ingresa tus apellidos"
              value={datos.apellidoRegistro}
              onChange={cambiarCampo}
            />

          </div>

        </div>

        {/* CORREO ELECTRÓNICO */}
        <label htmlFor="correoRegistro">
          Correo electrónico
        </label>

        <input
          type="email"
          id="correoRegistro"
          maxLength="100"
          placeholder="ejemplo@gmail.com"
          value={datos.correoRegistro}
          onChange={cambiarCampo}
        />

        <small>
          Se permiten correos Gmail, Duoc
          y Profesor Duoc.
        </small>

        {/* FECHA DE NACIMIENTO - OPCIONAL */}
        <label htmlFor="fechaNacimiento">
          Fecha de nacimiento
        </label>

        <input
          type="date"
          id="fechaNacimiento"
          value={datos.fechaNacimiento}
          onChange={cambiarCampo}
        />

        <small>
          Este dato es opcional.
        </small>

        {/* REGIÓN Y COMUNA */}
        <div className="fila-formulario">

          <div className="campo-formulario">

            <label htmlFor="regionRegistro">
              Región
            </label>

            <select
              id="regionRegistro"
              value={datos.regionRegistro}
              onChange={cambiarCampo}
            >

              <option value="">
                Selecciona una región
              </option>

              {regiones.map((region, indice) => (

                <option
                  key={indice}
                  value={String(indice)}
                >
                  {region}
                </option>

              ))}

            </select>

          </div>

          <div className="campo-formulario">

            <label htmlFor="comunaRegistro">
              Comuna
            </label>

            <select
              id="comunaRegistro"
              value={datos.comunaRegistro}
              onChange={cambiarCampo}
            >

              <option value="">
                {datos.regionRegistro === ''
                  ? 'Primero selecciona una región'
                  : 'Selecciona una comuna'}
              </option>

              {comunasDisponibles.map((comuna) => (

                <option
                  key={comuna}
                  value={comuna}
                >
                  {comuna}
                </option>

              ))}

            </select>

          </div>

        </div>

        {/* OBJETIVO NUTRICIONAL PRINCIPAL */}
        <label htmlFor="objetivoRegistro">
          Objetivo Nutricional Principal
        </label>

        <select
          id="objetivoRegistro"
          value={datos.objetivoRegistro}
          onChange={cambiarCampo}
        >

          <option value="">
            Selecciona tu objetivo principal...
          </option>

          <option value="perdida-grasa">
            Pérdida de Grasa y Control de Peso
          </option>

          <option value="masa-muscular">
            Aumento de Masa Muscular
          </option>

          <option value="rendimiento-deportivo">
            Rendimiento Deportivo
          </option>

          <option value="salud-digestiva">
            Salud Digestiva y Gastrointestinal
          </option>

          <option value="nutricion-vegetariana">
            Nutrición Vegetariana o Vegana
          </option>

          <option value="reeducacion-alimentaria">
            Reeducación Alimentaria y Hábitos Saludables
          </option>

          <option value="control-patologias">
            Control de Patologías
          </option>

        </select>

        <small>
          Selecciona el objetivo que mejor represente
          lo que deseas trabajar con el nutricionista.
        </small>

        {/* DIRECCIÓN */}
        <label htmlFor="direccionRegistro">
          Dirección
        </label>

        <input
          type="text"
          id="direccionRegistro"
          maxLength="300"
          placeholder="Ingresa tu dirección"
          value={datos.direccionRegistro}
          onChange={cambiarCampo}
        />

        {/* CONTRASEÑA Y CONFIRMACIÓN */}
        <div className="fila-formulario">

          <div className="campo-formulario">

            <label htmlFor="passwordRegistro">
              Contraseña
            </label>

            <input
              type="password"
              id="passwordRegistro"
              maxLength="10"
              placeholder="Entre 4 y 10 caracteres"
              value={datos.passwordRegistro}
              onChange={cambiarCampo}
            />

          </div>

          <div className="campo-formulario">

            <label htmlFor="confirmarPassword">
              Confirmar contraseña
            </label>

            <input
              type="password"
              id="confirmarPassword"
              maxLength="10"
              placeholder="Repite tu contraseña"
              value={datos.confirmarPassword}
              onChange={cambiarCampo}
            />

          </div>

        </div>

        {/* BOTÓN PARA REGISTRAR LA CUENTA */}
        <button
          type="submit"
          disabled={registrando}
        >
          {registrando ? 'Registrando...' : 'Registrarse'}
        </button>

      </form>

      {/* ENLACES ORIGINALES */}
      <p>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login">
          Inicia sesión
        </Link>
      </p>

      <p>
        <Link to="/">
          Volver al inicio
        </Link>
      </p>

    </div>
  )
}

export default FormularioRegistro
