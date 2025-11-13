import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientsPage from '../pages/ClientsPage'
import ProtectedRoute from '../components/ProtectedRoute'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={
          <ProtectedRoute permission="read">
            <ClientsPage />
          </ProtectedRoute>
        } />
        <Route path="/" element={<ClientsPage />} />
        <Route path="/unauthorized" element={<h1 className='p-6'>No autorizado 🚫</h1>} />
        <Route path="*" element={<h1 className='p-6'>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
