// ==========================================================
// NUTRIVIDA - REGISTRO.JS
// ==========================================================
//
// En este archivo vamos a:
//
// 1. Obtener los campos del formulario.
// 2. Crear las regiones y comunas.
// 3. Cambiar las comunas cuando cambia la región.
// 4. Validar el RUN.
// 5. Validar nombre y apellido.
// 6. Validar correo.
// 7. Validar dirección.
// 8. Validar contraseña.
// 9. Comprobar que las contraseñas coincidan.
//
// ==========================================================



// ==========================================================
// OBTENER ELEMENTOS DEL HTML
// ==========================================================
//
// document.getElementById permite buscar un elemento
// utilizando el ID que escribimos en el HTML.
//
// ==========================================================

let formularioRegistro =
    document.getElementById("formularioRegistro");

let runRegistro =
    document.getElementById("runRegistro");

let nombreRegistro =
    document.getElementById("nombreRegistro");

let apellidoRegistro =
    document.getElementById("apellidoRegistro");

let correoRegistro =
    document.getElementById("correoRegistro");

let fechaNacimiento =
    document.getElementById("fechaNacimiento");

let regionRegistro =
    document.getElementById("regionRegistro");

let comunaRegistro =
    document.getElementById("comunaRegistro");

// Obtenemos el campo de objetivo nutricional
let objetivoRegistro =
    document.getElementById("objetivoRegistro");


let direccionRegistro =
    document.getElementById("direccionRegistro");

let passwordRegistro =
    document.getElementById("passwordRegistro");

let confirmarPassword =
    document.getElementById("confirmarPassword");




// ==========================================================
// ARREGLO DE REGIONES
// ==========================================================
//
// Un arreglo permite guardar varios datos.
//
// Los corchetes:
//
// [ ]
//
// indican que estamos creando una lista.
//
// ==========================================================

let regiones = [

    "Región de Arica y Parinacota",

    "Región de Tarapacá",

    "Región de Antofagasta",

    "Región de Atacama",

    "Región de Coquimbo",

    "Región de Valparaíso",

    "Región Metropolitana",

    "Región de O'Higgins",

    "Región del Maule",

    "Región de Ñuble",

    "Región del Biobío",

    "Región de La Araucanía",

    "Región de Los Ríos",

    "Región de Los Lagos",

    "Región de Aysén",

    "Región de Magallanes"

];



// ==========================================================
// AGREGAR LAS REGIONES AL SELECT
// ==========================================================
//
// Usamos un FOR.
//
// Un FOR permite repetir una instrucción varias veces.
//
// i comienza en 0 porque los arreglos comienzan
// desde la posición número 0.
//
// ==========================================================

for (let i = 0; i < regiones.length; i++) {


    // Creamos una nueva opción del select

    let opcionRegion =
        document.createElement("option");


    // Guardamos el número de la posición

    opcionRegion.value = i;


    // Mostramos el nombre de la región

    opcionRegion.textContent =
        regiones[i];


    // Agregamos la opción al select

    regionRegistro.appendChild(opcionRegion);

}



// ==========================================================
// COMUNAS
// ==========================================================
//
// Cada posición corresponde a una región.
//
// Ejemplo:
//
// regiones[11]
//
// corresponde a:
//
// Región de La Araucanía.
//
// Entonces:
//
// comunas[11]
//
// contiene comunas de La Araucanía.
//
// ==========================================================

let comunas = [

    // 0 - Arica y Parinacota
    [
        "Arica",
        "Camarones",
        "Putre",
        "General Lagos"
    ],


    // 1 - Tarapacá
    [
        "Iquique",
        "Alto Hospicio",
        "Pozo Almonte"
    ],


    // 2 - Antofagasta
    [
        "Antofagasta",
        "Calama",
        "Mejillones",
        "Tocopilla"
    ],


    // 3 - Atacama
    [
        "Copiapó",
        "Caldera",
        "Vallenar"
    ],


    // 4 - Coquimbo
    [
        "La Serena",
        "Coquimbo",
        "Ovalle"
    ],


    // 5 - Valparaíso
    [
        "Valparaíso",
        "Viña del Mar",
        "Quilpué",
        "Villa Alemana"
    ],


    // 6 - Metropolitana
    [
        "Santiago",
        "Puente Alto",
        "La Florida",
        "Providencia",
        "Ñuñoa",
        "La Reina",
        "Maipú"
    ],


    // 7 - O'Higgins
    [
        "Rancagua",
        "Machalí",
        "San Fernando"
    ],


    // 8 - Maule
    [
        "Talca",
        "Curicó",
        "Linares"
    ],


    // 9 - Ñuble
    [
        "Chillán",
        "Chillán Viejo",
        "San Carlos"
    ],


    // 10 - Biobío
    [
        "Concepción",
        "Talcahuano",
        "Los Ángeles",
        "San Pedro de la Paz"
    ],


    // 11 - La Araucanía
    [
        "Temuco",
        "Padre Las Casas",
        "Villarrica",
        "Pucón",
        "Angol"
    ],


    // 12 - Los Ríos
    [
        "Valdivia",
        "La Unión",
        "Río Bueno"
    ],


    // 13 - Los Lagos
    [
        "Puerto Montt",
        "Osorno",
        "Puerto Varas",
        "Castro"
    ],


    // 14 - Aysén
    [
        "Coyhaique",
        "Aysén"
    ],


    // 15 - Magallanes
    [
        "Punta Arenas",
        "Puerto Natales"
    ]

];



// ==========================================================
// CAMBIAR COMUNAS AL CAMBIAR REGIÓN
// ==========================================================
//
// "change" significa que este código se ejecutará
// cuando el usuario cambie la región seleccionada.
//
// ==========================================================

regionRegistro.addEventListener("change", function() {


    // Primero limpiamos el select de comunas

    comunaRegistro.innerHTML =
        '<option value="">Selecciona una comuna</option>';


    // Obtenemos la región seleccionada

    let posicionRegion =
        regionRegistro.value;


    // Si no seleccionó ninguna región,
    // dejamos el select de comuna vacío.

    if (posicionRegion === "") {

        return;

    }


    // Recorremos las comunas correspondientes
    // a la región seleccionada.

    for (
        let i = 0;
        i < comunas[posicionRegion].length;
        i++
    ) {


        // Creamos una nueva opción

        let opcionComuna =
            document.createElement("option");


        // Guardamos el nombre de la comuna

        opcionComuna.value =
            comunas[posicionRegion][i];


        // Mostramos el nombre

        opcionComuna.textContent =
            comunas[posicionRegion][i];


        // Agregamos la comuna al select

        comunaRegistro.appendChild(opcionComuna);

    }

});



// ==========================================================
// FUNCIÓN PARA VALIDAR EL RUN
// ==========================================================
//
// La pauta pide verificar que el RUN chileno
// sea correcto.
//
// Esta función realiza el cálculo del dígito verificador.
//
// ==========================================================

function validarRun(run) {


    // Convertimos a mayúscula por si escribe "k"

    run = run.toUpperCase();


    // Debe tener entre 7 y 9 caracteres

    if (run.length < 7 || run.length > 9) {

        return false;

    }


    // Solo permitimos números y una K al final

    let expresionRun =
        /^[0-9]+[0-9K]$/;


    if (!expresionRun.test(run)) {

        return false;

    }


    // Separamos el dígito verificador

    let digitoVerificador =
        run.charAt(run.length - 1);


    // Quitamos el último carácter

    let numeroRun =
        run.substring(0, run.length - 1);


    let suma = 0;

    let multiplicador = 2;


    // Recorremos el RUN desde derecha hacia izquierda

    for (
        let i = numeroRun.length - 1;
        i >= 0;
        i--
    ) {


        suma =
            suma +
            Number(numeroRun.charAt(i)) *
            multiplicador;


        multiplicador =
            multiplicador + 1;


        // Después del 7 vuelve al 2

        if (multiplicador > 7) {

            multiplicador = 2;

        }

    }


    // Calculamos el dígito verificador

    let resultado =
        11 - (suma % 11);


    let digitoCalculado;


    if (resultado === 11) {

        digitoCalculado = "0";

    } else if (resultado === 10) {

        digitoCalculado = "K";

    } else {

        digitoCalculado =
            resultado.toString();

    }


    // Comparamos ambos dígitos

    if (digitoCalculado === digitoVerificador) {

        return true;

    } else {

        return false;

    }

}



// ==========================================================
// VALIDAR FORMULARIO
// ==========================================================

formularioRegistro.addEventListener(
    "submit",
    function(event) {


        // Evita enviar el formulario automáticamente

        event.preventDefault();



        // ==================================================
        // EXPRESIONES REGULARES
        // ==================================================


        // Permite letras, espacios y tildes

        let expresionLetras =
            /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;


        // Permite únicamente los tres dominios
        // señalados en la pauta.

        let expresionCorreo =
            /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;



        // ==================================================
        // VALIDAR RUN VACÍO
        // ==================================================

        if (runRegistro.value === "") {

            alert("DEBES INGRESAR TU RUN");

            runRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR RUN CORRECTO
        // ==================================================

        if (!validarRun(runRegistro.value)) {

            alert(
                "EL RUN INGRESADO NO ES VÁLIDO. " +
                "DEBES ESCRIBIRLO SIN PUNTOS NI GUION"
            );

            runRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR NOMBRE VACÍO
        // ==================================================

        if (nombreRegistro.value === "") {

            alert("DEBES INGRESAR TU NOMBRE");

            nombreRegistro.focus();

            return;

        }



        // ==================================================
        // NOMBRE MÁXIMO 50
        // ==================================================

        if (nombreRegistro.value.length > 50) {

            alert(
                "EL NOMBRE NO PUEDE SUPERAR LOS 50 CARACTERES"
            );

            nombreRegistro.focus();

            return;

        }



        // ==================================================
        // NOMBRE SOLO LETRAS
        // ==================================================

        if (
            !expresionLetras.test(
                nombreRegistro.value
            )
        ) {

            alert(
                "EL NOMBRE SOLO DEBE CONTENER LETRAS"
            );

            nombreRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR APELLIDOS
        // ==================================================

        if (apellidoRegistro.value === "") {

            alert("DEBES INGRESAR TUS APELLIDOS");

            apellidoRegistro.focus();

            return;

        }



        if (apellidoRegistro.value.length > 100) {

            alert(
                "LOS APELLIDOS NO PUEDEN SUPERAR " +
                "LOS 100 CARACTERES"
            );

            apellidoRegistro.focus();

            return;

        }



        if (
            !expresionLetras.test(
                apellidoRegistro.value
            )
        ) {

            alert(
                "LOS APELLIDOS SOLO DEBEN CONTENER LETRAS"
            );

            apellidoRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR CORREO VACÍO
        // ==================================================

        if (correoRegistro.value === "") {

            alert(
                "DEBES INGRESAR TU CORREO ELECTRÓNICO"
            );

            correoRegistro.focus();

            return;

        }



        // ==================================================
        // CORREO MÁXIMO 100
        // ==================================================

        if (correoRegistro.value.length > 100) {

            alert(
                "EL CORREO NO PUEDE SUPERAR " +
                "LOS 100 CARACTERES"
            );

            correoRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR DOMINIO DEL CORREO
        // ==================================================

        if (
            !expresionCorreo.test(
                correoRegistro.value
            )
        ) {

            alert(
                "EL CORREO DEBE TERMINAR EN " +
                "@duoc.cl, @profesor.duoc.cl " +
                "O @gmail.com"
            );

            correoRegistro.focus();

            return;

        }



        // ==================================================
        // FECHA DE NACIMIENTO
        // ==================================================
        //
        // No hacemos:
        //
        // if (fechaNacimiento.value === "")
        //
        // porque según la pauta este campo
        // es OPCIONAL.
        //



        // ==================================================
        // VALIDAR REGIÓN
        // ==================================================

        if (regionRegistro.value === "") {

            alert("DEBES SELECCIONAR UNA REGIÓN");

            regionRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR COMUNA
        // ==================================================

        if (comunaRegistro.value === "") {

            alert("DEBES SELECCIONAR UNA COMUNA");

            comunaRegistro.focus();

            return;

        }
        // ==========================================================
        // VALIDAR OBJETIVO NUTRICIONAL
        // ==========================================================
        //
        // Este campo fue agregado por nuestro equipo
        // para adaptar el formulario al caso NutriVida.
        //
        // Comprobamos que el usuario haya seleccionado
        // una opción distinta de la opción inicial.
        // ==========================================================

        if (objetivoRegistro.value === "") {

            alert(
                "DEBES SELECCIONAR TU OBJETIVO NUTRICIONAL PRINCIPAL"
            );

            objetivoRegistro.focus();

            return;

}


        // ==================================================
        // VALIDAR DIRECCIÓN
        // ==================================================

        if (direccionRegistro.value === "") {

            alert("DEBES INGRESAR TU DIRECCIÓN");

            direccionRegistro.focus();

            return;

        }



        if (direccionRegistro.value.length > 300) {

            alert(
                "LA DIRECCIÓN NO PUEDE SUPERAR " +
                "LOS 300 CARACTERES"
            );

            direccionRegistro.focus();

            return;

        }



        // ==================================================
        // VALIDAR CONTRASEÑA VACÍA
        // ==================================================

        if (passwordRegistro.value === "") {

            alert("DEBES INGRESAR UNA CONTRASEÑA");

            passwordRegistro.focus();

            return;

        }



        // ==================================================
        // CONTRASEÑA MÍNIMO 4
        // ==================================================

        if (passwordRegistro.value.length < 4) {

            alert(
                "LA CONTRASEÑA DEBE TENER " +
                "AL MENOS 4 CARACTERES"
            );

            passwordRegistro.focus();

            return;

        }



        // ==================================================
        // CONTRASEÑA MÁXIMO 10
        // ==================================================

        if (passwordRegistro.value.length > 10) {

            alert(
                "LA CONTRASEÑA NO PUEDE SUPERAR " +
                "LOS 10 CARACTERES"
            );

            passwordRegistro.focus();

            return;

        }



        // ==================================================
        // CONFIRMAR CONTRASEÑA
        // ==================================================

        if (confirmarPassword.value === "") {

            alert(
                "DEBES CONFIRMAR TU CONTRASEÑA"
            );

            confirmarPassword.focus();

            return;

        }



        // ==================================================
        // COMPROBAR QUE SEAN IGUALES
        // ==================================================

        if (
            passwordRegistro.value !==
            confirmarPassword.value
        ) {

            alert(
                "LAS CONTRASEÑAS NO COINCIDEN"
            );

            confirmarPassword.focus();

            return;

        }



        // ==================================================
        // TODO CORRECTO
        // ==================================================

        alert(
            "REGISTRO VALIDADO CORRECTAMENTE"
        );

    }

);