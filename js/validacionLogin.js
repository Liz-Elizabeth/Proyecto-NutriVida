// ==========================================================================
// Validación del Formulario de Inicio de Sesión (login.html)
// Clínica Nutricional NutriVida
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Selección de elementos del DOM
  const loginForm = document.getElementById("loginForm") || document.querySelector("#login form") || document.getElementById("login");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const loginAlert = document.getElementById("login-alert");
  const submitBtn = document.getElementById("btn-submit") || loginForm?.querySelector('button[type="submit"]');

  // Si no existe el formulario en la página, no ejecutar
  if (!loginForm || !emailInput || !passwordInput) {
    return;
  }


  // Expresión regular para validación de formato de correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Dominios de correo electrónico autorizados
  const dominiosPermitidos = ["@duocuc.cl", "@profesor.duoc.cl", "@gmail.com"];

  /**
   * Muestra el mensaje de error y aplica estilos al input
   * @param {HTMLInputElement} input - Elemento input a marcar
   * @param {HTMLElement} errorElement - Contenedor del mensaje de error
   * @param {string} mensaje - Mensaje descriptivo del error
   */
  function mostrarError(input, errorElement, mensaje) {
    input.classList.remove("input-success");
    input.classList.add("input-error");
    input.setAttribute("aria-invalid", "true");

    if (errorElement) {
      errorElement.textContent = mensaje;
      errorElement.classList.add("visible");
    }
  }

  /**
   * Limpia el estado de error y marca el input como válido
   * @param {HTMLInputElement} input - Elemento input a limpiar
   * @param {HTMLElement} errorElement - Contenedor del mensaje de error
   */
  function limpiarError(input, errorElement) {
    input.classList.remove("input-error");
    input.classList.add("input-success");
    input.removeAttribute("aria-invalid");

    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove("visible");
    }
  }

  /**
   * Valida el campo de Correo Electrónico
   * @returns {boolean} true si es válido, false en caso contrario
   */
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

  /**
   * Valida el campo de Contraseña
   * @returns {boolean} true si es válido, false en caso contrario
   */
  function validarPassword() {
    const valor = passwordInput.value;

    if (valor.trim() === "") {
      mostrarError(passwordInput, passwordError, "La contraseña es obligatoria.");
      return false;
    }

    if (valor.length < 6) {
      mostrarError(passwordInput, passwordError, "La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    limpiarError(passwordInput, passwordError);
    return true;
  }

  /**
   * Muestra un mensaje global en la alerta superior del formulario
   * @param {string} mensaje - Texto a mostrar
   * @param {'success'|'error'} tipo - Tipo de mensaje
   */
  function mostrarAlerta(mensaje, tipo) {
    if (!loginAlert) return;

    loginAlert.textContent = mensaje;
    loginAlert.className = `login-alert alert-${tipo}`;
  }

  /**
   * Oculta la alerta global
   */
  function ocultarAlerta() {
    if (!loginAlert) return;
    loginAlert.className = "login-alert";
    loginAlert.textContent = "";
  }

  // ==========================================================================
  // Eventos en tiempo real (Feedback inmediato al usuario)
  // ==========================================================================

  // Al escribir: si el campo tenía un error, re-validar dinámicamente
  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("input-error")) {
      validarEmail();
    }
  });

  emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() !== "") {
      validarEmail();
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.classList.contains("input-error")) {
      validarPassword();
    }
  });

  passwordInput.addEventListener("blur", () => {
    if (passwordInput.value !== "") {
      validarPassword();
    }
  });

  // ==========================================================================
  // Evento de Envío del Formulario (Submit)
  // ==========================================================================
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ocultarAlerta();

    // Ejecutar todas las validaciones
    const esEmailValido = validarEmail();
    const esPasswordValido = validarPassword();

    // Si alguno no es válido, enfocar el primer campo con error
    if (!esEmailValido || !esPasswordValido) {
      if (!esEmailValido) {
        emailInput.focus();
      } else {
        passwordInput.focus();
      }
      return;
    }

    // Si todo es válido: simular inicio de sesión exitoso
    mostrarAlerta("¡Inicio de sesión exitoso! Redirigiendo...", "success");

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Iniciando sesión...";
    }

    // Guardar sesión simulada en sessionStorage
    sessionStorage.setItem("usuarioNutriVida", emailInput.value.trim());

    // Redireccionar al inicio tras 1.5 segundos
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
});