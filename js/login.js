// ==========================================================
// NUTRIVIDA - LOGIN.JS
//
// VALIDACIONES SEGÚN PAUTA:
// - Correo obligatorio
// - Máximo 100 caracteres
// - Solo dominios permitidos
// - Contraseña obligatoria
// - Contraseña entre 4 y 10 caracteres
// ==========================================================


// Obtenemos los elementos del HTML mediante su ID

let formularioLogin =
    document.getElementById("formularioLogin");

let correoLogin =
    document.getElementById("correoLogin");

let passwordLogin =
    document.getElementById("passwordLogin");


// Cuando el usuario presiona "Iniciar sesión"

formularioLogin.addEventListener("submit", function(event) {


    // Evita que el formulario se envíe
    // antes de revisar los datos

    event.preventDefault();


    // ======================================================
    // VALIDAR CORREO VACÍO
    // ======================================================

    if (correoLogin.value === "") {

        alert("DEBES INGRESAR TU CORREO ELECTRÓNICO");

        correoLogin.focus();

        return;

    }


    // ======================================================
    // VALIDAR MÁXIMO 100 CARACTERES
    // ======================================================

    if (correoLogin.value.length > 100) {

        alert("EL CORREO NO PUEDE SUPERAR LOS 100 CARACTERES");

        correoLogin.focus();

        return;

    }


    // ======================================================
    // VALIDAR DOMINIOS PERMITIDOS
    //
    // Solo se permiten:
    // @duoc.cl
    // @profesor.duoc.cl
    // @gmail.com
    // ======================================================

    let expresionCorreo =
        /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;


    if (!expresionCorreo.test(correoLogin.value)) {

        alert(
            "EL CORREO DEBE TERMINAR EN @duoc.cl, " +
            "@profesor.duoc.cl O @gmail.com"
        );

        correoLogin.focus();

        return;

    }


    // ======================================================
    // VALIDAR CONTRASEÑA VACÍA
    // ======================================================

    if (passwordLogin.value === "") {

        alert("DEBES INGRESAR TU CONTRASEÑA");

        passwordLogin.focus();

        return;

    }


    // ======================================================
    // VALIDAR MÍNIMO 4 CARACTERES
    // ======================================================

    if (passwordLogin.value.length < 4) {

        alert("LA CONTRASEÑA DEBE TENER AL MENOS 4 CARACTERES");

        passwordLogin.focus();

        return;

    }


    // ======================================================
    // VALIDAR MÁXIMO 10 CARACTERES
    // ======================================================

    if (passwordLogin.value.length > 10) {

        alert("LA CONTRASEÑA NO PUEDE SUPERAR LOS 10 CARACTERES");

        passwordLogin.focus();

        return;

    }


    // ======================================================
    // DATOS VÁLIDOS
    // ======================================================

    alert("DATOS DE INICIO DE SESIÓN CORRECTOS");

});