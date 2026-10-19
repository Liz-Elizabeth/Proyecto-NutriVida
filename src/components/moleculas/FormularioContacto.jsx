
/*
  MOLÉCULA: FormularioContacto.jsx

  Formulario de contacto original de NutriVida
  migrado a React.

  Utiliza useState para manejar:
  - Nombre
  - Correo electrónico
  - Mensaje
  - Resultado de la validación

  No realiza envíos reales a un servidor.
*/

// Importamos useState desde React
import { useState } from 'react'

function FormularioContacto() {

  // ESTADO 1: Guarda el nombre
  const [nombre, setNombre] = useState('')

  // ESTADO 2: Guarda el correo
  const [correo, setCorreo] = useState('')

  // ESTADO 3: Guarda el mensaje
  const [mensaje, setMensaje] = useState('')

  // ESTADO 4: Guarda el resultado del formulario
  const [resultado, setResultado] = useState('')

  // Función que se ejecuta al enviar el formulario
  const manejarEnvio = (evento) => {

    // Evita que se recargue la página
    evento.preventDefault()

    // Eliminamos espacios al inicio y al final
    const nombreLimpio = nombre.trim()
    const correoLimpio = correo.trim()
    const mensajeLimpio = mensaje.trim()

    // Validamos que ningún campo esté vacío
    if (!nombreLimpio || !correoLimpio || !mensajeLimpio) {
      setResultado('Debes completar todos los campos.')
      return
    }

    // Verificamos un formato básico de correo
    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formatoCorreo.test(correoLimpio)) {
      setResultado('Ingresa un correo electrónico válido.')
      return
    }

    // Mensaje de confirmación de demostración
    setResultado('Formulario validado correctamente. Envío de prueba.')

    // Limpiamos los campos
    setNombre('')
    setCorreo('')
    setMensaje('')
  }

  return (
    <form
      id="formularioContacto"
      className="formulario"
      onSubmit={manejarEnvio}
      noValidate
    >

      {/* CAMPO 1: Nombre */}
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

      {/* CAMPO 2: Correo electrónico */}
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

      {/* CAMPO 3: Mensaje */}
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
      ></textarea>

      {/* BOTÓN ORIGINAL */}
      <button type="submit">
        Enviar mensaje
      </button>

      {/* Mostramos el resultado de la validación */}
      {resultado && (
        <p role="status" aria-live="polite">
          {resultado}
        </p>
      )}

    </form>
  )
}

export default FormularioContacto
