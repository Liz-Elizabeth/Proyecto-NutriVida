// ==========================================================================
// Validación del Formulario de Registro (registro.html)
// Clínica Nutricional NutriVida
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    // Selección de elementos del formulario
    const registroForm = document.getElementById("registroForm");
    const nombreInput = document.getElementById("nombre");
    const rutInput = document.getElementById("rut");
    const fechaNacimientoInput = document.getElementById("fechaNacimiento");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const objetivoSelect = document.getElementById("objetivo");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const termsCheckbox = document.getElementById("terms");

    // Elementos para mostrar errores
    const nombreError = document.getElementById("nombre-error");
    const rutError = document.getElementById("rut-error");
    const fechaNacimientoError = document.getElementById("fechaNacimiento-error");
    const emailError = document.getElementById("email-error");
    const telefonoError = document.getElementById("telefono-error");
    const objetivoError = document.getElementById("objetivo-error");
    const passwordError = document.getElementById("password-error");
    const confirmPasswordError = document.getElementById("confirmPassword-error");
    const termsError = document.getElementById("terms-error");
    const registroAlert = document.getElementById("registro-alert");
    const submitBtn = document.getElementById("btn-registro");

    if (!registroForm) return;

    // Expresión regular para correo electrónico
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Dominios de correo electrónico autorizados
    const dominiosPermitidos = ["@duocuc.cl", "@profesor.duoc.cl", "@gmail.com"];

    /**
     * Muestra el mensaje de error y aplica estilos al input
     */
    function mostrarError(input, errorElement, mensaje) {
        if (input) {
            input.classList.remove("input-success");
            input.classList.add("input-error");
            input.setAttribute("aria-invalid", "true");
        }
        if (errorElement) {
            errorElement.textContent = mensaje;
            errorElement.classList.add("visible");
        }
    }

    /**
     * Limpia el estado de error y marca el input como válido
     */
    function limpiarError(input, errorElement) {
        if (input) {
            input.classList.remove("input-error");
            input.classList.add("input-success");
            input.removeAttribute("aria-invalid");
        }
        if (errorElement) {
            errorElement.textContent = "";
            errorElement.classList.remove("visible");
        }
    }

    // Funciones de validación individuales
    function validarNombre() {
        const valor = nombreInput.value.trim();
        if (valor === "") {
            mostrarError(nombreInput, nombreError, "El nombre completo es obligatorio.");
            return false;
        }
        if (valor.length < 3) {
            mostrarError(nombreInput, nombreError, "Ingresa tu nombre y apellido (mínimo 3 caracteres).");
            return false;
        }
        limpiarError(nombreInput, nombreError);
        return true;
    }

    function validarRut() {
        const valor = rutInput.value.trim();
        if (valor === "") {
            mostrarError(rutInput, rutError, "El RUT o Identificación es obligatorio.");
            return false;
        }
        if (valor.length < 7) {
            mostrarError(rutInput, rutError, "Ingresa un RUT o documento válido (ej: 12.345.678-9).");
            return false;
        }
        limpiarError(rutInput, rutError);
        return true;
    }

    function validarFechaNacimiento() {
        const valor = fechaNacimientoInput.value;
        if (!valor) {
            mostrarError(fechaNacimientoInput, fechaNacimientoError, "La fecha de nacimiento es obligatoria.");
            return false;
        }
        const fecha = new Date(valor);
        const hoy = new Date();
        if (fecha >= hoy) {
            mostrarError(fechaNacimientoInput, fechaNacimientoError, "La fecha debe ser anterior a hoy.");
            return false;
        }
        limpiarError(fechaNacimientoInput, fechaNacimientoError);
        return true;
    }

    function validarEmail() {
        const valor = emailInput.value.trim();
        if (valor === "") {
            mostrarError(emailInput, emailError, "El correo electrónico es obligatorio.");
            return false;
        }
        if (!emailRegex.test(valor)) {
            mostrarError(emailInput, emailError, "Ingresa un correo electrónico válido (ej: usuario@duocuc.cl).");
            return false;
        }

        const valorLower = valor.toLowerCase();
        const dominioValido = dominiosPermitidos.some((dominio) => valorLower.endsWith(dominio));

        if (!dominioValido) {
            mostrarError(emailInput, emailError, "Solo se permiten correos @duocuc.cl, @profesor.duoc.cl y @gmail.com.");
            return false;
        }

        limpiarError(emailInput, emailError);
        return true;
    }

    function validarTelefono() {
        const valor = telefonoInput.value.trim();
        if (valor === "") {
            // Es opcional
            limpiarError(telefonoInput, telefonoError);
            telefonoInput.classList.remove("input-success");
            return true;
        }
        // Validar formato telefónico básico
        const telRegex = /^(\+?56)?(\s?)(0?9)(\s?)[0-9]{8}$|^[0-9+ ]{8,15}$/;
        if (!telRegex.test(valor)) {
            mostrarError(telefonoInput, telefonoError, "Ingresa un formato de teléfono válido.");
            return false;
        }
        limpiarError(telefonoInput, telefonoError);
        return true;
    }

    function validarObjetivo() {
        const valor = objetivoSelect.value;
        if (!valor || valor === "") {
            mostrarError(objetivoSelect, objetivoError, "Selecciona tu objetivo nutricional principal.");
            return false;
        }
        limpiarError(objetivoSelect, objetivoError);
        return true;
    }

    function validarPassword() {
        const valor = passwordInput.value;
        if (valor === "") {
            mostrarError(passwordInput, passwordError, "La contraseña es obligatoria.");
            return false;
        }
        if (valor.length < 6) {
            mostrarError(passwordInput, passwordError, "La contraseña debe tener al menos 6 caracteres.");
            return false;
        }
        limpiarError(passwordInput, passwordError);

        // Si ya escribió confirmación, revalidarla
        if (confirmPasswordInput.value !== "") {
            validarConfirmPassword();
        }
        return true;
    }

    function validarConfirmPassword() {
        const passwordValor = passwordInput.value;
        const confirmValor = confirmPasswordInput.value;
        if (confirmValor === "") {
            mostrarError(confirmPasswordInput, confirmPasswordError, "Confirma tu contraseña.");
            return false;
        }
        if (confirmValor !== passwordValor) {
            mostrarError(confirmPasswordInput, confirmPasswordError, "Las contraseñas no coinciden.");
            return false;
        }
        limpiarError(confirmPasswordInput, confirmPasswordError);
        return true;
    }

    function validarTerms() {
        if (!termsCheckbox.checked) {
            mostrarError(null, termsError, "Debes aceptar los Términos de Servicio y el Aviso de Privacidad.");
            return false;
        }
        limpiarError(null, termsError);
        return true;
    }

    // Eventos en tiempo real al perder foco o interactuar
    nombreInput.addEventListener("blur", validarNombre);
    nombreInput.addEventListener("input", () => {
        if (nombreInput.classList.contains("input-error")) validarNombre();
    });

    rutInput.addEventListener("blur", validarRut);
    rutInput.addEventListener("input", () => {
        if (rutInput.classList.contains("input-error")) validarRut();
    });

    fechaNacimientoInput.addEventListener("change", validarFechaNacimiento);

    emailInput.addEventListener("blur", validarEmail);
    emailInput.addEventListener("input", () => {
        if (emailInput.classList.contains("input-error")) validarEmail();
    });

    telefonoInput.addEventListener("blur", validarTelefono);
    telefonoInput.addEventListener("input", () => {
        if (telefonoInput.classList.contains("input-error")) validarTelefono();
    });

    objetivoSelect.addEventListener("change", validarObjetivo);

    passwordInput.addEventListener("blur", validarPassword);
    passwordInput.addEventListener("input", () => {
        if (passwordInput.classList.contains("input-error")) validarPassword();
    });

    confirmPasswordInput.addEventListener("blur", validarConfirmPassword);
    confirmPasswordInput.addEventListener("input", () => {
        if (confirmPasswordInput.classList.contains("input-error")) validarConfirmPassword();
    });

    termsCheckbox.addEventListener("change", validarTerms);

    // Manejo del submit
    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Ocultar alerta previa
        if (registroAlert) {
            registroAlert.className = "login-alert";
            registroAlert.textContent = "";
        }

        const esNombreValido = validarNombre();
        const esRutValido = validarRut();
        const esFechaValida = validarFechaNacimiento();
        const esEmailValido = validarEmail();
        const esTelefonoValido = validarTelefono();
        const esObjetivoValido = validarObjetivo();
        const esPasswordValido = validarPassword();
        const esConfirmValido = validarConfirmPassword();
        const esTermsValido = validarTerms();

        const formValido = esNombreValido && esRutValido && esFechaValida && esEmailValido &&
                           esTelefonoValido && esObjetivoValido && esPasswordValido &&
                           esConfirmValido && esTermsValido;

        if (!formValido) {
            if (registroAlert) {
                registroAlert.className = "login-alert alert-error";
                registroAlert.textContent = "Por favor completa correctamente todos los campos obligatorios.";
            }

            // Enfocar el primer campo con error
            const primerError = registroForm.querySelector(".input-error");
            if (primerError) {
                primerError.focus();
            }
            return;
        }

        // Simular creación de cuenta exitosa
        submitBtn.disabled = true;
        submitBtn.textContent = "Creando cuenta...";

        setTimeout(() => {
            if (registroAlert) {
                registroAlert.className = "login-alert alert-success";
                registroAlert.textContent = "¡Cuenta creada con éxito! Redirigiendo al inicio de sesión...";
            }

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1800);
        }, 1000);
    });
});
