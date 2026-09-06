// ==========================================================
// NUTRIVIDA - CONTACTO.JS
//
// VALIDACIONES SEGÚN PAUTA:
// - Nombre obligatorio
// - Nombre máximo 100 caracteres
// - Correo máximo 100 caracteres
// - Solo dominios permitidos
// - Comentario obligatorio
// - Comentario máximo 500 caracteres
// ==========================================================


let formularioContacto =
    document.getElementById("formularioContacto");

let nombreContacto =
    document.getElementById("nombreContacto");

let correoContacto =
    document.getElementById("correoContacto");

let mensajeContacto =
    document.getElementById("mensajeContacto");


// Detectamos el envío del formulario

formularioContacto.addEventListener("submit", function(event) {


    // Evita el envío antes de validar

    event.preventDefault();


    // ======================================================
    // EXPRESIÓN PARA NOMBRE
    // ======================================================

    let expresionLetras =
        /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;


    // ======================================================
    // EXPRESIÓN PARA LOS DOMINIOS PERMITIDOS
    // ======================================================

    let expresionCorreo =
        /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;


    // ======================================================
    // NOMBRE VACÍO
    // ======================================================

    if (nombreContacto.value === "") {

        alert("DEBES INGRESAR TU NOMBRE");

        nombreContacto.focus();

        return;

    }


    // ======================================================
    // NOMBRE MÁXIMO 100
    // ======================================================

    if (nombreContacto.value.length > 100) {

        alert("EL NOMBRE NO PUEDE SUPERAR LOS 100 CARACTERES");

        nombreContacto.focus();

        return;

    }


    // ======================================================
    // NOMBRE SOLO LETRAS
    //
    // Esta validación complementa la pauta general.
    // ======================================================

    if (!expresionLetras.test(nombreContacto.value)) {

        alert("EL NOMBRE SOLO DEBE CONTENER LETRAS");

        nombreContacto.focus();

        return;

    }


    // ======================================================
    // CORREO MÁXIMO 100
    // ======================================================

    if (correoContacto.value.length > 100) {

        alert("EL CORREO NO PUEDE SUPERAR LOS 100 CARACTERES");

        correoContacto.focus();

        return;

    }


    // ======================================================
    // VALIDACIÓN DEL CORREO
    //
    // La pauta específica no marca el correo
    // de contacto como "requerido",
    // pero si se escribe uno, debe pertenecer
    // a uno de los dominios permitidos.
    // ======================================================

    if (
        correoContacto.value !== "" &&
        !expresionCorreo.test(correoContacto.value)
    ) {

        alert(
            "EL CORREO DEBE TERMINAR EN @duoc.cl, " +
            "@profesor.duoc.cl O @gmail.com"
        );

        correoContacto.focus();

        return;

    }


    // ======================================================
    // MENSAJE VACÍO
    // ======================================================

    if (mensajeContacto.value === "") {

        alert("DEBES ESCRIBIR UN MENSAJE");

        mensajeContacto.focus();

        return;

    }


    // ======================================================
    // MENSAJE MÁXIMO 500
    // ======================================================

    if (mensajeContacto.value.length > 500) {

        alert("EL MENSAJE NO PUEDE SUPERAR LOS 500 CARACTERES");

        mensajeContacto.focus();

        return;

    }


    // ======================================================
    // TODO CORRECTO
    // ======================================================

    alert("MENSAJE VALIDADO CORRECTAMENTE");

});