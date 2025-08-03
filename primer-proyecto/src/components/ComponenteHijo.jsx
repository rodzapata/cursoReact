import React, { useContext } from "react";
import { ContadorContext } from "./ContadorContext";

const ComponenteHijo = () => {
  const { incrementar } = useContext(ContadorContext);

  return (
    <div>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default ComponenteHijo;
