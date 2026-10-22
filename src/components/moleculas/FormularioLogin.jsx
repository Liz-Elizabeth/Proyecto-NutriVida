
/*
  MOLÉCULA: FormularioLogin.jsx

  Representa el formulario del login.html original.

  Conserva las seis validaciones de validarLogin.js.

  Ahora permite:
  - Iniciar sesión como administrador
  - Iniciar sesión como paciente registrado
  - Redirigir al usuario a la página correspondiente
*/

import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { validarLogin } from '../../validaciones/validarLogin.js'

// Funciones de las cuentas de pacientes
import {
  iniciarSesionCliente,
  cerrarSesionCliente
} from '../../datos/cuentas.js'

function FormularioLogin() {

  // Permite cambiar de página
  const navigate = useNavigate()

  // Correo ingresado
  const [correo, setCorreo] = useState('')

  // Contraseña ingresada
  const [password, setPassword] = useState('')

  // Evita enviar el formulario varias veces
  const [ingresando, setIngresando] = useState(false)

  // ==========================================
  // ENVIAR FORMULARIO
  // ==========================================

  async function manejarEnvio(evento) {

    // Evitamos que el navegador recargue la página
    evento.preventDefault()

    if (ingresando) {
      return
    }

    // ==========================================
    // 1. VALIDACIONES ORIGINALES
    // ==========================================

    const error = validarLogin(correo, password)

    if (error !== null) {

      alert(error.mensaje)

      document.getElementById(error.campo)?.focus()

      return
    }

    // Normalizamos el correo
    const correoNormalizado = correo.trim().toLowerCase()

    // ==========================================
    // 2. ACCESO DEL ADMINISTRADOR
    // ==========================================

    if (
      correoNormalizado === 'admin@duoc.cl' &&
      password === '1234'
    ) {

      // Cerramos una posible sesión de paciente
      cerrarSesionCliente()

      // Mantenemos la sesión original del administrador
      localStorage.setItem(
        'nutrividaSesion',
        'activa'
      )

      alert('DATOS DE INICIO DE SESIÓN CORRECTOS')

      // El administrador entra a su panel
      navigate('/administrador')

      return
    }

    // ==========================================
    // 3. ACCESO DE PACIENTES REGISTRADOS
    // ==========================================

    setIngresando(true)

    try {

      // Revisamos si el correo y la contraseña
      // corresponden a una cuenta registrada.
      const accesoCorrecto = await iniciarSesionCliente(
        correoNormalizado,
        password
      )

      if (accesoCorrecto) {

        // No conservamos una sesión de administrador
        localStorage.removeItem('nutrividaSesion')

        alert('DATOS DE INICIO DE SESIÓN CORRECTOS')

        // El paciente entra a su perfil
        navigate('/perfil')

        return
      }

      // Credenciales incorrectas
      alert('CORREO O CONTRASEÑA INCORRECTOS')

    } catch (error) {

      console.error(
        'Error al iniciar sesión:',
        error
      )

      alert(
        'NO FUE POSIBLE INICIAR SESIÓN. INTÉNTALO NUEVAMENTE.'
      )

    } finally {

      setIngresando(false)
    }
  }

  // ==========================================
  // ESTRUCTURA VISUAL ORIGINAL
  // ==========================================

  return (
    <div className="formulario-acceso">

      <p className="etiqueta">
        ACCESO DE USUARIO
      </p>

      <h1>Iniciar Sesión</h1>

      <p className="descripcion-formulario">
        Ingresa tu correo electrónico y contraseña.
      </p>

      <form
        id="formularioLogin"
        className="formulario"
        onSubmit={manejarEnvio}
        noValidate
      >

        {/* CORREO */}
        <label htmlFor="correoLogin">
          Correo electrónico
        </label>

        <input
          type="email"
          id="correoLogin"
          placeholder="ejemplo@correo.cl"
          value={correo}
          onChange={(evento) => setCorreo(evento.target.value)}
        />

        {/* CONTRASEÑA */}
        <label htmlFor="passwordLogin">
          Contraseña
        </label>

        <input
          type="password"
          id="passwordLogin"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(evento) => setPassword(evento.target.value)}
        />

        {/* BOTÓN INICIAR SESIÓN */}
        <button
          type="submit"
          disabled={ingresando}
        >
          {ingresando
            ? 'Ingresando...'
            : 'Iniciar sesión'}
        </button>

      </form>

      {/* ENLACE A REGISTRO */}
      <p className="enlace-formulario">
        ¿Aún no tienes una cuenta?{' '}
        <Link to="/registro">
          Crear cuenta
        </Link>
      </p>

      {/* VOLVER AL INICIO */}
      <Link to="/" className="volver">
        Volver al inicio
      </Link>

    </div>
  )
}

export default FormularioLogin
