import { useEffect, useState } from 'react'
import { useUserStore } from '../store/userStore'
import ClientForm from '../components/ClientForm'
import Modal from '../components/Modal'
import clientsMock from '../assets/clients.json'

// Small client-id helper for mock create
let nextId = Math.max(...clientsMock.map(c => c.id)) + 1

export default function ClientsPage() {
  const { user } = useUserStore()
  const [clients, setClients] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [mode, setMode] = useState('create')
  const [selectedClient, setSelectedClient] = useState(null)

  useEffect(() => {
    // here we simulate fetching from /api/clients
    setClients(clientsMock)
  }, [])

  const fetchClients = () => setClients([...clients])

  const handleSubmit = (client) => {
    if (mode === 'create') {
      client.id = nextId++
      clients.push(client)
    } else {
      const idx = clients.findIndex(c => c.id === client.id)
      if (idx >= 0) clients[idx] = client
    }
    fetchClients()
    setShowModal(false)
  }

  const handleDelete = (id) => {
    if (!user.permissions.includes('delete')) return
    const filtered = clients.filter(c => c.id !== id)
    setClients(filtered)
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Gestión de Clientes</h2>

      {user.permissions.includes('create') && (
        <button
          onClick={() => { setMode('create'); setSelectedClient(null); setShowModal(true) }}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
        >
          + Nuevo Cliente
        </button>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Apellido</th>
              <th className="border p-2">Correo</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(c => (
              <tr key={c.id} className="border-t">
                <td className="border p-2">{c.firstName}</td>
                <td className="border p-2">{c.lastName}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2 flex gap-2">
                  {user.permissions.includes('update') && (
                    <button
                      onClick={() => { setMode('edit'); setSelectedClient(c); setShowModal(true) }}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                  )}
                  {user.permissions.includes('delete') && (
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <Modal title={mode === 'create' ? 'Crear Cliente' : 'Editar Cliente'} onClose={() => setShowModal(false)}>
          <ClientForm mode={mode} clientData={selectedClient} onSubmit={handleSubmit} />
        </Modal>
      )}
    </div>
  )
}
