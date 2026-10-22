
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

// Valores que usaremos si no hay un paciente
const perfilVacio = {
  nombre: '',
  apellidos: '',
  correo: '',
  objetivo: ''
}

function Perfil() {

  const navigate = useNavigate()

  // Recuperamos al paciente que inició sesión
  const [perfil, setPerfil] = useState(
    () => obtenerClienteActual()
  )

  // Copia de los datos para poder editarlos
  const [borrador, setBorrador] = useState(
    () => obtenerClienteActual() || perfilVacio
  )

  // false = campos bloqueados
  // true = campos habilitados
  const [editando, setEditando] = useState(false)

  const [mensaje, setMensaje] = useState('')

  // ==========================================
  // EDITAR DATOS
  // ==========================================

  function comenzarEdicion() {

    setBorrador({ ...perfil })

    setEditando(true)

    setMensaje('')
  }

  // ==========================================
  // CAMBIAR UN CAMPO
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

    evento.preventDefault()

    const datosActualizados = {
      nombre: borrador.nombre.trim(),
      apellidos: borrador.apellidos.trim(),
      correo: borrador.correo.trim().toLowerCase(),
      objetivo: borrador.objetivo
    }

    // Campos obligatorios
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

    // Dominios permitidos en NutriVida
    const expresionCorreo =
      /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/

    if (!expresionCorreo.test(datosActualizados.correo)) {

      setMensaje(
        'El correo debe ser Gmail, Duoc o Profesor Duoc.'
      )

      return
    }

    // Actualizamos la cuenta guardada
    const resultado = actualizarClienteActual(
      datosActualizados
    )

    if (!resultado.correcto) {

      setMensaje(resultado.mensaje)

      return
    }

    // Actualizamos lo que muestra React
    setPerfil(datosActualizados)

    setBorrador(datosActualizados)

    // Volvemos a bloquear los campos
    setEditando(false)

    setMensaje('Perfil actualizado correctamente.')
  }

  // ==========================================
  // CANCELAR EDICIÓN
  // ==========================================

  function cancelarEdicion() {

    // Restauramos los datos anteriores
    setBorrador({ ...perfil })

    // Bloqueamos nuevamente los campos
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
  // SI NADIE HA INICIADO SESIÓN
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

          <Link to="/login" className="boton-principal">
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

        {/* MENSAJE */}
        {mensaje !== '' && (

          <p className="perfil-mensaje" role="status">
            {mensaje}
          </p>

        )}

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

          {/* CORREO */}
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

          {/* BOTONES */}
          <div className="perfil-botones">

            {editando ? (

              <>
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
              </>

            ) : (

              <button
                type="button"
                onClick={comenzarEdicion}
              >
                Editar datos
              </button>

            )}

          </div>

        </form>

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
