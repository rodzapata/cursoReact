import React, { useState } from "react";

export const ComponenteForm = (props) => {
  //const [curso, setCurso] = useState();

  const hadlecmb = (e) => {
    const valor = e.target.value;
    //setCurso(valor);
    props.escogio(valor);
  };

  return (
    <div className="bordeCuadrado">
      <h2>Fomrulario de usuarios</h2>
      <form className="formUsuario">
        <label htmlFor="txtName">Nombre</label>
        <input type="text" name="txtName" id="txtName" />
        <label htmlFor="txtApellido">Apellido</label>
        <input type="text" name="txtApellido" id="txtApellido" /> <br />
        <label htmlFor="txtDireccion">Direccion</label>
        <input type="text" name="txtDireccion" id="txtDireccion" />
        <br />
        <label htmlFor="curso"></label>
        <select
          defaultValue="Python"
          name="cmbCurso"
          id="smbCurso"
          onChange={hadlecmb}
        >
          <option value="C#">C#</option>
          <option value="Spring Boot">Spring Boot</option>
          <option value="Python">Python</option>
        </select>
        <h2>Escogio el curso: {props.nameCurso}</h2>
      </form>
    </div>
  );
};
