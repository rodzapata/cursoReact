import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ClientsPage from './pages/ClientsPage'
import SuppliersPage from './pages/SuppliersPage'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/clients" replace />} />

          <Route path="/clients" element={
            <ProtectedRoute module="clients" permission="read">
              <ClientsPage />
            </ProtectedRoute>
          } />

          <Route path="/suppliers" element={
            <ProtectedRoute module="suppliers" permission="read">
              <SuppliersPage />
            </ProtectedRoute>
          } />

          <Route path="/unauthorized" element={<h1 className="p-6">No autorizado 🚫</h1>} />
          <Route path="*" element={<h1 className="p-6">Página no encontrada</h1>} />
        </Routes>
      </div>
    </div>
  )
}
