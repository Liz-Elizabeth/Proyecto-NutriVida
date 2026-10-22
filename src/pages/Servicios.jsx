
/*
  PÁGINA: Servicios.jsx

  Representa el archivo servicios.html original.
  Reúne los tres organismos de esta página,
  manteniendo el diseño y el orden original.
*/

// Importamos la portada de Servicios
import PortadaServicios from '../components/organismos/PortadaServicios.jsx'

// Importamos el catálogo con las seis tarjetas
import CatalogoServicios from '../components/organismos/CatalogoServicios.jsx'

// Importamos la sección de orientación
import OrientacionServicios from '../components/organismos/OrientacionServicios.jsx'

function Servicios() {
  return (
    <main>

      {/* Primera sección: portada de Servicios */}
      <PortadaServicios />

      {/* Segunda sección: catálogo con los seis servicios */}
      <CatalogoServicios />

      {/* Tercera sección: orientación para elegir un servicio */}
      <OrientacionServicios />

    </main>
  )
}

// Permite importar esta página desde App.jsx
export default Servicios
