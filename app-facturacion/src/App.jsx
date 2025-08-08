import './App.css'
import { FacturasPage } from './pages/FacturasPage'
import { ClientesPage } from './pages/ClientesPage'
import { DashboardPage } from './pages/DashboardPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { BarraDeNAvegacion } from './components/BarraDeNAvegacion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Layout  from './components/Layout'
import { CssBaseline } from '@mui/material'

function App() {

  return (
    <>
      <CssBaseline /> {/* Aplica estilos base consistentes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardPage />} /> {/* Página principal */}
            <Route path="facturas" element={<FacturasPage />} />
            <Route path="clientes" element={<ClientesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
