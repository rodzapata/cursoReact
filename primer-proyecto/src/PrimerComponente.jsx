import React from "react";
import PropTypes from "prop-types";

const famiiy = ["rodney", "cecilia", "juan", "samuel"];
let variablePrueba = true;
let contenido;

export const PrimerComponente = ({ titulo, subtitulo = 0 }) => {
  variablePrueba ? (contenido = "verdadero") : (contenido = "falso");
  return (
    <>
      <h1>la variable es {contenido}</h1>
      <h1>El título es: {titulo}</h1>
      <h1>Subtítulo es: {subtitulo + 1}</h1>
      <ul>
        {famiiy.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.number.isRequired,
};

PrimerComponente.defaultProps = {
  titulo: "titulo por default",
  subtitulo: 0,
};
