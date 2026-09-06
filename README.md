# 🥦 NutriVida — Clínica Nutricional

Sitio web estático de una clínica nutricional ubicada en Temuco, Región de La Araucanía, Chile.
Desarrollado con **HTML, CSS y JavaScript vanilla**, sin frameworks ni dependencias externas.

---

## 📁 Estructura del Proyecto

```
Nutri/
├── index.html          # Página principal
├── servicios.html      # Catálogo de planes y servicios
├── servicio.html       # Detalle de cada servicio
├── login.html          # Formulario de inicio de sesión
├── registro.html       # Formulario de registro de usuario
│
├── css/
│   └── styles.css      # Hoja de estilos única para todo el sitio
│
├── js/
│   ├── contacto.js     # Validación del formulario de contacto
│   ├── login.js        # Validación del formulario de login
│   ├── registro.js     # Validación del formulario de registro
│   └── servicio.js     # Mostrar/ocultar información adicional por servicio
│
└── assets/
    ├── img/            # Imágenes del sitio (logo, profesionales, servicios)
    └── video/          # Videos embebidos
```

---

## 📄 Páginas

| Archivo | Descripción |
|---|---|
| `index.html` | Portada, especialidades, equipo profesional, video y contacto |
| `servicios.html` | Grilla con todos los planes nutricionales disponibles |
| `servicio.html` | Detalle completo de cada plan (precio, profesional, info adicional) |
| `login.html` | Acceso de usuarios registrados |
| `registro.html` | Creación de nueva cuenta de usuario |

---

## 🎨 CSS — `styles.css`

Un único archivo CSS organizado en **21 secciones numeradas** con comentarios:

| # | Sección |
|---|---|
| 1 | Configuración general (`*`, `body`, `img`, `.contenedor`) |
| 2 | Encabezado (`header`, `.encabezado`) |
| 3 | Logo (`.logo img`) |
| 4 | Menú de navegación (`.menu`) |
| 5 | Botones de acceso (`.boton-login`, `.boton-registro`) |
| 6 | Secciones generales (`.seccion`, `.etiqueta`) |
| 7 | Portada / Hero (`.portada`, `.portada-contenido`) |
| 8 | Quiénes somos (`.quienes-somos-contenido`) |
| 9 | Valores (`.valores`, `.lista-valores`) |
| 10 | Especialidades (`.especialidades`, `.lista-especialidades`) |
| 11 | Estadísticas (`.estadisticas`) |
| 12 | Testimonios (`.testimonios`) |
| 13 | Profesionales (`.profesionales`, `.tarjeta-profesional`) |
| 14 | Bienestar (`.bienestar-contenido`) |
| 15 | Video (`.video iframe`) |
| 16 | Contacto (`.contacto-contenido`, `.info-clinica`, `.formulario`) |
| 17 | Portada páginas internas (`.portada-interna`) |
| 18 | Catálogo de servicios (`.lista-servicios`, `.tarjeta-servicio`) |
| 19 | Orientación (`.orientacion-contenido`, `.boton-detalle`) |
| 20 | Botón "Ver más información" (`.btn-mas-info`) |
| 21 | Profesional pequeño en servicios |

---

## ⚙️ JavaScript

### `contacto.js`
Valida el formulario de contacto del `index.html` antes de enviarlo.

**Reglas aplicadas:**
- Nombre: obligatorio, máximo 100 caracteres, solo letras y tildes
- Correo: opcional, pero si se ingresa debe ser `@duoc.cl`, `@profesor.duoc.cl` o `@gmail.com`, máximo 100 caracteres
- Mensaje: obligatorio, máximo 500 caracteres

---

### `login.js`
Valida el formulario de inicio de sesión en `login.html`.

---

### `registro.js`
Valida el formulario de registro de usuario en `registro.html`.

---

### `servicio.js`
Controla la visibilidad de bloques de información adicional en `servicio.html`.

Cada plan tiene un botón **"Ver más información"** que muestra u oculta un `<div>` con detalles extra. Planes incluidos:

- Plan Integral Mensual (`botonIntegral`)
- Consulta Inicial (`botonConsulta`)
- Control de Peso (`botonPeso`)
- Nutrición Deportiva (`botonDeportiva`)
- Vegetariano y Vegano (`botonVegetariano`)
- Seguimiento (`botonSeguimiento`)

---

## 🗺️ Navegación del Sitio

```
index.html
  ├── #nosotros
  ├── #especialidades
  ├── #profesionales
  ├── #contacto
  ├── → servicios.html
  │       └── → servicio.html (detalle de cada plan)
  ├── → login.html
  └── → registro.html
```

---

## 🏥 Información de la Clínica

| Campo | Dato |
|---|---|
| **Nombre** | NutriVida |
| **Dirección** | Av. Alemania 01234, Edificio Médico, Temuco, Chile |
| **Teléfono / WhatsApp** | +56 9 8765 4321 |
| **Correo** | contacto@nutrivida.cl |
| **Horario** | Lunes a Viernes: 08:30 – 19:00 hrs · Sábados: 09:00 – 14:00 hrs |

---

## 🚀 Cómo Abrir el Proyecto

No requiere instalación ni servidor. Solo abre `index.html` en cualquier navegador moderno:

```
Doble clic en index.html
```

O desde VS Code con la extensión **Live Server**:

```
Clic derecho en index.html → Open with Live Server
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de todas las páginas |
| CSS3 | Estilos, layout con Flexbox, animaciones hover |
| JavaScript (ES6) | Validaciones de formularios e interactividad |

> Sin frameworks, sin librerías externas, sin dependencias de npm.
