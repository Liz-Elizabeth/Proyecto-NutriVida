
/*
  NUTRIVIDA - cuentas.js

  Gestión simulada de cuentas de pacientes.

  Permite:
  - Registrar una cuenta
  - Verificar correo y contraseña
  - Mantener una sesión local
  - Consultar y actualizar el perfil

  IMPORTANTE:
  Es una demostración académica.
  No reemplaza una autenticación con servidor.
*/

const CLAVE_CUENTAS = 'nutrividaCuentas'
const CLAVE_CLIENTE = 'nutrividaClienteActivo'

// ==========================================
// RECUPERAR CUENTAS GUARDADAS
// ==========================================

function leerCuentas() {

  try {
    const guardado = localStorage.getItem(CLAVE_CUENTAS)

    if (guardado) {
      const cuentas = JSON.parse(guardado)

      if (Array.isArray(cuentas)) {
        return cuentas
      }
    }

  } catch (error) {
    console.error('Error al leer las cuentas:', error)
  }

  return []
}

// ==========================================
// CREAR UN IDENTIFICADOR ALEATORIO
// PARA PROTEGER LA CONTRASEÑA
// ==========================================

function generarSal() {

  const numeros = new Uint8Array(16)

  crypto.getRandomValues(numeros)

  return Array.from(numeros)
    .map(numero => numero.toString(16).padStart(2, '0'))
    .join('')
}

// ==========================================
// CREAR UNA HUELLA DE LA CONTRASEÑA
// ==========================================

async function crearHuella(password, sal) {

  const texto = new TextEncoder().encode(
    sal + ':' + password
  )

  const resultado = await crypto.subtle.digest(
    'SHA-256',
    texto
  )

  return Array.from(new Uint8Array(resultado))
    .map(numero => numero.toString(16).padStart(2, '0'))
    .join('')
}

// ==========================================
// REGISTRAR UNA CUENTA
// ==========================================

export async function registrarCuenta(datos) {

  const cuentas = leerCuentas()

  const correo = datos.correoRegistro.trim().toLowerCase()

  // No permitimos dos cuentas con el mismo correo
  const existe = cuentas.some(
    cuenta => cuenta.correo === correo
  )

  if (existe) {
    return {
      correcto: false,
      mensaje: 'YA EXISTE UNA CUENTA CON ESTE CORREO'
    }
  }

  // Preparamos la contraseña sin almacenarla
  // directamente como texto.
  const sal = generarSal()

  const huella = await crearHuella(
    datos.passwordRegistro,
    sal
  )

  // Conservamos solo los datos necesarios
  // para el perfil de demostración.
  const nuevaCuenta = {
    correo: correo,
    nombre: datos.nombreRegistro.trim(),
    apellidos: datos.apellidoRegistro.trim(),
    objetivo: datos.objetivoRegistro,
    sal: sal,
    huella: huella
  }

  // Guardamos la cuenta junto a las anteriores
  localStorage.setItem(
    CLAVE_CUENTAS,
    JSON.stringify([...cuentas, nuevaCuenta])
  )

  return {
    correcto: true,
    mensaje: 'REGISTRO VALIDADO CORRECTAMENTE'
  }
}

// ==========================================
// INICIAR SESIÓN COMO PACIENTE
// ==========================================

export async function iniciarSesionCliente(correo, password) {

  const cuentas = leerCuentas()

  const correoNormalizado = correo.trim().toLowerCase()

  const cuenta = cuentas.find(
    usuario => usuario.correo === correoNormalizado
  )

  if (!cuenta) {
    return false
  }

  const huellaIngresada = await crearHuella(
    password,
    cuenta.sal
  )

  if (huellaIngresada !== cuenta.huella) {
    return false
  }

  // Guardamos qué paciente inició sesión
  localStorage.setItem(
    CLAVE_CLIENTE,
    cuenta.correo
  )

  return true
}

// ==========================================
// OBTENER EL PACIENTE QUE INICIÓ SESIÓN
// ==========================================

export function obtenerClienteActual() {

  const correo = localStorage.getItem(CLAVE_CLIENTE)

  if (!correo) {
    return null
  }

  const cuenta = leerCuentas().find(
    usuario => usuario.correo === correo
  )

  if (!cuenta) {
    return null
  }

  // Devolvemos solamente datos del perfil
  return {
    nombre: cuenta.nombre,
    apellidos: cuenta.apellidos,
    correo: cuenta.correo,
    objetivo: cuenta.objetivo
  }
}

// ==========================================
// ACTUALIZAR EL PERFIL DEL PACIENTE
// ==========================================

export function actualizarClienteActual(datos) {

  const correoActual = localStorage.getItem(CLAVE_CLIENTE)

  if (!correoActual) {
    return {
      correcto: false,
      mensaje: 'DEBES INICIAR SESIÓN'
    }
  }

  const cuentas = leerCuentas()
  const correoNuevo = datos.correo.trim().toLowerCase()

  // Comprobamos que el correo nuevo
  // no pertenezca a otra cuenta.
  const correoOcupado = cuentas.some(
    cuenta =>
      cuenta.correo === correoNuevo &&
      cuenta.correo !== correoActual
  )

  if (correoOcupado) {
    return {
      correcto: false,
      mensaje: 'ESTE CORREO YA ESTÁ REGISTRADO'
    }
  }

  const cuentasActualizadas = cuentas.map(cuenta => {

    if (cuenta.correo === correoActual) {
      return {
        ...cuenta,
        nombre: datos.nombre,
        apellidos: datos.apellidos,
        correo: correoNuevo,
        objetivo: datos.objetivo
      }
    }

    return cuenta
  })

  localStorage.setItem(
    CLAVE_CUENTAS,
    JSON.stringify(cuentasActualizadas)
  )

  localStorage.setItem(
    CLAVE_CLIENTE,
    correoNuevo
  )

  return {
    correcto: true,
    mensaje: 'PERFIL ACTUALIZADO CORRECTAMENTE'
  }
}

// ==========================================
// CERRAR SESIÓN DEL PACIENTE
// ==========================================

export function cerrarSesionCliente() {
  localStorage.removeItem(CLAVE_CLIENTE)
}
