
/*
  MOLÉCULA: FormularioContacto.jsx

  Formulario de contacto de NutriVida
  migrado a React.

  Permite:
  - Ingresar nombre
  - Ingresar correo electrónico
  - Escribir una consulta
  - Validar los datos
  - Mostrar mensajes de error o confirmación

  IMPORTANTE:
  No envía correos reales.
  Es una simulación académica.
*/

import { useState } from 'react'

function FormularioContacto() {

  // ESTADO 1: Nombre del usuario
  const [nombre, setNombre] = useState('')

  // ESTADO 2: Correo electrónico
  const [correo, setCorreo] = useState('')

  // ESTADO 3: Consulta o mensaje
  const [mensaje, setMensaje] = useState('')

  // ESTADO 4: Mensaje de validación
  const [resultado, setResultado] = useState('')

  // ==========================================
  // ENVIAR FORMULARIO
  // ==========================================

  function manejarEnvio(evento) {

    // Evitamos que se recargue la página
    evento.preventDefault()

    // Quitamos espacios innecesarios
    const nombreLimpio = nombre.trim()
    const correoLimpio = correo.trim()
    const mensajeLimpio = mensaje.trim()

    // ==========================================
    // VALIDACIÓN 1: CAMPOS OBLIGATORIOS
    // ==========================================

    if (
      nombreLimpio === '' ||
      correoLimpio === '' ||
      mensajeLimpio === ''
    ) {

      setResultado('Debes completar todos los campos.')

      return
    }

    // ==========================================
    // VALIDACIÓN 2: CORREO ELECTRÓNICO
    // ==========================================

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formatoCorreo.test(correoLimpio)) {

      setResultado('Ingresa un correo electrónico válido. @duoc.cl- @gmail.com')

      return
    }

    // ==========================================
    // CONFIRMACIÓN DE DEMOSTRACIÓN
    // ==========================================

    setResultado(
      'Datos validados correctamente. Este formulario es una demostración y no envía mensajes reales.'
    )

    // Limpiamos los campos después de validar
    setNombre('')
    setCorreo('')
    setMensaje('')
  }

  // ==========================================
  // INTERFAZ VISUAL ORIGINAL
  // ==========================================

  return (
    <form
      id="formularioContacto"
      className="formulario"
      onSubmit={manejarEnvio}
      noValidate
    >

      {/* CAMPO 1: NOMBRE */}
      <label htmlFor="nombreContacto">
        Nombre
      </label>

      <input
        type="text"
        id="nombreContacto"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(evento) => {
          setNombre(evento.target.value)
          setResultado('')
        }}
      />

      {/* CAMPO 2: CORREO ELECTRÓNICO */}
      <label htmlFor="correoContacto">
        Correo electrónico
      </label>

      <input
        type="email"
        id="correoContacto"
        placeholder="Ingresa tu correo"
        value={correo}
        onChange={(evento) => {
          setCorreo(evento.target.value)
          setResultado('')
        }}
      />

      {/* CAMPO 3: MENSAJE */}
      <label htmlFor="mensajeContacto">
        Mensaje
      </label>

      <textarea
        id="mensajeContacto"
        rows={5}
        placeholder="Escribe tu consulta"
        value={mensaje}
        onChange={(evento) => {
          setMensaje(evento.target.value)
          setResultado('')
        }}
      />

      {/* BOTÓN PARA VALIDAR EL FORMULARIO */}
      <button type="submit">
        Enviar mensaje
      </button>

      {/* RESULTADO DE LA VALIDACIÓN */}
      {resultado !== '' && (

        <p
          role="status"
          aria-live="polite"
        >
          {resultado}
        </p>

      )}

    </form>
  )
}

export default FormularioContacto
