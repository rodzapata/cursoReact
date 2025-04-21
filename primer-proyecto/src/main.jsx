import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentePrueba from './ComponentePrueba'
import { Componente2 } from './Componente2'
import { Variables } from './Variables'
import {Fragmento} from './Fragmento'
import './style.css' 
import { PrimerComponente } from './PrimerComponente'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente titulo="Curso de React" subtitulo={10} />
    {/* <PrimerComponente  /> */}
  </React.StrictMode>,
)
