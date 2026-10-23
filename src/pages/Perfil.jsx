
/*
  PÁGINA: Perfil.jsx

  Permite al paciente:
  - Ver sus datos registrados
  - Editar su información
  - Guardar los cambios
  - Cancelar la edición
  - Cerrar sesión

  Los campos permanecen bloqueados
  hasta presionar "Editar datos".
*/

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  obtenerClienteActual,
  actualizarClienteActual,
  cerrarSesionCliente
} from '../datos/cuentas.js'

// Datos vacíos cuando no hay información disponible
const perfilVacio = {
  nombre: '',
  apellidos: '',
  correo: '',
  objetivo: ''
}

function Perfil() {

  const navigate = useNavigate()

  // Datos del paciente que inició sesión
  const [perfil, setPerfil] = useState(
    () => obtenerClienteActual()
  )

  // Copia de los datos que se pueden modificar
  const [borrador, setBorrador] = useState(
    () => obtenerClienteActual() || perfilVacio
  )

  // false: los campos están bloqueados
  // true: los campos están habilitados
  const [editando, setEditando] = useState(false)

  // Mensaje que verá el paciente
  const [mensaje, setMensaje] = useState('')

  // ==========================================
  // COMENZAR EDICIÓN
  // ==========================================

  function comenzarEdicion() {

    // Copiamos los datos guardados
    setBorrador({ ...perfil })

    // Habilitamos los campos
    setEditando(true)

    // Eliminamos mensajes anteriores
    setMensaje('')
  }

  // ==========================================
  // MODIFICAR LOS CAMPOS
  // ==========================================

  function cambiarCampo(evento) {

    const nombreCampo = evento.target.name
    const valor = evento.target.value

    setBorrador({
      ...borrador,
      [nombreCampo]: valor
    })
  }

  // ==========================================
  // GUARDAR CAMBIOS
  // ==========================================

  function guardarPerfil(evento) {

    // Evita recargar la página
    evento.preventDefault()

    // Solo permitimos guardar cuando
    // el modo de edición está activado
    if (!editando) {
      return
    }

    const datosActualizados = {
      nombre: borrador.nombre.trim(),
      apellidos: borrador.apellidos.trim(),
      correo: borrador.correo.trim().toLowerCase(),
      objetivo: borrador.objetivo
    }

    // Validamos que los campos no estén vacíos
    if (
      datosActualizados.nombre === '' ||
      datosActualizados.apellidos === '' ||
      datosActualizados.correo === ''
    ) {

      setMensaje(
        'Debes completar nombre, apellidos y correo.'
      )

      return
    }

    // Validamos los dominios permitidos
    const expresionCorreo =
      /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/

    if (!expresionCorreo.test(datosActualizados.correo)) {

      setMensaje(
        'El correo debe ser Gmail, Duoc o Profesor Duoc.'
      )

      return
    }

    // Guardamos los datos en la cuenta del paciente
    const resultado = actualizarClienteActual(
      datosActualizados
    )

    if (!resultado.correcto) {

      setMensaje(resultado.mensaje)

      return
    }

    // Actualizamos los datos mostrados
    setPerfil(datosActualizados)

    setBorrador(datosActualizados)

    // Bloqueamos los campos otra vez
    setEditando(false)

    // Este mensaje aparece SOLO al guardar
    setMensaje('Perfil actualizado correctamente.')
  }

  // ==========================================
  // CANCELAR EDICIÓN
  // ==========================================

  function cancelarEdicion() {

    // Recuperamos los datos originales
    setBorrador({ ...perfil })

    // Bloqueamos los campos
    setEditando(false)

    setMensaje('Edición cancelada.')
  }

  // ==========================================
  // CERRAR SESIÓN
  // ==========================================

  function salirDelPerfil() {

    cerrarSesionCliente()

    navigate('/login')
  }

  // ==========================================
  // SI NO EXISTE UNA SESIÓN DE PACIENTE
  // ==========================================

  if (perfil === null) {

    return (
      <main className="pagina-perfil">

        <section className="contenedor-perfil">

          <h1>Mi Perfil</h1>

          <p className="perfil-descripcion">
            Debes iniciar sesión para consultar
            tus datos personales.
          </p>

          <Link
            to="/login"
            className="boton-principal"
          >
            Iniciar sesión
          </Link>

        </section>

      </main>
    )
  }

  // ==========================================
  // PERFIL DEL PACIENTE
  // ==========================================

  return (
    <main className="pagina-perfil">

      <section className="contenedor-perfil">

        <h1>Mi Perfil</h1>

        <p className="perfil-descripcion">
          Consulta y actualiza tus datos personales
          de NutriVida.
        </p>

        {/* MENSAJES */}
        {mensaje !== '' && (

          <p
            className="perfil-mensaje"
            role="status"
          >
            {mensaje}
          </p>

        )}

        {/* FORMULARIO DE LOS DATOS */}
        <form onSubmit={guardarPerfil}>

          {/* NOMBRE */}
          <label htmlFor="perfilNombre">
            Nombre
          </label>

          <input
            type="text"
            id="perfilNombre"
            name="nombre"
            maxLength="50"
            value={borrador.nombre}
            onChange={cambiarCampo}
            disabled={!editando}
          />

          {/* APELLIDOS */}
          <label htmlFor="perfilApellidos">
            Apellidos
          </label>

          <input
            type="text"
            id="perfilApellidos"
            name="apellidos"
            maxLength="100"
            value={borrador.apellidos}
            onChange={cambiarCampo}
            disabled={!editando}
          />

          {/* CORREO ELECTRÓNICO */}
          <label htmlFor="perfilCorreo">
            Correo electrónico
          </label>

          <input
            type="email"
            id="perfilCorreo"
            name="correo"
            maxLength="100"
            value={borrador.correo}
            onChange={cambiarCampo}
            disabled={!editando}
          />

          {/* OBJETIVO NUTRICIONAL */}
          <label htmlFor="perfilObjetivo">
            Objetivo nutricional principal
          </label>

          <select
            id="perfilObjetivo"
            name="objetivo"
            value={borrador.objetivo}
            onChange={cambiarCampo}
            disabled={!editando}
          >

            <option value="">
              Selecciona tu objetivo
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

          {/* GUARDAR Y CANCELAR */}
          {/* Solo aparecen cuando estamos editando */}

          {editando && (

            <div className="perfil-botones">

              <button type="submit">
                Guardar cambios
              </button>

              <button
                type="button"
                className="perfil-cancelar"
                onClick={cancelarEdicion}
              >
                Cancelar
              </button>

            </div>

          )}

        </form>

        {/* EDITAR DATOS */}
        {/* Este botón está FUERA del formulario */}
        {/* para que nunca envíe el formulario. */}

        {!editando && (

          <div className="perfil-botones">

            <button
              type="button"
              onClick={comenzarEdicion}
            >
              Editar datos
            </button>

          </div>

        )}

        {/* CERRAR SESIÓN */}
        <div className="perfil-botones">

          <button
            type="button"
            className="perfil-cancelar"
            onClick={salirDelPerfil}
          >
            Cerrar sesión
          </button>

        </div>

      </section>

    </main>
  )
}

export default Perfil
