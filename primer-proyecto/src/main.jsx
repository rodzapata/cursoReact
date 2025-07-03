import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ComponentePrueba from "./ComponentePrueba";
import { Componente2 } from "./Componente2";
import { Variables } from "./Variables";
import { Fragmento } from "./Fragmento";
import "./style.css";
import { PrimerComponente } from "./PrimerComponente";
import { FotoCard } from "./FotoCard";
import { ComponenteForm } from "./components/ComponenteForm";
import App from "../App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
