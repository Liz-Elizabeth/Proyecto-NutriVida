
/*
  NUTRIVIDA - validarRegistro.js

  Valida los datos del formulario de registro.
  Conserva las reglas del proyecto original.

  Si encuentra un error, devuelve:
  { campo: '...', mensaje: '...' }

  Si todo está correcto, devuelve null.
*/

// ==========================================
// VALIDAR RUN CHILENO
// ==========================================

function validarRun(run) {

  run = run.toUpperCase()

  if (run.length < 7 || run.length > 9) {
    return false
  }

  const expresionRun = /^[0-9]+[0-9K]$/

  if (!expresionRun.test(run)) {
    return false
  }

  const digitoVerificador = run.charAt(run.length - 1)

  const numeroRun = run.substring(0, run.length - 1)

  let suma = 0
  let multiplicador = 2

  for (let i = numeroRun.length - 1; i >= 0; i--) {

    suma = suma + Number(numeroRun.charAt(i)) * multiplicador

    multiplicador = multiplicador + 1

    if (multiplicador > 7) {
      multiplicador = 2
    }
  }

  const resultado = 11 - (suma % 11)

  let digitoCalculado

  if (resultado === 11) {
    digitoCalculado = '0'
  } else if (resultado === 10) {
    digitoCalculado = 'K'
  } else {
    digitoCalculado = resultado.toString()
  }

  return digitoCalculado === digitoVerificador
}

// ==========================================
// VALIDAR FORMULARIO
// ==========================================

// IMPORTANTE: export permite usar esta función
// desde FormularioRegistro.jsx.

export function validarRegistro(datos) {

  const expresionLetras = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/

  const expresionCorreo =
    /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/

  // RUN OBLIGATORIO
  if (datos.runRegistro === '') {
    return {
      campo: 'runRegistro',
      mensaje: 'DEBES INGRESAR TU RUN'
    }
  }

  // RUN VÁLIDO
  if (!validarRun(datos.runRegistro)) {
    return {
      campo: 'runRegistro',
      mensaje:
        'EL RUN INGRESADO NO ES VÁLIDO. ' +
        'DEBES ESCRIBIRLO SIN PUNTOS NI GUION'
    }
  }

  // NOMBRE OBLIGATORIO
  if (datos.nombreRegistro === '') {
    return {
      campo: 'nombreRegistro',
      mensaje: 'DEBES INGRESAR TU NOMBRE'
    }
  }

  // NOMBRE MÁXIMO 50
  if (datos.nombreRegistro.length > 50) {
    return {
      campo: 'nombreRegistro',
      mensaje: 'EL NOMBRE NO PUEDE SUPERAR LOS 50 CARACTERES'
    }
  }

  // NOMBRE SOLO LETRAS
  if (!expresionLetras.test(datos.nombreRegistro)) {
    return {
      campo: 'nombreRegistro',
      mensaje: 'EL NOMBRE SOLO DEBE CONTENER LETRAS'
    }
  }

  // APELLIDOS OBLIGATORIOS
  if (datos.apellidoRegistro === '') {
    return {
      campo: 'apellidoRegistro',
      mensaje: 'DEBES INGRESAR TUS APELLIDOS'
    }
  }

  // APELLIDOS MÁXIMO 100
  if (datos.apellidoRegistro.length > 100) {
    return {
      campo: 'apellidoRegistro',
      mensaje: 'LOS APELLIDOS NO PUEDEN SUPERAR LOS 100 CARACTERES'
    }
  }

  // APELLIDOS SOLO LETRAS
  if (!expresionLetras.test(datos.apellidoRegistro)) {
    return {
      campo: 'apellidoRegistro',
      mensaje: 'LOS APELLIDOS SOLO DEBEN CONTENER LETRAS'
    }
  }

  // CORREO OBLIGATORIO
  if (datos.correoRegistro === '') {
    return {
      campo: 'correoRegistro',
      mensaje: 'DEBES INGRESAR TU CORREO ELECTRÓNICO'
    }
  }

  // CORREO MÁXIMO 100
  if (datos.correoRegistro.length > 100) {
    return {
      campo: 'correoRegistro',
      mensaje: 'EL CORREO NO PUEDE SUPERAR LOS 100 CARACTERES'
    }
  }

  // DOMINIOS PERMITIDOS
  if (!expresionCorreo.test(datos.correoRegistro)) {
    return {
      campo: 'correoRegistro',
      mensaje:
        'EL CORREO DEBE TERMINAR EN ' +
        '@duoc.cl, @profesor.duoc.cl O @gmail.com'
    }
  }

  // FECHA DE NACIMIENTO:
  // Es opcional, igual que en el proyecto original.

  // REGIÓN
  if (datos.regionRegistro === '') {
    return {
      campo: 'regionRegistro',
      mensaje: 'DEBES SELECCIONAR UNA REGIÓN'
    }
  }

  // COMUNA
  if (datos.comunaRegistro === '') {
    return {
      campo: 'comunaRegistro',
      mensaje: 'DEBES SELECCIONAR UNA COMUNA'
    }
  }

  // OBJETIVO NUTRICIONAL
  if (datos.objetivoRegistro === '') {
    return {
      campo: 'objetivoRegistro',
      mensaje: 'DEBES SELECCIONAR TU OBJETIVO NUTRICIONAL PRINCIPAL'
    }
  }

  // DIRECCIÓN OBLIGATORIA
  if (datos.direccionRegistro === '') {
    return {
      campo: 'direccionRegistro',
      mensaje: 'DEBES INGRESAR TU DIRECCIÓN'
    }
  }

  // DIRECCIÓN MÁXIMO 300
  if (datos.direccionRegistro.length > 300) {
    return {
      campo: 'direccionRegistro',
      mensaje: 'LA DIRECCIÓN NO PUEDE SUPERAR LOS 300 CARACTERES'
    }
  }

  // CONTRASEÑA OBLIGATORIA
  if (datos.passwordRegistro === '') {
    return {
      campo: 'passwordRegistro',
      mensaje: 'DEBES INGRESAR UNA CONTRASEÑA'
    }
  }

  // CONTRASEÑA MÍNIMO 4
  if (datos.passwordRegistro.length < 4) {
    return {
      campo: 'passwordRegistro',
      mensaje: 'LA CONTRASEÑA DEBE TENER AL MENOS 4 CARACTERES'
    }
  }

  // CONTRASEÑA MÁXIMO 10
  if (datos.passwordRegistro.length > 10) {
    return {
      campo: 'passwordRegistro',
      mensaje: 'LA CONTRASEÑA NO PUEDE SUPERAR LOS 10 CARACTERES'
    }
  }

  // CONFIRMAR CONTRASEÑA
  if (datos.confirmarPassword === '') {
    return {
      campo: 'confirmarPassword',
      mensaje: 'DEBES CONFIRMAR TU CONTRASEÑA'
    }
  }

  // CONTRASEÑAS IGUALES
  if (datos.passwordRegistro !== datos.confirmarPassword) {
    return {
      campo: 'confirmarPassword',
      mensaje: 'LAS CONTRASEÑAS NO COINCIDEN'
    }
  }



  // VALIDAR FECHA DE NACIMIENTO (OPCIONAL)

if (datos.fechaNacimiento !== '') {

  const fechaTexto = datos.fechaNacimiento

  // Comprobamos el formato: AAAA-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaTexto)) {
    return {
      campo: 'fechaNacimiento',
      mensaje: 'INGRESA UN AÑO DE NACIMIENTO VÁLIDO DE 4 DÍGITOS'
    }
  }

  const [anio, mes, dia] = fechaTexto.split('-').map(Number)

  // Comprobamos que el año sea razonable
  const anioActual = new Date().getFullYear()

  if (anio < 1900 || anio > anioActual) {
    return {
      campo: 'fechaNacimiento',
      mensaje: 'EL AÑO DE NACIMIENTO NO ES VÁLIDO'
    }
  }

  // Comprobamos que la fecha exista realmente
  const fecha = new Date(Date.UTC(anio, mes - 1, dia))

  if (
    fecha.getUTCFullYear() !== anio ||
    fecha.getUTCMonth() !== mes - 1 ||
    fecha.getUTCDate() !== dia ||
    fecha > new Date()
  ) {
    return {
      campo: 'fechaNacimiento',
      mensaje: 'INGRESA UNA FECHA DE NACIMIENTO VÁLIDA'
    }
  }
}
  // TODOS LOS DATOS SON VÁLIDOS
  return null
}
