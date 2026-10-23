
/**
 * @vitest-environment jsdom
 *
 * NUTRIVIDA - PRUEBAS DEL ADMINISTRADOR
 *
 * Componente: GestionServicios.jsx
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
  cleanup,
  within
} from '@testing-library/react'

// Componente que vamos a probar
import GestionServicios from '../components/organismos/GestionServicios.jsx'

// ==========================================
// FUNCIÓN AUXILIAR: CREAR UN SERVICIO
// ==========================================

function crearServicio(nombre, precio) {

  // Escribimos el nombre
  fireEvent.change(
    screen.getByLabelText('Nombre del servicio'),
    {
      target: { value: nombre }
    }
  )

  // Escribimos el precio
  fireEvent.change(
    screen.getByLabelText('Precio del servicio'),
    {
      target: { value: String(precio) }
    }
  )

  // Presionamos Agregar servicio
  fireEvent.click(
    screen.getByRole('button', {
      name: 'Agregar servicio'
    })
  )
}

// ==========================================
// PREPARACIÓN DE CADA PRUEBA
// ==========================================

beforeEach(() => {

  // Evitamos que aparezcan alertas durante el test
  vi.spyOn(window, 'alert').mockImplementation(() => {})

})

afterEach(() => {

  // Quitamos los componentes después de cada test
  cleanup()

  // Restauramos las funciones originales
  vi.restoreAllMocks()

})

// ==========================================
// GRUPO DE PRUEBAS DEL ADMINISTRADOR
// ==========================================

describe('CRUD de servicios NutriVida', () => {

  // ========================================
  // PRUEBA 45: LISTA VACÍA
  // ========================================

  it('Muestra mensaje cuando no hay servicios', () => {

    // ARRANGE
    render(<GestionServicios />)

    // ACT
    const mensaje = screen.getByText(
      'Todavía no hay servicios agregados.'
    )

    // ASSERT
    expect(mensaje).toBeTruthy()
  })

  // ========================================
  // PRUEBA 46: NOMBRE VACÍO
  // ========================================

  it('Rechaza un servicio sin nombre', () => {

    // ARRANGE
    render(<GestionServicios />)

    // ACT
    crearServicio('', 20000)

    // ASSERT
    expect(window.alert).toHaveBeenCalledWith(
      'DEBES INGRESAR UN NOMBRE Y UN PRECIO VÁLIDO'
    )

    expect(
      screen.getByText('Todavía no hay servicios agregados.')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 47: PRECIO INVÁLIDO
  // ========================================

  it('Rechaza servicios con precio igual a cero', () => {

    // ARRANGE
    render(<GestionServicios />)

    fireEvent.change(
      screen.getByLabelText('Nombre del servicio'),
      {
        target: { value: 'Consulta de prueba' }
      }
    )

    fireEvent.change(
      screen.getByLabelText('Precio del servicio'),
      {
        target: { value: '0' }
      }
    )

    // ACT
    // Enviamos el formulario directamente
    // para comprobar la validación JavaScript.
    const formulario = screen.getByRole('button', {
      name: 'Agregar servicio'
    }).closest('form')

    fireEvent.submit(formulario)

    // ASSERT
    expect(window.alert).toHaveBeenCalledWith(
      'DEBES INGRESAR UN NOMBRE Y UN PRECIO VÁLIDO'
    )

    expect(
      screen.getByText('Todavía no hay servicios agregados.')
    ).toBeTruthy()
  })

  // ========================================
  // PRUEBA 48: CREAR SERVICIO
  // ========================================

  it('Agrega correctamente un servicio nuevo', () => {

    // ARRANGE
    render(<GestionServicios />)

    // ACT
    crearServicio('Consulta inicial', 20000)

    // ASSERT
    expect(
      screen.getByText('Consulta inicial - $20000')
    ).toBeTruthy()

    // Comprobamos que muestra la imagen
    const imagen = screen.getByRole('img', {
      name: 'Imagen de Consulta inicial'
    })

    expect(
      imagen.getAttribute('src')
    ).toBe('/imagen-servicio.png')

    // Comprobamos que los campos quedaron vacíos
    expect(
      screen.getByLabelText('Nombre del servicio').value
    ).toBe('')

    expect(
      screen.getByLabelText('Precio del servicio').value
    ).toBe('')
  })

  // ========================================
  // PRUEBA 49: EDITAR SERVICIO
  // ========================================

  it('Permite editar nombre y precio del servicio', () => {

    // ARRANGE
    render(<GestionServicios />)

    crearServicio('Consulta inicial', 20000)

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Editar'
      })
    )

    fireEvent.change(
      screen.getByLabelText('Nuevo nombre'),
      {
        target: { value: 'Consulta personalizada' }
      }
    )

    fireEvent.change(
      screen.getByLabelText('Nuevo precio'),
      {
        target: { value: '25000' }
      }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Guardar cambios'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Consulta personalizada - $25000')
    ).toBeTruthy()

    expect(
      screen.queryByText('Consulta inicial - $20000')
    ).toBeNull()

    // Ya no debe aparecer el formulario de edición
    expect(
      screen.queryByRole('button', {
        name: 'Guardar cambios'
      })
    ).toBeNull()
  })

  // ========================================
  // PRUEBA 50: CANCELAR EDICIÓN
  // ========================================

  it('Cancela la edición sin guardar modificaciones', () => {

    // ARRANGE
    render(<GestionServicios />)

    crearServicio('Consulta inicial', 20000)

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Editar'
      })
    )

    fireEvent.change(
      screen.getByLabelText('Nuevo nombre'),
      {
        target: { value: 'Nombre cambiado' }
      }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Cancelar'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Consulta inicial - $20000')
    ).toBeTruthy()

    expect(
      screen.queryByText('Nombre cambiado - $20000')
    ).toBeNull()

    expect(
      screen.queryByRole('button', {
        name: 'Guardar cambios'
      })
    ).toBeNull()
  })

  // ========================================
  // PRUEBA 51: ELIMINAR SERVICIO
  // ========================================

  it('Elimina un servicio de la lista', () => {

    // ARRANGE
    render(<GestionServicios />)

    crearServicio('Consulta inicial', 20000)

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Eliminar'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Todavía no hay servicios agregados.')
    ).toBeTruthy()

    expect(
      screen.queryByText('Consulta inicial - $20000')
    ).toBeNull()
  })

  // ========================================
  // PRUEBA 52: EDITAR SOLO UN SERVICIO
  // ========================================

  it('Edita un servicio sin modificar otro', () => {

    // ARRANGE
    render(<GestionServicios />)

    // Evitamos que Date.now() genere el mismo ID
    // para dos servicios creados muy rápidamente.
    vi.spyOn(Date, 'now')
      .mockReturnValueOnce(1001)
      .mockReturnValueOnce(1002)

    crearServicio('Consulta inicial', 20000)

    crearServicio('Plan deportivo', 32000)

    // ACT
    // Buscamos la fila de la Consulta inicial
    const textoConsulta = screen.getByText(
      'Consulta inicial - $20000'
    )

    const filaConsulta = textoConsulta.closest('li')

    fireEvent.click(
      within(filaConsulta).getByRole('button', {
        name: 'Editar'
      })
    )

    fireEvent.change(
      screen.getByLabelText('Nuevo nombre'),
      {
        target: { value: 'Consulta mejorada' }
      }
    )

    fireEvent.change(
      screen.getByLabelText('Nuevo precio'),
      {
        target: { value: '24000' }
      }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Guardar cambios'
      })
    )

    // ASSERT
    expect(
      screen.getByText('Consulta mejorada - $24000')
    ).toBeTruthy()

    // El segundo servicio conserva sus datos
    expect(
      screen.getByText('Plan deportivo - $32000')
    ).toBeTruthy()
  })

})
