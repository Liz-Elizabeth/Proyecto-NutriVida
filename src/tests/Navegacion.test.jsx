
/**
 * @vitest-environment jsdom
 *
 * NUTRIVIDA - PRUEBAS DE NAVEGACIÓN
 *
 * Probamos las rutas configuradas
 * en App.jsx usando React Router.
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
  afterEach,
  vi
} from 'vitest'

import {
  render,
  screen,
  cleanup
} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import App from '../App.jsx'

// ==========================================
// COMPONENTES SIMULADOS
// ==========================================

// Simulamos el Header y Footer para
// centrarnos únicamente en la navegación.

vi.mock('../components/organismos/Header.jsx', () => ({
  default: () => <header>Header de prueba</header>
}))

vi.mock('../components/organismos/Footer.jsx', () => ({
  default: () => <footer>Footer de prueba</footer>
}))

// Simulamos las páginas.
// Así verificamos qué página elige App.jsx
// sin ejecutar los formularios de cada una.

vi.mock('../pages/Inicio.jsx', () => ({
  default: () => <h1>Página Inicio</h1>
}))

vi.mock('../pages/Servicios.jsx', () => ({
  default: () => <h1>Página Servicios</h1>
}))

vi.mock('../pages/Servicio.jsx', () => ({
  default: () => <h1>Página Detalle de Servicio</h1>
}))

vi.mock('../pages/Login.jsx', () => ({
  default: () => <h1>Página Login</h1>
}))

vi.mock('../pages/Registro.jsx', () => ({
  default: () => <h1>Página Registro</h1>
}))

vi.mock('../pages/Carrito.jsx', () => ({
  default: () => <h1>Página Carrito</h1>
}))

vi.mock('../pages/Perfil.jsx', () => ({
  default: () => <h1>Página Mi Perfil</h1>
}))

vi.mock('../pages/Administrador.jsx', () => ({
  default: () => <h1>Página Administrador</h1>
}))

vi.mock('../pages/NoEncontrada.jsx', () => ({
  default: () => <h1>Página 404</h1>
}))

// ==========================================
// FUNCIÓN PARA ABRIR UNA RUTA
// ==========================================

function abrirRuta(ruta) {

  render(
    <MemoryRouter initialEntries={[ruta]}>
      <App />
    </MemoryRouter>
  )
}

// ==========================================
// PREPARAR CADA PRUEBA
// ==========================================

beforeEach(() => {

  // Empezamos sin sesión iniciada
  localStorage.clear()

})

afterEach(() => {

  // Limpiamos los componentes renderizados
  cleanup()

})

// ==========================================
// PRUEBAS DE NAVEGACIÓN
// ==========================================

describe('Navegación de NutriVida', () => {

  // ========================================
  // PRUEBAS 57 A 63
  // SIETE RUTAS PÚBLICAS
  // ========================================

  it.each([
    ['/', 'Página Inicio'],
    ['/servicios', 'Página Servicios'],
    ['/servicio', 'Página Detalle de Servicio'],
    ['/login', 'Página Login'],
    ['/registro', 'Página Registro'],
    ['/carrito', 'Página Carrito'],
    ['/perfil', 'Página Mi Perfil']
  ])(
    'Muestra la página correcta en la ruta %s',
    (ruta, tituloEsperado) => {

      // ARRANGE Y ACT
      abrirRuta(ruta)

      // ASSERT
      expect(
        screen.getByRole('heading', {
          name: tituloEsperado
        })
      ).toBeTruthy()

    }
  )

  // ========================================
  // PRUEBA 64
  // RUTA INEXISTENTE
  // ========================================

  it('Muestra la página 404 en rutas desconocidas', () => {

    // ARRANGE Y ACT
    abrirRuta('/pagina-que-no-existe')

    // ASSERT
    expect(
      screen.getByRole('heading', {
        name: 'Página 404'
      })
    ).toBeTruthy()

  })

  // ========================================
  // PRUEBA 65
  // ADMINISTRADOR SIN SESIÓN
  // ========================================

  it('Protege el administrador cuando no hay sesión', () => {

    // ARRANGE
    localStorage.removeItem('nutrividaSesion')

    // ACT
    abrirRuta('/administrador')

    // ASSERT
    expect(
      screen.queryByRole('heading', {
        name: 'Página Administrador'
      })
    ).toBeNull()

  })

  // ========================================
  // PRUEBA 66
  // ADMINISTRADOR CON SESIÓN ACTIVA
  // ========================================

  it('Permite entrar al administrador con sesión activa', () => {

    // ARRANGE
    localStorage.setItem(
      'nutrividaSesion',
      'activa'
    )

    // ACT
    abrirRuta('/administrador')

    // ASSERT
    expect(
      screen.getByRole('heading', {
        name: 'Página Administrador'
      })
    ).toBeTruthy()

  })

  // ========================================
  // PRUEBA 67
  // HEADER Y FOOTER
  // ========================================

  it('Mantiene Header y Footer en una página', () => {

    // ARRANGE Y ACT
    abrirRuta('/servicios')

    // ASSERT
    expect(
      screen.getByText('Header de prueba')
    ).toBeTruthy()

    expect(
      screen.getByText('Footer de prueba')
    ).toBeTruthy()

    expect(
      screen.getByRole('heading', {
        name: 'Página Servicios'
      })
    ).toBeTruthy()

  })

})
