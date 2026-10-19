
/*
  ÁTOMO: Boton

  Este componente recibe información mediante props.

  texto: contenido que verá el usuario.
  enlace: dirección a la que llevará el enlace.
  clase: clase CSS que conservará el diseño original.
*/

function Boton({ texto, enlace, clase }) {
  return (
    <a href={enlace} className={clase}>
      {texto}
    </a>
  )
}

// Permitimos que otros componentes importen Boton
export default Boton
