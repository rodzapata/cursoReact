import React from 'react'
import PropTypes from 'prop-types'
const familiy=["rodney","cecilia","juan","samuel"];

export const PrimerComponente = ({titulo, subtitulo=0}) => {
  return (
    <>
    <h1>el titulo es : {titulo}</h1>
    <h1>subtitulo es : {subtitulo +1 }</h1>

    <ul>
      {
        familiy.map((name, index)=>(<li key={index}>{name}</li>))
      }
    </ul>
    </>
  )
}

PrimerComponente.PropTypes={
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired
}

PrimerComponente.defaultProps={
    titulo:"titulo por default",
    subtitulo:"subtitulo por default"

}