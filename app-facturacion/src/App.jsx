import './App.css'
import { FacturasPage } from './pages/FacturasPage'
import { ClientesPage } from './pages/ClientesPage'
import { DashboardPage } from './pages/DashboardPage'
import { NotFoundPage } from './pages/NotFoundPage'
import {BarraDeNAvegacion} from './components/BarraDeNAvegacion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>App facturacion</h1>
      {
        /*
      <Contador />
      <ToggleVisibilidad />
      <ListadoFacturas/>

      <Acordion/>
        */
      }
      <BrowserRouter>
        <BarraDeNAvegacion />
        <div className="Container">
          <Routes>
            <Route path='/' element={<DashboardPage />} />
            <Route path='facturas' element={<FacturasPage />} />
            <Route path='clientes' element={<ClientesPage />} />
            <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
