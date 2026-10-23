
/*
  ORGANISMO: GestionServicios.jsx

  Administración temporal de servicios de NutriVida.

  CRUD:
  C - Crear servicios
  R - Mostrar servicios
  U - Editar servicios
  D - Eliminar servicios

  Los servicios se guardan temporalmente con useState.
*/

// Importamos useState para guardar y actualizar datos
import { useState } from 'react'

function GestionServicios() {

  // Lista de servicios creados por el administrador
  const [servicios, setServicios] = useState([])

  // Datos para crear servicios
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')

  // ID del servicio que estamos editando
  const [idEditando, setIdEditando] = useState(null)

  // Datos que modificamos durante la edición
  const [nombreEditar, setNombreEditar] = useState('')
  const [precioEditar, setPrecioEditar] = useState('')

  // ==========================================
  // C - CREAR UN SERVICIO
  // ==========================================

  function agregarServicio(evento) {

    // Evita que se recargue la página
    evento.preventDefault()

    // Comprobamos que los datos sean válidos
    if (
      nombre.trim() === '' ||
      precio === '' ||
      !Number.isFinite(Number(precio)) ||
      Number(precio) <= 0
    ) {
      alert('DEBES INGRESAR UN NOMBRE Y UN PRECIO VÁLIDO')
      return
    }

    // Creamos un objeto con los datos del servicio
    // Creamos el servicio con una imagen por defecto
    const nuevoServicio = {
    id: Date.now(),
    nombre: nombre.trim(),
    precio: Number(precio),
    imagen: '/imagen-servicio.png'
    }
    // Agregamos el nuevo servicio a la lista
    setServicios([...servicios, nuevoServicio])

    // Limpiamos los campos del formulario
    setNombre('')
    setPrecio('')
  }

  // ==========================================
  // U - COMENZAR A EDITAR UN SERVICIO
  // ==========================================

  function editarServicio(servicio) {

    // Guardamos cuál servicio queremos editar
    setIdEditando(servicio.id)

    // Colocamos sus datos actuales en los campos
    setNombreEditar(servicio.nombre)
    setPrecioEditar(String(servicio.precio))
  }

  // ==========================================
  // U - GUARDAR LOS CAMBIOS DE LA EDICIÓN
  // ==========================================

  function guardarEdicion(evento) {

    // Evitamos que se recargue la página
    evento.preventDefault()

    // Validamos los datos modificados
    if (
      nombreEditar.trim() === '' ||
      precioEditar === '' ||
      !Number.isFinite(Number(precioEditar)) ||
      Number(precioEditar) <= 0
    ) {
      alert('DEBES INGRESAR UN NOMBRE Y UN PRECIO VÁLIDO')
      return
    }

    // Recorremos la lista y actualizamos
    // solamente el servicio seleccionado
    const serviciosActualizados = servicios.map((servicio) => {

      // Si encontramos el servicio que estamos editando
      if (servicio.id === idEditando) {

        // Devolvemos el servicio con los datos nuevos
        return {
          ...servicio,
          nombre: nombreEditar.trim(),
          precio: Number(precioEditar)
        }
      }

      // Los demás servicios quedan sin cambios
      return servicio
    })

    // Guardamos la lista actualizada
    setServicios(serviciosActualizados)

    // Cerramos el formulario de edición
    setIdEditando(null)
    setNombreEditar('')
    setPrecioEditar('')
  }

  // ==========================================
  // CANCELAR LA EDICIÓN
  // ==========================================

  function cancelarEdicion() {

    // Dejamos de editar el servicio
    setIdEditando(null)

    // Limpiamos los campos de edición
    setNombreEditar('')
    setPrecioEditar('')
  }

  // ==========================================
  // D - ELIMINAR UN SERVICIO
  // ==========================================

  function eliminarServicio(id) {

    // Conservamos los servicios con ID diferente
    const serviciosActualizados = servicios.filter(
      (servicio) => servicio.id !== id
    )

    // Actualizamos la lista
    setServicios(serviciosActualizados)

    // Si estábamos editando ese servicio,
    // también cerramos el formulario de edición
    if (idEditando === id) {
      cancelarEdicion()
    }
  }

  // ==========================================
  // R - MOSTRAR EL FORMULARIO Y LOS SERVICIOS
  // ==========================================

  return (
    <section>

      <h2>Gestión de servicios</h2>

      {/* FORMULARIO PARA CREAR SERVICIOS */}
      <form onSubmit={agregarServicio}>

        <label htmlFor="nombreServicio">
          Nombre del servicio
        </label>

        <input
          id="nombreServicio"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />

        <label htmlFor="precioServicio">
          Precio del servicio
        </label>

        <input
          id="precioServicio"
          type="number"
          min="1"
          value={precio}
          onChange={(evento) => setPrecio(evento.target.value)}
        />

        <button type="submit">
          Agregar servicio
        </button>

      </form>

      {/* LISTA DE SERVICIOS CREADOS */}
      <h3>Servicios agregados</h3>

      {servicios.length === 0 ? (

        <p>Todavía no hay servicios agregados.</p>

      ) : (

        <ul>

          {servicios.map((servicio) => (

            <li key={servicio.id}>
              {/* Imagen genérica del servicio */}
                <img
                    src={servicio.imagen}
                    alt={`Imagen de ${servicio.nombre}`}
                    width="100"
                />

                {/* Nombre y precio del servicio */}
                <p>
                    {servicio.nombre} - ${servicio.precio}
                </p>

             
              {/* Botón para modificar este servicio */}
              <button
                type="button"
                onClick={() => editarServicio(servicio)}
              >
                Editar
              </button>

              {/* Botón para eliminar este servicio */}
              <button
                type="button"
                onClick={() => eliminarServicio(servicio.id)}
              >
                Eliminar
              </button>

              {/* MOSTRAMOS LA EDICIÓN SOLO
                  PARA EL SERVICIO SELECCIONADO */}
              {idEditando === servicio.id && (

                <form onSubmit={guardarEdicion}>

                  <h4>Editar servicio</h4>

                  <label htmlFor="nombreEditar">
                    Nuevo nombre
                  </label>

                  <input
                    id="nombreEditar"
                    type="text"
                    value={nombreEditar}
                    onChange={(evento) =>
                      setNombreEditar(evento.target.value)
                    }
                  />

                  <label htmlFor="precioEditar">
                    Nuevo precio
                  </label>

                  <input
                    id="precioEditar"
                    type="number"
                    min="1"
                    value={precioEditar}
                    onChange={(evento) =>
                      setPrecioEditar(evento.target.value)
                    }
                  />

                  <button type="submit">
                    Guardar cambios
                  </button>

                  <button
                    type="button"
                    onClick={cancelarEdicion}
                  >
                    Cancelar
                  </button>

                </form>

              )}

            </li>

          ))}

        </ul>

      )}

    </section>
  )
}

export default GestionServicios
