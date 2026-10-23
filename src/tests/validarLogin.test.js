
/*
  NUTRIVIDA - PRUEBAS DEL LOGIN

  Archivo: validarLogin.test.js

  Utilizamos Vitest y el patrón AAA:

  Arrange = Preparar los datos
  Act = Ejecutar la función
  Assert = Comprobar el resultado
*/

import { describe, it, expect } from 'vitest'

import { validarLogin } from '../validaciones/validarLogin.js'

// Agrupamos todas las pruebas del Login
describe('Validaciones del Login NutriVida', () => {

  // ==========================================
  // PRUEBA 1: CORREO VACÍO
  // ==========================================

  it('Rechaza un correo vacío', () => {

    // ARRANGE
    const correo = ''
    const password = '1234'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado.campo).toBe('correoLogin')

    expect(resultado.mensaje).toBe(
      'DEBES INGRESAR TU CORREO ELECTRÓNICO'
    )
  })

  // ==========================================
  // PRUEBA 2: CORREO DEMASIADO LARGO
  // ==========================================

  it('Rechaza un correo con más de 100 caracteres', () => {

    // ARRANGE
    const correo = 'a'.repeat(101) + '@gmail.com'
    const password = '1234'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado.campo).toBe('correoLogin')

    expect(resultado.mensaje).toBe(
      'EL CORREO NO PUEDE SUPERAR LOS 100 CARACTERES'
    )
  })

  // ==========================================
  // PRUEBA 3: DOMINIO NO PERMITIDO
  // ==========================================

  it('Rechaza un correo de dominio no permitido', () => {

    // ARRANGE
    const correo = 'ana@hotmail.com'
    const password = '1234'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado.campo).toBe('correoLogin')

    expect(resultado.mensaje).toContain(
      'EL CORREO DEBE TERMINAR EN'
    )
  })

  // ==========================================
  // PRUEBA 4: CONTRASEÑA VACÍA
  // ==========================================

  it('Rechaza una contraseña vacía', () => {

    // ARRANGE
    const correo = 'ana@gmail.com'
    const password = ''

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado.campo).toBe('passwordLogin')

    expect(resultado.mensaje).toBe(
      'DEBES INGRESAR TU CONTRASEÑA'
    )
  })

  // ==========================================
  // PRUEBA 5: CONTRASEÑA MUY CORTA
  // ==========================================

  it('Rechaza una contraseña de 3 caracteres', () => {

    // ARRANGE
    const correo = 'ana@gmail.com'
    const password = '123'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado.campo).toBe('passwordLogin')

    expect(resultado.mensaje).toBe(
      'LA CONTRASEÑA DEBE TENER AL MENOS 4 CARACTERES'
    )
  })

  // ==========================================
  // PRUEBA 6: CONTRASEÑA MUY LARGA
  // ==========================================

  it('Rechaza una contraseña de 11 caracteres', () => {

    // ARRANGE
    const correo = 'ana@gmail.com'
    const password = '12345678901'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado.campo).toBe('passwordLogin')

    expect(resultado.mensaje).toBe(
      'LA CONTRASEÑA NO PUEDE SUPERAR LOS 10 CARACTERES'
    )
  })

  // ==========================================
  // PRUEBA 7: CORREO DUOC VÁLIDO
  // ==========================================

  it('Acepta el formato de correo Duoc', () => {

    // ARRANGE
    const correo = 'admin@duoc.cl'
    const password = '1234'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado).toBeNull()
  })

  // ==========================================
  // PRUEBA 8: CORREO GMAIL VÁLIDO
  // ==========================================

  it('Acepta el formato de correo Gmail', () => {

    // ARRANGE
    const correo = 'ana@gmail.com'
    const password = '123456'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado).toBeNull()
  })

  // ==========================================
  // PRUEBA 9: CORREO PROFESOR DUOC
  // ==========================================

  it('Acepta el formato de correo Profesor Duoc', () => {

    // ARRANGE
    const correo = 'docente@profesor.duoc.cl'
    const password = 'abcd'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado).toBeNull()
  })

  // ==========================================
  // PRUEBA 10: CONTRASEÑA DE 10 CARACTERES
  // ==========================================

  it('Acepta una contraseña de 10 caracteres', () => {

    // ARRANGE
    const correo = 'ana@gmail.com'
    const password = '1234567890'

    // ACT
    const resultado = validarLogin(correo, password)

    // ASSERT
    expect(resultado).toBeNull()
  })

})
