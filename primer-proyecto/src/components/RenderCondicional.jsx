import React from 'react'

const isActive=true
const respuesta=isActive? "Activo" : "Desactivo" ;

export const RenderCondicional = () => {
  return (
    <>
    <h1>Renderizado condicional</h1>
    {isActive && <h1>Se muestra el mensaje</h1>}
    </>
  )
}
