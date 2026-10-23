
/**
 * @vitest-environment jsdom
 *
 * NUTRIVIDA - PRUEBAS DE MI PERFIL
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
  vi,
  beforeEach,
  afterEach
} from 'vitest'

import {
  render,
  screen,
  fireEvent,
  cleanup
} from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

// Componente que vamos a probar
import Perfil from '../pages/Perfil.jsx'

// Funciones que usa el perfil
import {
  obtenerClienteActual,
  actualizarClienteActual,
  cerrarSesionCliente
} from '../datos/cuentas.js'

// Simulamos las funciones de cuentas
// para no modificar usuarios reales del navegador
vi.mock('../datos/cuentas.js', () => ({
  obtenerClienteActual: vi.fn(),
  actualizarClienteActual: vi.fn(),
  cerrarSesionCliente: vi.fn()
}))

// Paciente ficticio para las pruebas
const pacientePrueba = {
  nombre: 'Ana',
  apellidos: 'Perez',
  correo: 'ana@gmail.com',
  objetivo: 'perdida-grasa'
}

// Función que muestra Mi Perfil en la prueba
function mostrarPerfil() {

  render(
    <MemoryRouter>
      <Perfil />
    </MemoryRouter>
  )
}

// Preparamos los datos antes de cada prueba
beforeEach(() => {

  vi.clearAllMocks()

  obtenerClienteActual.mockReturnValue({
    ...pacientePrueba
  })

  actualizarClienteActual.mockReturnValue({
    correcto: true,
    mensaje: 'PERFIL ACTUALIZADO CORRECTAMENTE'
  })
})

// Limpiamos después de cada prueba
afterEach(() => {
  cleanup()
})

describe('Mi Perfil de NutriVida', () => {

  // ==========================================
  // PRUEBA 30
  // CAMPOS BLOQUEADOS INICIALMENTE
  // ==========================================

  it('Muestra los campos bloqueados al ingresar', () => {

    // ARRANGE
    mostrarPerfil()

    // ACT
    const campoNombre = screen.getByLabelText('Nombre')

    // ASSERT
    expect(campoNombre.disabled).toBe(true)

    expect(campoNombre.value).toBe('Ana')
  })

  // ==========================================
  // PRUEBA 31
  // EDITAR DATOS
  // ==========================================

  it('Habilita los campos al presionar Editar datos', () => {

    // ARRANGE
    mostrarPerfil()

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Editar datos'
      })
    )

    // ASSERT
    expect(
      screen.getByLabelText('Nombre').disabled
    ).toBe(false)

    expect(
      screen.getByRole('button', {
        name: 'Guardar cambios'
      })
    ).toBeTruthy()

    // Comprobamos que NO guarde automáticamente
    expect(
      actualizarClienteActual
    ).not.toHaveBeenCalled()
  })

  // ==========================================
  // PRUEBA 32
  // CANCELAR EDICIÓN
  // ==========================================

  it('Cancela la edición sin guardar cambios', () => {

    // ARRANGE
    mostrarPerfil()

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Editar datos'
      })
    )

    fireEvent.change(
      screen.getByLabelText('Nombre'),
      { target: { value: 'Maria' } }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Cancelar'
      })
    )

    // ASSERT
    expect(
      screen.getByLabelText('Nombre').value
    ).toBe('Ana')

    expect(
      screen.getByLabelText('Nombre').disabled
    ).toBe(true)

    expect(
      actualizarClienteActual
    ).not.toHaveBeenCalled()
  })

  // ==========================================
  // PRUEBA 33
  // GUARDAR CAMBIOS
  // ==========================================

  it('Guarda los cambios y bloquea los campos', () => {

    // ARRANGE
    mostrarPerfil()

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Editar datos'
      })
    )

    fireEvent.change(
      screen.getByLabelText('Nombre'),
      { target: { value: 'Maria' } }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Guardar cambios'
      })
    )

    // ASSERT
    expect(
      actualizarClienteActual
    ).toHaveBeenCalledWith({
      nombre: 'Maria',
      apellidos: 'Perez',
      correo: 'ana@gmail.com',
      objetivo: 'perdida-grasa'
    })

    expect(
      screen.getByLabelText('Nombre').value
    ).toBe('Maria')

    expect(
      screen.getByLabelText('Nombre').disabled
    ).toBe(true)

    expect(
      screen.getByRole('status').textContent
    ).toContain('Perfil actualizado correctamente.')
  })

  // ==========================================
  // PRUEBA 34
  // USUARIO SIN SESIÓN
  // ==========================================

  it('Solicita iniciar sesión si no hay paciente', () => {

    // ARRANGE
    obtenerClienteActual.mockReturnValue(null)

    // ACT
    mostrarPerfil()

    // ASSERT
    expect(
      screen.getByText(
        /Debes iniciar sesión para consultar/
      )
    ).toBeTruthy()

    expect(
      screen.getByRole('link', {
        name: 'Iniciar sesión'
      }).getAttribute('href')
    ).toBe('/login')
  })

  // ==========================================
  // PRUEBA 35
  // CERRAR SESIÓN
  // ==========================================

  it('Ejecuta el cierre de sesión del paciente', () => {

    // ARRANGE
    mostrarPerfil()

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Cerrar sesión'
      })
    )

    // ASSERT
    expect(
      cerrarSesionCliente
    ).toHaveBeenCalledTimes(1)
  })

})
