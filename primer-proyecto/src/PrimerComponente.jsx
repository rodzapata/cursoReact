import React from 'react'
import PropTypes from 'prop-types'

export const PrimerComponente = ({titulo, subtitulo=0}) => {
  return (
    <>
    <h1>el titulo es : {titulo}</h1>
    <h1>subtitulo es : {subtitulo +1 }</h1>
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