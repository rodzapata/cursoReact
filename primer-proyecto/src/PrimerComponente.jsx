import React from 'react';
import PropTypes from 'prop-types';

const familiy = ["rodney", "cecilia", "juan", "samuel"];

export const PrimerComponente = ({ titulo, subtitulo = 0 }) => {
  return (
    <>
      <h1>El título es: {titulo}</h1>
      <h1>Subtítulo es: {subtitulo + 1}</h1>

      <ul>
        {
          familiy.map((name, index) => (<li key={index}>{name}</li>))
        }
      </ul>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired
};

PrimerComponente.defaultProps = {
  titulo: "titulo por default",
  subtitulo: 0
};
