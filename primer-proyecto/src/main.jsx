import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentePrueba from './ComponentePrueba'
import { Componente2 } from './Componente2'
import { Variables } from './Variables'
import {Fragmento} from './Fragmento'
import './style.css' 
import { PrimerComponente } from './PrimerComponente'
import { FotoCard } from './FotoCard'
FotoCard
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimerComponente titulo="Curso de React" subtitulo={10} />
    <FotoCard></FotoCard>
  </React.StrictMode>
);

