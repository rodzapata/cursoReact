import { useState } from "react";
import { ComponenteForm } from "./src/components/ComponenteForm";
import ComponenteHermano from "./src/components/ComponenteHermano";
import { CicloVida } from "./src/components/CicloVida";
import { ComponenteFech } from "./src/components/ComponenteFech";
import { FormUser } from "./src/components/FormUser";
import ComponenteHijo from "./src/components/ComponenteHijo";
import { ContadorContext } from "./src/components/ContadorContext";
import ComponenteIntermedio from "./src/components/ComponenteIntermedio";

import ClientForm from "./src/components/ClientForm";


const App = () => {
  const [escoger, setEscoger] = useState();
  const [showChild, setShowChild] = useState();
  const [cont, setCont] = useState(0);

  const incrementar = () => {
    setCont((c) => c + 1);
  };
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
      <h1>Ciclo de vida uso de usEfect()</h1>
      <button onClick={() => setShowChild(!showChild)}>Mostrar Hijo</button>
      {showChild && <CicloVida></CicloVida>}
      <h1>Componente Fetch() que llama a una API Rest</h1>
      <ComponenteFech></ComponenteFech>
      <h1>Formulario Usuario</h1>
      <FormUser></FormUser>
      <ContadorContext.Provider value={{ cont, incrementar }}>
        <h2>Contador es: {cont}</h2>
        <ComponenteHijo></ComponenteHijo>
      </ContadorContext.Provider>
            <ClientForm/>

            

    </>
  );
};

export default App;
