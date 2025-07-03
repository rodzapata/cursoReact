import { useState } from "react";
import { ComponenteForm } from "./src/components/ComponenteForm";
import ComponenteHermano from "./src/components/ComponenteHermano";
const App = () => {
  const [escoger, setEscoger] = useState();

  const hadlenEscoger = (opEscogida) => {
    setEscoger(opEscogida);
  };

  return (
    <>
      <h1>Coponente principal</h1>
      <h2>El curso que escogio fue: {escoger}</h2>
      <ComponenteHermano nameCurso={escoger}> </ComponenteHermano>
      <ComponenteForm
        escogio={hadlenEscoger}
        nameCurso={escoger}
      ></ComponenteForm>
    </>
  );
};

export default App;
