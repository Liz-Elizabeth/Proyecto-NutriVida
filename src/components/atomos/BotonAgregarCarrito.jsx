
/*
  ÁTOMO: BotonAgregarCarrito.jsx

  Permite agregar un servicio al carrito
  desde cualquier tarjeta de NutriVida.

  Guarda el servicio en localStorage
  y después abre la página Carrito.
*/

import { useNavigate } from 'react-router-dom'

function BotonAgregarCarrito({ idServicio }) {

  // Permite cambiar de página
  const navigate = useNavigate()

  // ==========================================
  // AGREGAR SERVICIO AL CARRITO
  // ==========================================

  function agregarAlCarrito() {

    // Buscamos si ya existe un carrito guardado
    const guardado = localStorage.getItem('nutrividaCarrito')

    // Comenzamos con un carrito vacío
    let carrito = []

    // Si había datos guardados, los recuperamos
    if (guardado) {

      try {
        const datos = JSON.parse(guardado)

        if (Array.isArray(datos)) {
          carrito = datos
        }

      } catch (error) {
        console.error('Error al recuperar el carrito:', error)
      }
    }

    // Buscamos si el servicio ya está agregado
    const existe = carrito.find(
      (item) => item.id === idServicio
    )

    if (existe) {

      // Si ya existe, aumentamos su cantidad
      carrito = carrito.map((item) => {

        if (item.id === idServicio) {
          return {
            ...item,
            cantidad: item.cantidad + 1
          }
        }

        return item
      })

    } else {

      // Si no existe, lo agregamos con cantidad 1
      carrito = [
        ...carrito,
        {
          id: idServicio,
          cantidad: 1
        }
      ]
    }

    // Guardamos el carrito actualizado
    localStorage.setItem(
      'nutrividaCarrito',
      JSON.stringify(carrito)
    )

    // Mostramos el carrito al paciente
    navigate('/carrito')
  }

  // ==========================================
  // BOTÓN VISUAL
  // ==========================================

  return (
    <button
      type="button"
      className="boton-agregar-carrito"
      onClick={agregarAlCarrito}
    >
      🛒 Agregar al carrito
    </button>
  )
}

export default BotonAgregarCarrito
