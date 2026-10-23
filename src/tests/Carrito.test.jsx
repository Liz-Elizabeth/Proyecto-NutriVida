
/**
 * @vitest-environment jsdom
 *
 * NUTRIVIDA - PRUEBAS DEL CARRITO
 *
 * Patrón AAA:
 * Arrange = Preparar
 * Act = Actuar
 * Assert = Comprobar
 */

import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach
} from 'vitest'

import {
  render,
  screen,
  fireEvent,
  within,
  cleanup
} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import Carrito from '../pages/Carrito.jsx'

// ==========================================
// MOSTRAR EL COMPONENTE CARRITO
// ==========================================

function mostrarCarrito() {

  render(
    <MemoryRouter>
      <Carrito />
    </MemoryRouter>
  )
}

// ==========================================
// BUSCAR EL BOTÓN AGREGAR DE UN SERVICIO
// ==========================================

function buscarBotonAgregar(nombreServicio) {

  // Buscamos la sección de servicios disponibles
  const titulo = screen.getByRole('heading', {
    name: 'Servicios disponibles'
  })

  const seccion = titulo.closest('section')

  // Buscamos el servicio por su nombre
  const nombre = within(seccion).getByRole('heading', {
    name: nombreServicio
  })

  const tarjeta = nombre.closest('article')

  // Devolvemos el botón Agregar de esa tarjeta
  return within(tarjeta).getByRole('button', {
    name: 'Agregar'
  })
}

// ==========================================
// BUSCAR UN SERVICIO DENTRO DEL CARRITO
// ==========================================

function buscarProductoEnCarrito(nombreServicio) {

  const titulo = screen.getByRole('heading', {
    name: 'Mi carrito'
  })

  const seccion = titulo.closest('section')

  const nombre = within(seccion).getByRole('heading', {
    name: nombreServicio
  })

  return nombre.closest('article')
}

// ==========================================
// PREPARAR CADA PRUEBA
// ==========================================

beforeEach(() => {

  // Cada prueba comienza con un carrito limpio
  localStorage.clear()
})

afterEach(() => {

  // Eliminamos los componentes de la prueba
  cleanup()
})

// ==========================================
// GRUPO DE PRUEBAS DEL CARRITO
// ==========================================

describe('Carrito de servicios NutriVida', () => {

  // ========================================
  // PRUEBA 36: CARRITO VACÍO
  // ========================================

  it('Muestra un mensaje cuando el carrito está vacío', () => {

    // ARRANGE
    mostrarCarrito()

    // ACT
    const mensaje = screen.getByText(
      'Tu carrito está vacío.'
    )

    // ASSERT
    expect(mensaje).toBeTruthy()
  })

  // ========================================
  // PRUEBA 37: AGREGAR UN SERVICIO
  // ========================================

  it('Agrega un servicio con cantidad 1', () => {

    // ARRANGE
    mostrarCarrito()

    // ACT
    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    // ASSERT
    expect(
      screen.getByText('Servicios seleccionados: 1')
    ).toBeTruthy()

    expect(
      screen.getByText('Total: $35.000')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 38: AUMENTAR CANTIDAD
  // ========================================

  it('Aumenta la cantidad y actualiza el total', () => {

    // ARRANGE
    mostrarCarrito()

    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: '+'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Servicios seleccionados: 2')
    ).toBeTruthy()

    expect(
      screen.getByText('Total: $70.000')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 39: DISMINUIR CANTIDAD
  // ========================================

  it('Disminuye la cantidad sin bajar de 1', () => {

    // ARRANGE
    mostrarCarrito()

    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: '+'
      })
    )

    // ACT
    const botonMenos = screen.getByRole('button', {
      name: '-'
    })

    fireEvent.click(botonMenos)

    // ASSERT
    expect(
      screen.getByText('Servicios seleccionados: 1')
    ).toBeTruthy()

    expect(
      screen.getByText('Total: $35.000')
    ).toBeTruthy()

    // El botón queda deshabilitado en cantidad 1
    expect(botonMenos.disabled).toBe(true)
  })

  // ========================================
  // PRUEBA 40: DOS SERVICIOS DIFERENTES
  // ========================================

  it('Calcula el total de dos servicios diferentes', () => {

    // ARRANGE
    mostrarCarrito()

    // ACT
    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    fireEvent.click(
      buscarBotonAgregar('Consulta Nutricional Inicial')
    )

    // ASSERT
    expect(
      screen.getByText('Servicios seleccionados: 2')
    ).toBeTruthy()

    // $35.000 + $20.000 = $55.000
    expect(
      screen.getByText('Total: $55.000')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 41: ELIMINAR UN SERVICIO
  // ========================================

  it('Elimina solamente el servicio seleccionado', () => {

    // ARRANGE
    mostrarCarrito()

    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    fireEvent.click(
      buscarBotonAgregar('Consulta Nutricional Inicial')
    )

    // ACT
    const producto = buscarProductoEnCarrito(
      'Plan Integral Mensual'
    )

    fireEvent.click(
      within(producto).getByRole('button', {
        name: 'Eliminar'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Servicios seleccionados: 1')
    ).toBeTruthy()

    expect(
      screen.getByText('Total: $20.000')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 42: VACIAR CARRITO
  // ========================================

  it('Vacía todos los servicios del carrito', () => {

    // ARRANGE
    mostrarCarrito()

    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Vaciar carrito'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Tu carrito está vacío.')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 43: RECUPERAR DATOS GUARDADOS
  // ========================================

  it('Recupera un carrito almacenado en localStorage', () => {

    // ARRANGE
    localStorage.setItem(
      'nutrividaCarrito',
      JSON.stringify([
        {
          id: 4,
          cantidad: 2
        }
      ])
    )

    // ACT
    mostrarCarrito()

    // ASSERT
    expect(
      buscarProductoEnCarrito('Plan Nutrición Deportiva')
    ).toBeTruthy()

    expect(
      screen.getByText('Servicios seleccionados: 2')
    ).toBeTruthy()

    // $32.000 por 2 = $64.000
    expect(
      screen.getByText('Total: $64.000')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 44: GUARDAR EN LOCALSTORAGE
  // ========================================

  it('Guarda el servicio agregado en localStorage', () => {

    // ARRANGE
    mostrarCarrito()

    // ACT
    fireEvent.click(
      buscarBotonAgregar('Plan Integral Mensual')
    )

    // Recuperamos lo que guardó el componente
    const guardado = JSON.parse(
      localStorage.getItem('nutrividaCarrito')
    )

    // ASSERT
    expect(guardado).toEqual([
      {
        id: 1,
        cantidad: 1
      }
    ])
  })

})
