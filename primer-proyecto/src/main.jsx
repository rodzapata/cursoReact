import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentePrueba from './ComponentePrueba'
import { Componente2 } from './Componente2'
import { Variables } from './Variables'
import {Fragmento} from './Fragmento'
import './style.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ComponentePrueba />
    <Componente2 />
    <Variables />
    <Fragmento />
  </React.StrictMode>,
)
