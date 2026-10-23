
/**
 * @vitest-environment jsdom
 *
 * NUTRIVIDA - PRUEBAS DE PÁGINA 404
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
  afterEach
} from 'vitest'

import {
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react'

import {
  MemoryRouter,
  Routes,
  Route
} from 'react-router-dom'

import NoEncontrada from '../pages/NoEncontrada.jsx'

// Mostramos la página en un router simulado
function mostrarPagina404() {
  render(
    <MemoryRouter>
      <NoEncontrada />
    </MemoryRouter>
  )
}

// Limpiamos después de cada prueba
afterEach(() => {
  cleanup()
})

describe('Página 404 de NutriVida', () => {

  // ========================================
  // PRUEBA 53: MOSTRAR EL NÚMERO 404
  // ========================================

  it('Muestra el número 404', () => {

    // ARRANGE
    mostrarPagina404()

    // ACT
    const titulo = screen.getByRole('heading', {
      level: 1
    })

    // ASSERT
    expect(titulo.textContent).toBe('404')
  })

  // ========================================
  // PRUEBA 54: MENSAJE DE ERROR
  // ========================================

  it('Muestra el mensaje Página no encontrada', () => {

    // ARRANGE
    mostrarPagina404()

    // ACT
    const mensaje = screen.getByRole('heading', {
      name: 'Página no encontrada'
    })

    // ASSERT
    expect(mensaje).toBeTruthy()

    expect(
      screen.getByText(/Lo sentimos, la página que buscas/)
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 55: ENLACE AL INICIO
  // ========================================

  it('Tiene un enlace para volver al inicio', () => {

    // ARRANGE
    mostrarPagina404()

    // ACT
    const enlace = screen.getByRole('link', {
      name: 'Volver al inicio'
    })

    // ASSERT
    expect(
      enlace.getAttribute('href')
    ).toBe('/')
  })

  // ========================================
  // PRUEBA 56: FUNCIONAMIENTO DEL ENLACE
  // ========================================

  it('Permite navegar a la ruta de inicio', () => {

    // ARRANGE
    // Creamos dos rutas de prueba:
    // una para el error y otra para el inicio.

    render(
      <MemoryRouter initialEntries={['/no-existe']}>
        <Routes>

          <Route
            path="/no-existe"
            element={<NoEncontrada />}
          />

          <Route
            path="/"
            element={<h1>Inicio de prueba</h1>}
          />

        </Routes>
      </MemoryRouter>
    )

    // ACT
    fireEvent.click(
      screen.getByRole('link', {
        name: 'Volver al inicio'
      })
    )

    // ASSERT
    expect(
      screen.getByRole('heading', {
        name: 'Inicio de prueba'
      })
    ).toBeTruthy()

    // La página 404 ya no debe aparecer
    expect(
      screen.queryByRole('heading', {
        name: 'Página no encontrada'
      })
    ).toBeNull()
  })

})
