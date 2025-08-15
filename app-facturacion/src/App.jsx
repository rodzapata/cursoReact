import './App.css'
import { FacturasPage } from './pages/FacturasPage'
import ClientesPage from './pages/ClientesPage'
import DashboardPage from './pages/DashboardPage'
import NuevoClientePage from './pages/NuevoClientePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BarraDeNAvegacion } from './components/BarraDeNAvegacion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { CssBaseline } from '@mui/material'
import AppLayout from './layout/AppLayout/AppLayout'
import Form1 from './layout/AppLayout/Form1'
import ClientForm from './layout/ClientForm/ClientForm'
import CardPaper from './components/CardPaper'
//import AppLayout from './layout/AppLayout/AppLayout'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="facturas" element={<FacturasPage />} />
          <Route path="clientes" element={<ClientesPage />} />
          <Route path="clientes/nuevo" element={<NuevoClientePage />} /> {/* <-- AÑADE ESTA LÍNEA */}
          <Route path="*" element={<h1>Página no encontrada (404)</h1>} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
