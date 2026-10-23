
/**
 * @vitest-environment jsdom
 *
 * NUTRIVIDA - PRUEBAS DE CONTACTO
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

// Importamos el componente que probaremos
import FormularioContacto from '../components/moleculas/FormularioContacto.jsx'

// Limpiamos el entorno después de cada prueba
afterEach(() => {
  cleanup()
})

// Agrupamos las pruebas de Contacto
describe('Formulario de Contacto NutriVida', () => {

  // =====================================
  // PRUEBA 26: CAMPOS VACÍOS
  // =====================================

  it('Muestra error cuando los campos están vacíos', () => {

    // ARRANGE
    render(<FormularioContacto />)

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar mensaje'
      })
    )

    // ASSERT
    expect(
      screen.getByRole('status').textContent
    ).toContain('Debes completar todos los campos.')
  })

  // =====================================
  // PRUEBA 27: CORREO INVÁLIDO
  // =====================================

  it('Rechaza un correo electrónico inválido', () => {

    // ARRANGE
    render(<FormularioContacto />)

    // ACT
    fireEvent.change(
      screen.getByLabelText('Nombre'),
      { target: { value: 'Ana' } }
    )

    fireEvent.change(
      screen.getByLabelText('Correo electrónico'),
      { target: { value: 'correo-invalido' } }
    )

    fireEvent.change(
      screen.getByLabelText('Mensaje'),
      { target: { value: 'Quiero información' } }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar mensaje'
      })
    )

    // ASSERT
    expect(
      screen.getByRole('status').textContent
    ).toContain('Ingresa un correo electrónico válido.')
  })

  // =====================================
  // PRUEBA 28: DATOS CORRECTOS
  // =====================================

  it('Valida correctamente y limpia los campos', () => {

    // ARRANGE
    render(<FormularioContacto />)

    // ACT
    fireEvent.change(
      screen.getByLabelText('Nombre'),
      { target: { value: 'Ana' } }
    )

    fireEvent.change(
      screen.getByLabelText('Correo electrónico'),
      { target: { value: 'ana@gmail.com' } }
    )

    fireEvent.change(
      screen.getByLabelText('Mensaje'),
      { target: { value: 'Necesito información' } }
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar mensaje'
      })
    )

    // ASSERT
    expect(
      screen.getByRole('status').textContent
    ).toContain('Datos validados correctamente.')

    expect(
      screen.getByLabelText('Nombre').value
    ).toBe('')

    expect(
      screen.getByLabelText('Correo electrónico').value
    ).toBe('')

    expect(
      screen.getByLabelText('Mensaje').value
    ).toBe('')
  })

  // =====================================
  // PRUEBA 29: BORRAR MENSAJE DE ERROR
  // =====================================

  it('Elimina el mensaje de error cuando escribimos', () => {

    // ARRANGE
    render(<FormularioContacto />)

    // ACT
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Enviar mensaje'
      })
    )

    fireEvent.change(
      screen.getByLabelText('Nombre'),
      { target: { value: 'Ana' } }
    )

    // ASSERT
    expect(
      screen.queryByRole('status')
    ).toBeNull()
  })

})
