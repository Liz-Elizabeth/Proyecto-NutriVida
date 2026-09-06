// ==========================================================
// NUTRIVIDA - SERVICIO.JS
//
// Este archivo permite mostrar y ocultar
// información adicional en servicio.html
// ==========================================================


// ==========================================================
// PLAN INTEGRAL
// ==========================================================

let botonIntegral = document.getElementById("botonIntegral");

let extraIntegral = document.getElementById("extraIntegral");


botonIntegral.addEventListener("click", function() {

    if (
        extraIntegral.style.display === "none" ||
        extraIntegral.style.display === ""
    ) {

        extraIntegral.style.display = "block";

    } else {

        extraIntegral.style.display = "none";

    }

});



// ==========================================================
// CONSULTA INICIAL
// ==========================================================

let botonConsulta = document.getElementById("botonConsulta");

let extraConsulta = document.getElementById("extraConsulta");


botonConsulta.addEventListener("click", function() {

    if (
        extraConsulta.style.display === "none" ||
        extraConsulta.style.display === ""
    ) {

        extraConsulta.style.display = "block";

    } else {

        extraConsulta.style.display = "none";

    }

});



// ==========================================================
// CONTROL DE PESO
// ==========================================================

let botonPeso = document.getElementById("botonPeso");

let extraPeso = document.getElementById("extraPeso");


botonPeso.addEventListener("click", function() {

    if (
        extraPeso.style.display === "none" ||
        extraPeso.style.display === ""
    ) {

        extraPeso.style.display = "block";

    } else {

        extraPeso.style.display = "none";

    }

});



// ==========================================================
// NUTRICIÓN DEPORTIVA
// ==========================================================

let botonDeportiva = document.getElementById("botonDeportiva");

let extraDeportiva = document.getElementById("extraDeportiva");


botonDeportiva.addEventListener("click", function() {

    if (
        extraDeportiva.style.display === "none" ||
        extraDeportiva.style.display === ""
    ) {

        extraDeportiva.style.display = "block";

    } else {

        extraDeportiva.style.display = "none";

    }

});



// ==========================================================
// VEGETARIANO Y VEGANO
// ==========================================================

let botonVegetariano = document.getElementById("botonVegetariano");

let extraVegetariano = document.getElementById("extraVegetariano");


botonVegetariano.addEventListener("click", function() {

    if (
        extraVegetariano.style.display === "none" ||
        extraVegetariano.style.display === ""
    ) {

        extraVegetariano.style.display = "block";

    } else {

        extraVegetariano.style.display = "none";

    }

});



// ==========================================================
// SEGUIMIENTO
// ==========================================================

let botonSeguimiento = document.getElementById("botonSeguimiento");

let extraSeguimiento = document.getElementById("extraSeguimiento");


botonSeguimiento.addEventListener("click", function() {

    if (
        extraSeguimiento.style.display === "none" ||
        extraSeguimiento.style.display === ""
    ) {

        extraSeguimiento.style.display = "block";

    } else {

        extraSeguimiento.style.display = "none";

    }

});