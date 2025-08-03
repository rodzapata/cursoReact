import React from "react";
import ComponenteHijo from "./ComponenteHijo";

const ComponenteIntermedio = () => {
  return (
    <div>
      <h3>Intermedio no recibe props</h3>
      <ComponenteHijo></ComponenteHijo>
    </div>
  );
};

export default ComponenteIntermedio;
