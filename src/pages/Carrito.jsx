
/*
  PÁGINA: Carrito.jsx

  Carrito de servicios de NutriVida.

  Permite:
  - Agregar servicios
  - Aumentar y disminuir cantidades
  - Eliminar servicios
  - Vaciar el carrito
  - Calcular el total
  - Conservar los datos con localStorage

  Utiliza React Bootstrap para organizar
  la página de forma responsive.
*/

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Componentes de React Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// Importamos solo la cuadrícula de Bootstrap.
// Así evitamos cambiar los botones y colores
// originales de otras páginas de NutriVida.
import 'bootstrap/dist/css/bootstrap-grid.min.css'



// Servicios y precios del proyecto original
const servicios = [
  {
    id: 1,
    nombre: 'Plan Integral Mensual',
    precio: 35000
  },
  {
    id: 2,
    nombre: 'Consulta Nutricional Inicial',
    precio: 20000
  },
  {
    id: 3,
    nombre: 'Plan Control de Peso',
    precio: 29000
  },
  {
    id: 4,
    nombre: 'Plan Nutrición Deportiva',
    precio: 32000
  },
  {
    id: 5,
    nombre: 'Plan Vegetariano y Vegano',
    precio: 30000
  },
  {
    id: 6,
    nombre: 'Pack de Seguimiento',
    precio: 24000
  }
]

// Muestra precios como pesos chilenos
function formatoPrecio(numero) {
  return '$' + numero.toLocaleString('es-CL')
}

function Carrito() {

  // Recuperamos el carrito guardado en el navegador
  const [carrito, setCarrito] = useState(() => {

    try {
      const guardado = localStorage.getItem('nutrividaCarrito')

      if (guardado) {
        const datos = JSON.parse(guardado)

        if (Array.isArray(datos)) {
          return datos
        }
      }

    } catch (error) {
      console.error('No se pudo recuperar el carrito:', error)
    }

    return []
  })

  // Guardamos los cambios del carrito
  useEffect(() => {

    localStorage.setItem(
      'nutrividaCarrito',
      JSON.stringify(carrito)
    )

  }, [carrito])

  // ==========================================
  // AGREGAR SERVICIO
  // ==========================================

  function agregarServicio(id) {

    // Buscamos si el servicio ya está en el carrito
    const existe = carrito.find(
      (item) => item.id === id
    )

    if (existe) {

      // Si existe, aumentamos la cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      )

    } else {

      // Si no existe, lo agregamos con cantidad 1
      setCarrito([
        ...carrito,
        {
          id: id,
          cantidad: 1
        }
      ])
    }
  }

  // ==========================================
  // DISMINUIR CANTIDAD
  // ==========================================

  function disminuirCantidad(id) {

    setCarrito(
      carrito.map((item) => {

        if (item.id === id && item.cantidad > 1) {
          return {
            ...item,
            cantidad: item.cantidad - 1
          }
        }

        return item
      })
    )
  }

  // ==========================================
  // ELIMINAR SERVICIO
  // ==========================================

  function eliminarServicio(id) {

    setCarrito(
      carrito.filter((item) => item.id !== id)
    )
  }

  // ==========================================
  // VACIAR CARRITO
  // ==========================================

  function vaciarCarrito() {
    setCarrito([])
  }

  // ==========================================
  // CALCULAR EL TOTAL
  // ==========================================

  const total = carrito.reduce((acumulado, item) => {

    const servicio = servicios.find(
      (servicio) => servicio.id === item.id
    )

    if (!servicio) {
      return acumulado
    }

    return acumulado + servicio.precio * item.cantidad

  }, 0)

  const cantidadTotal = carrito.reduce(
    (acumulado, item) => acumulado + item.cantidad,
    0
  )

  // ==========================================
  // CONTENIDO VISUAL
  // ==========================================

  return (
    <main className="pagina-carrito">

      <Container>

        <h1>Carrito de servicios</h1>

        <p className="carrito-introduccion">
          Selecciona los servicios nutricionales
          que deseas agregar a tu carrito.
        </p>

        <Row>

          {/* COLUMNA DE SERVICIOS */}
          <Col xs={12} lg={7}>

            <section className="carrito-seccion">

              <h2>Servicios disponibles</h2>

              <div className="carrito-servicios">

                {servicios.map((servicio) => (

                  <article
                    className="carrito-servicio"
                    key={servicio.id}
                  >

                    <div>
                      <h3>{servicio.nombre}</h3>

                      <p>
                        {formatoPrecio(servicio.precio)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => agregarServicio(servicio.id)}
                    >
                      Agregar
                    </button>

                  </article>

                ))}

              </div>

            </section>

          </Col>

          {/* COLUMNA DE RESUMEN */}
          <Col xs={12} lg={5}>

            <section className="carrito-seccion">

              <h2>Mi carrito</h2>

              {carrito.length === 0 ? (

                <p>
                  Tu carrito está vacío.
                </p>

              ) : (

                <>
                  {carrito.map((item) => {

                    const servicio = servicios.find(
                      (servicio) => servicio.id === item.id
                    )

                    if (!servicio) {
                      return null
                    }

                    return (
                      <article
                        className="carrito-producto"
                        key={item.id}
                      >

                        <h3>{servicio.nombre}</h3>

                        <p>
                          Precio unitario:
                          {' '}
                          {formatoPrecio(servicio.precio)}
                        </p>

                        <div className="carrito-cantidad">

                          <button
                            type="button"
                            onClick={() => disminuirCantidad(item.id)}
                            disabled={item.cantidad === 1}
                          >
                            -
                          </button>

                          <span>{item.cantidad}</span>

                          <button
                            type="button"
                            onClick={() => agregarServicio(item.id)}
                          >
                            +
                          </button>

                        </div>

                        <p>
                          Subtotal:
                          {' '}
                          {formatoPrecio(
                            servicio.precio * item.cantidad
                          )}
                        </p>

                        <button
                          type="button"
                          className="carrito-eliminar"
                          onClick={() => eliminarServicio(item.id)}
                        >
                          Eliminar
                        </button>

                      </article>
                    )
                  })}

                  <div className="carrito-total">

                    <p>
                      Servicios seleccionados: {cantidadTotal}
                    </p>

                    <h3>
                      Total: {formatoPrecio(total)}
                    </h3>

                    <button
                      type="button"
                      className="carrito-vaciar"
                      onClick={vaciarCarrito}
                    >
                      Vaciar carrito
                    </button>

                  </div>

                </>
              )}

              <Link
                to="/servicios"
                className="carrito-volver"
              >
                Volver a servicios
              </Link>

            </section>

          </Col>

        </Row>

      </Container>

    </main>
  )
}

export default Carrito
