
/*
  NUTRIVIDA - validarLogin.js

  Contiene las seis validaciones del login.js original.

  Esta función revisa el correo y la contraseña.
  Si encuentra un error, devuelve el mensaje
  y el campo donde ocurrió.
*/

// Recibimos el correo y la contraseña del formulario
export function validarLogin(correo, password) {

  // ==================================================
  // 1. VALIDAR CORREO VACÍO
  // ==================================================

  if (correo === '') {
    return {
      campo: 'correoLogin',
      mensaje: 'DEBES INGRESAR TU CORREO ELECTRÓNICO'
    }
  }

  // ==================================================
  // 2. VALIDAR MÁXIMO 100 CARACTERES
  // ==================================================

  if (correo.length > 100) {
    return {
      campo: 'correoLogin',
      mensaje: 'EL CORREO NO PUEDE SUPERAR LOS 100 CARACTERES'
    }
  }

  // ==================================================
  // 3. VALIDAR DOMINIOS PERMITIDOS
  // ==================================================

  // Conservamos la expresión regular original
  const expresionCorreo =
    /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/

  if (!expresionCorreo.test(correo)) {
    return {
      campo: 'correoLogin',
      mensaje:
        'EL CORREO DEBE TERMINAR EN @duoc.cl, ' +
        '@profesor.duoc.cl O @gmail.com'
    }
  }

  // ==================================================
  // 4. VALIDAR CONTRASEÑA VACÍA
  // ==================================================

  if (password === '') {
    return {
      campo: 'passwordLogin',
      mensaje: 'DEBES INGRESAR TU CONTRASEÑA'
    }
  }

  // ==================================================
  // 5. VALIDAR MÍNIMO 4 CARACTERES
  // ==================================================

  if (password.length < 4) {
    return {
      campo: 'passwordLogin',
      mensaje: 'LA CONTRASEÑA DEBE TENER AL MENOS 4 CARACTERES'
    }
  }

  // ==================================================
  // 6. VALIDAR MÁXIMO 10 CARACTERES
  // ==================================================

  if (password.length > 10) {
    return {
      campo: 'passwordLogin',
      mensaje: 'LA CONTRASEÑA NO PUEDE SUPERAR LOS 10 CARACTERES'
    }
  }

  // Si todo cumple las reglas, no existe error
  return null
}
