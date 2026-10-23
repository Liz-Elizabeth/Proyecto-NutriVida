# Plan de Pruebas — NutriVida

**Proyecto:** Sitio web Clínica Nutricional NutriVida  
**Etapa:** Segunda evaluación — Migración de HTML, CSS y JavaScript a React  
**Fecha de ejecución:** 22/10/2026  
**Estado:** Pruebas automatizadas ejecutadas; pruebas manuales pendientes

## 1. Objetivo

Verificar que las funcionalidades implementadas en NutriVida cumplan con los comportamientos esperados, detectar errores y documentar los resultados de la validación del proyecto migrado a React. Se comprueban reglas de validación, comportamiento de formularios, edición de perfil, operaciones del carrito, administración temporal de servicios, página de error 404 y enrutamiento.

## 2. Alcance y herramientas

- **Aplicación:** React, Vite, React Router y React Bootstrap.
- **Herramientas de prueba:** Vitest 5.0.5, React Testing Library, jsdom y Visual Studio Code.
- **Metodología:** AAA (Arrange, Act, Assert: Preparar, Actuar y Comprobar).
- **Persistencia local:** `localStorage` en las funciones que lo utilizan.
- **Comando para ejecutar los tests:** `npm.cmd exec -- vitest run`.
- **Ubicación de los tests:** `src/tests/`.

Las pruebas se ejecutan en un entorno de pruebas automatizado. No reemplazan la revisión visual o funcional completa en un navegador real.

## 3. Registro de pruebas automatizadas

### 3.1. Validaciones de Registro

**Código probado:** `src/validaciones/validarRegistro.js`  
**Archivo de pruebas:** `src/tests/validarRegistro.test.js`  
**Resultado:** 15 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP01 | Registrar un formulario con datos válidos | Aceptar los datos | Aprobado |
| CP02 | RUN vacío | Rechazar el dato | Aprobado |
| CP03 | RUN con formato incorrecto | Rechazar el dato | Aprobado |
| CP04 | Nombre vacío | Mostrar error | Aprobado |
| CP05 | Nombre con números | Mostrar error | Aprobado |
| CP06 | Apellidos vacíos | Mostrar error | Aprobado |
| CP07 | Correo con dominio no permitido | Mostrar error | Aprobado |
| CP08 | Región sin seleccionar | Solicitar región | Aprobado |
| CP09 | Comuna sin seleccionar | Solicitar comuna | Aprobado |
| CP10 | Objetivo nutricional sin seleccionar | Solicitar objetivo | Aprobado |
| CP11 | Dirección vacía | Mostrar error | Aprobado |
| CP12 | Contraseña demasiado corta | Rechazarla | Aprobado |
| CP13 | Contraseñas diferentes | Mostrar error | Aprobado |
| CP14 | Fecha con año de seis cifras | Rechazar fecha | Aprobado |
| CP15 | Fecha inexistente | Rechazar fecha | Aprobado |

### 3.2. Validaciones de Login

**Código probado:** `src/validaciones/validarLogin.js`  
**Archivo de pruebas:** `src/tests/validarLogin.test.js`  
**Resultado:** 10 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP16 | Correo vacío | Mostrar error | Aprobado |
| CP17 | Correo que supera 100 caracteres | Rechazarlo | Aprobado |
| CP18 | Dominio de correo no permitido | Rechazarlo | Aprobado |
| CP19 | Contraseña vacía | Mostrar error | Aprobado |
| CP20 | Contraseña de tres caracteres | Rechazarla | Aprobado |
| CP21 | Contraseña de once caracteres | Rechazarla | Aprobado |
| CP22 | Correo válido del dominio duoc.cl | Aceptar formato | Aprobado |
| CP23 | Correo válido del dominio gmail.com | Aceptar formato | Aprobado |
| CP24 | Correo válido del dominio profesor.duoc.cl | Aceptar formato | Aprobado |
| CP25 | Contraseña de diez caracteres | Aceptar longitud válida | Aprobado |

> Estas diez pruebas revisan las reglas de entrada del formulario, no la autenticación completa del usuario.

### 3.3. Formulario de Contacto

**Componente probado:** `src/components/moleculas/FormularioContacto.jsx`  
**Archivo de pruebas:** `src/tests/FormularioContacto.test.jsx`  
**Resultado:** 4 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP26 | Enviar campos vacíos | Mostrar error | Aprobado |
| CP27 | Ingresar un correo inválido | Mostrar error | Aprobado |
| CP28 | Completar y enviar datos válidos | Confirmar validación y limpiar campos | Aprobado |
| CP29 | Escribir después de un error | Quitar el mensaje anterior | Aprobado |

> El formulario es una demostración y no envía correos reales.

### 3.4. Mi Perfil

**Componente probado:** `src/pages/Perfil.jsx`  
**Archivo de pruebas:** `src/tests/Perfil.test.jsx`  
**Resultado:** 6 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP30 | Entrar al perfil | Campos bloqueados inicialmente | Aprobado |
| CP31 | Presionar «Editar datos» | Habilitar campos sin guardar automáticamente | Aprobado |
| CP32 | Cancelar la edición | Restaurar datos y no guardar | Aprobado |
| CP33 | Guardar una edición | Actualizar los datos y bloquear campos | Aprobado |
| CP34 | Abrir perfil sin paciente autenticado | Solicitar inicio de sesión | Aprobado |
| CP35 | Presionar «Cerrar sesión» | Invocar función de cierre de sesión | Aprobado |

> En estas pruebas las funciones de cuentas están simuladas mediante *mocks*; no se comprueba la persistencia real de esas funciones.

### 3.5. Carrito de servicios

**Componente probado:** `src/pages/Carrito.jsx`  
**Archivo de pruebas:** `src/tests/Carrito.test.jsx`  
**Resultado:** 9 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP36 | Abrir carrito sin productos | Mostrar carrito vacío | Aprobado |
| CP37 | Agregar un servicio | Mostrar cantidad 1 y precio correspondiente | Aprobado |
| CP38 | Aumentar la cantidad | Actualizar cantidad y total | Aprobado |
| CP39 | Disminuir la cantidad | No permitir cantidad inferior a 1 | Aprobado |
| CP40 | Agregar dos servicios distintos | Calcular suma de ambos precios | Aprobado |
| CP41 | Eliminar un servicio seleccionado | Mantener los otros servicios | Aprobado |
| CP42 | Vaciar el carrito | Mostrar carrito vacío | Aprobado |
| CP43 | Cargar un carrito previo | Recuperar datos desde `localStorage` | Aprobado |
| CP44 | Agregar un servicio y revisar almacenamiento | Guardar datos en `localStorage` | Aprobado |

### 3.6. Administración de servicios — CRUD

**Componente probado:** `src/components/organismos/GestionServicios.jsx`  
**Archivo de pruebas:** `src/tests/GestionServicios.test.jsx`  
**Resultado:** 8 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP45 | Abrir lista de servicios sin registros | Mostrar mensaje de lista vacía | Aprobado |
| CP46 | Crear servicio sin nombre | Rechazar datos | Aprobado |
| CP47 | Crear servicio con precio igual a cero | Rechazar precio | Aprobado |
| CP48 | Crear un servicio válido | Mostrar servicio, precio e imagen | Aprobado |
| CP49 | Editar nombre y precio | Mostrar cambios guardados | Aprobado |
| CP50 | Cancelar edición | Conservar datos originales | Aprobado |
| CP51 | Eliminar servicio | Quitar servicio de la lista | Aprobado |
| CP52 | Editar uno de dos servicios | No alterar el otro servicio | Aprobado |

> El CRUD usa `useState` para almacenamiento temporal: sus datos no se guardan en una base de datos ni persisten necesariamente entre recargas.

### 3.7. Página 404

**Componente probado:** `src/pages/NoEncontrada.jsx`  
**Archivo de pruebas:** `src/tests/NoEncontrada.test.jsx`  
**Resultado:** 4 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP53 | Abrir página 404 | Mostrar encabezado «404» | Aprobado |
| CP54 | Revisar el mensaje | Mostrar «Página no encontrada» | Aprobado |
| CP55 | Revisar «Volver al inicio» | Enlace apunta a `/` | Aprobado |
| CP56 | Pulsar el enlace de regreso | Navegar al inicio del enrutador simulado | Aprobado |

### 3.8. Navegación y protección de rutas

**Código probado:** `src/App.jsx` y `src/RutaProtegida.jsx`  
**Archivo de pruebas:** `src/tests/Navegacion.test.jsx`  
**Resultado:** 11 aprobadas, 0 fallidas.

| ID | Caso de prueba | Resultado esperado | Estado |
|---|---|---|---|
| CP57 | Abrir `/` | Cargar Inicio | Aprobado |
| CP58 | Abrir `/servicios` | Cargar Servicios | Aprobado |
| CP59 | Abrir `/servicio` | Cargar Detalle del Servicio | Aprobado |
| CP60 | Abrir `/login` | Cargar Login | Aprobado |
| CP61 | Abrir `/registro` | Cargar Registro | Aprobado |
| CP62 | Abrir `/carrito` | Cargar Carrito | Aprobado |
| CP63 | Abrir `/perfil` | Cargar Mi Perfil | Aprobado |
| CP64 | Abrir ruta inexistente | Cargar página 404 | Aprobado |
| CP65 | Entrar a `/administrador` sin sesión | Impedir mostrar panel | Aprobado |
| CP66 | Entrar a `/administrador` con sesión activa | Mostrar panel | Aprobado |
| CP67 | Cargar una ruta | Mantener Header y Footer | Aprobado |

> Las páginas, Header y Footer se simulan con *mocks* para comprobar la selección de rutas. `RutaProtegida.jsx` se prueba sin simular. Esto no verifica todos los enlaces reales del menú ni el diseño visual.

## 4. Resultado consolidado de la ejecución automatizada

**Última ejecución registrada:** 22/10/2026, 21:34:26 (hora local informada por Vitest)  
**Comando:** `npm.cmd exec -- vitest run`

| Archivo de prueba | Aprobadas | Fallidas |
|---|---:|---:|
| `validarRegistro.test.js` | 15 | 0 |
| `validarLogin.test.js` | 10 | 0 |
| `FormularioContacto.test.jsx` | 4 | 0 |
| `Perfil.test.jsx` | 6 | 0 |
| `Carrito.test.jsx` | 9 | 0 |
| `GestionServicios.test.jsx` | 8 | 0 |
| `NoEncontrada.test.jsx` | 4 | 0 |
| `Navegacion.test.jsx` | 11 | 0 |
| **TOTAL** | **67** | **0** |

- **Archivos ejecutados:** 8.
- **Pruebas ejecutadas:** 67.
- **Pruebas aprobadas:** 67.
- **Pruebas fallidas:** 0.
- **Duración informada:** 3,06 segundos.

## 5. Plan de pruebas manuales

Las siguientes verificaciones deben realizarse en un navegador real. **No se registran como aprobadas hasta ejecutarlas y revisar su resultado.**

| ID | Prueba manual | Procedimiento resumido | Estado |
|---|---|---|---|
| PM01 | Inicio | Abrir `/` y revisar texto, imágenes y enlaces | Pendiente |
| PM02 | Servicios | Abrir `/servicios` y revisar catálogo | Pendiente |
| PM03 | Detalle de servicio | Abrir `/servicio` y probar su interacción | Pendiente |
| PM04 | Registro | Completar formulario con datos válidos e inválidos | Pendiente |
| PM05 | Login | Probar acceso de paciente y administrador | Pendiente |
| PM06 | Panel de administración | Confirmar acceso autorizado y denegado | Pendiente |
| PM07 | CRUD del administrador | Crear, editar, cancelar y eliminar servicios en el navegador | Pendiente |
| PM08 | Carrito | Agregar, ajustar cantidades, eliminar y recargar | Pendiente |
| PM09 | Mi Perfil | Editar, guardar, cancelar y cerrar sesión | Pendiente |
| PM10 | Página 404 | Entrar a ruta desconocida y regresar al inicio | Pendiente |
| PM11 | Contacto | Verificar validación y aviso de demostración | Pendiente |
| PM12 | Responsive | Revisar menú, contenido y pie de página en móvil, tableta y escritorio | Pendiente |

## 6. Criterios de aceptación

- Las pruebas automatizadas deben finalizar sin fallos.
- Las validaciones deben rechazar entradas incorrectas y aceptar las válidas.
- Las interacciones deben actualizar la interfaz según la acción del usuario.
- Las operaciones de carrito deben mantener las cantidades, subtotales y totales correctos.
- Las rutas deben conducir a las páginas esperadas y el acceso al administrador debe estar protegido según la sesión de demostración.
- La interfaz debe revisarse en tamaños de pantalla diferentes y mantener la identidad visual del sitio original.
- Toda prueba manual debe documentarse con su resultado real; no se considerará aprobada únicamente por disponer de una prueba automatizada relacionada.

## 7. Observaciones y limitaciones

1. El proyecto corresponde a una experiencia académica de migración a React; varias funciones son demostrativas.
2. El formulario de Contacto valida datos, pero **no envía mensajes reales**.
3. El CRUD de administración utiliza `useState` y **no** una base de datos.
4. El carrito utiliza `localStorage` para conservar selecciones en el navegador.
5. Las pruebas de Mi Perfil emplean *mocks* para las funciones de cuenta; se debe comprobar el flujo completo de guardado y sesión en el navegador.
6. Las pruebas de navegación sustituyen las páginas, Header y Footer por versiones simuladas para aislar la configuración de rutas.
7. Las pruebas automatizadas no sustituyen los controles manuales de presentación, responsive, accesibilidad o uso real.
8. Los datos y credenciales de la demostración no representan una solución de autenticación segura para producción.

## 8. Conclusión

En la ejecución del **22/10/2026**, NutriVida registró **67 pruebas automatizadas aprobadas de un total de 67**, distribuidas en ocho archivos dentro de `src/tests/`. Se verificaron las principales reglas de validación, interacciones de formularios y componentes, operaciones del carrito, CRUD temporal de servicios, página 404, rutas y control de acceso del administrador.

La fase de **pruebas manuales continúa pendiente**. Una vez realizadas, este documento deberá actualizarse con los resultados obtenidos y los eventuales defectos corregidos.
