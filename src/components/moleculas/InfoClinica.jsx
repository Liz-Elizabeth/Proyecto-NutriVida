
/*
  MOLÉCULA: InfoClinica.jsx

  Muestra la información de contacto de NutriVida.
  Conserva los textos y clases CSS originales.
*/

function InfoClinica() {
  return (
    <div className="info-clinica">

      {/* Título y descripción */}
      <h3>Información de la Clínica</h3>

      <p>
        Visítanos en nuestras instalaciones o contáctanos
        por nuestros canales oficiales de atención.
      </p>

      {/* Dirección de la clínica */}
      <div className="info-item">
        <span className="info-icono">📍</span>
        <div>
          <strong>Dirección Clínica</strong>
          <p>Av. Alemania 01234, Edificio Médico, Temuco, Chile</p>
        </div>
      </div>

      {/* Teléfono y WhatsApp */}
      <div className="info-item">
        <span className="info-icono">📞</span>
        <div>
          <strong>Teléfono / WhatsApp</strong>
          <p>+56 9 8765 4321</p>
        </div>
      </div>

      {/* Correo electrónico */}
      <div className="info-item">
        <span className="info-icono">✉️</span>
        <div>
          <strong>Correo Electrónico</strong>
          <p>contacto@nutrivida.cl</p>
        </div>
      </div>

      {/* Horarios de atención */}
      <div className="info-item">
        <span className="info-icono">🕐</span>
        <div>
          <strong>Horarios de Atención</strong>
          <p>Lunes a Viernes: 08:30 - 19:00 hrs</p>
          <p>Sábados: 09:00 - 14:00 hrs</p>
        </div>
      </div>

    </div>
  )
}

// Permite utilizar InfoClinica desde Contacto.jsx
export default InfoClinica
