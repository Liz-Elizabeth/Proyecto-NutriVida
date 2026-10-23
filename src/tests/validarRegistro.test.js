


/*
  PRUEBAS AUTOMATIZADAS DE NUTRIVIDA

  Archivo: validarRegistro.test.js

  Herramienta: Vitest

  Patrón AAA:
  Arrange = Preparar
  Act = Actuar
  Assert = Comprobar
*/

import { describe, it, expect } from 'vitest'

import { validarRegistro } from '../validaciones/validarRegistro.js'

// ==========================================
// DATOS VÁLIDOS PARA LAS PRUEBAS
// ==========================================

function crearDatosValidos() {

  return {
    runRegistro: '111111111',
    nombreRegistro: 'Ana',
    apellidoRegistro: 'Perez',
    correoRegistro: 'ana@gmail.com',
    fechaNacimiento: '1988-05-15',
    regionRegistro: '0',
    comunaRegistro: 'Santiago',
    objetivoRegistro: 'perdida-grasa',
    direccionRegistro: 'Calle de prueba 123',
    passwordRegistro: '123456',
    confirmarPassword: '123456'
  }
}

// ==========================================
// GRUPO DE PRUEBAS DEL REGISTRO
// ==========================================

describe('Validaciones del registro NutriVida', () => {

  // PRUEBA 1
  it('Acepta un formulario con datos validos', () => {

    // ARRANGE: preparar
    const datos = crearDatosValidos()

    // ACT: ejecutar
    const resultado = validarRegistro(datos)

    // ASSERT: comprobar
    expect(resultado).toBeNull()
  })

  // PRUEBA 2
  it('Rechaza un RUN vacio', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.runRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('runRegistro')
    expect(resultado.mensaje).toBe('DEBES INGRESAR TU RUN')
  })

  // PRUEBA 3
  it('Rechaza un RUN con formato incorrecto', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.runRegistro = 'ABC'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('runRegistro')
  })

  // PRUEBA 4
  it('Rechaza un nombre vacio', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.nombreRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('nombreRegistro')
  })

  // PRUEBA 5
  it('Rechaza nombres con numeros', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.nombreRegistro = 'Ana123'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.mensaje).toBe(
      'EL NOMBRE SOLO DEBE CONTENER LETRAS'
    )
  })

  // PRUEBA 6
  it('Rechaza apellidos vacios', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.apellidoRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('apellidoRegistro')
  })

  // PRUEBA 7
  it('Rechaza correos de dominios no permitidos', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.correoRegistro = 'ana@otrodominio.com'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('correoRegistro')
  })

  // PRUEBA 8
  it('Exige seleccionar una region', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.regionRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('regionRegistro')
  })

  // PRUEBA 9
  it('Exige seleccionar una comuna', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.comunaRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('comunaRegistro')
  })

  // PRUEBA 10
  it('Exige seleccionar un objetivo nutricional', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.objetivoRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('objetivoRegistro')
  })

  // PRUEBA 11
  it('Exige ingresar una direccion', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.direccionRegistro = ''

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('direccionRegistro')
  })

  // PRUEBA 12
  it('Rechaza una contraseña demasiado corta', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.passwordRegistro = '123'
    datos.confirmarPassword = '123'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('passwordRegistro')
  })

  // PRUEBA 13
  it('Rechaza contraseñas que no coinciden', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.confirmarPassword = '654321'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.mensaje).toBe(
      'LAS CONTRASEÑAS NO COINCIDEN'
    )
  })

  // PRUEBA 14
  it('Rechaza un año de seis cifras', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.fechaNacimiento = '198854-05-15'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('fechaNacimiento')
  })

  // PRUEBA 15
  it('Rechaza una fecha inexistente', () => {

    // ARRANGE
    const datos = crearDatosValidos()
    datos.fechaNacimiento = '2023-02-31'

    // ACT
    const resultado = validarRegistro(datos)

    // ASSERT
    expect(resultado.campo).toBe('fechaNacimiento')
  })

})
