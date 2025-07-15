import { useState } from "react";
import { ComponenteForm } from "./src/components/ComponenteForm";
import ComponenteHermano from "./src/components/ComponenteHermano";
import { CicloVida } from "./src/components/CicloVida";
import { ComponenteFech } from "./src/components/ComponenteFech";
import { FormUser } from "./src/components/FormUser";
const App = () => {
  const [escoger, setEscoger] = useState();
  const [showChild, setShowChild]= useState();
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
      <button onClick={()=> setShowChild(!showChild)}>Mostrar Hijo</button>
      {showChild && <CicloVida></CicloVida>}
      <h1>Componente Fetch() que llama a una API Rest</h1>
      <ComponenteFech></ComponenteFech>
      <h1>Formulario Usuario</h1>
      <FormUser></FormUser>

    </>
  );
};

export default App;
