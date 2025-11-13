import { useEffect, useState } from 'react'
import { useUserStore } from '../store/userStore'
import ClientForm from '../components/ClientForm'
import Modal from '../components/Modal'
import clientsMock from '../assets/clients.json'

let nextId = Math.max(...clientsMock.map(c => c.id)) + 1

export default function ClientsPage() {
  const { user } = useUserStore()
  const [clients, setClients] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [mode, setMode] = useState('create')
  const [selected, setSelected] = useState(null)

  useEffect(() => setClients(clientsMock), [])

  const can = (action) => user?.permissions?.clients?.includes(action)

  const handleSubmit = (client) => {
    if (mode === 'create') {
      client.id = nextId++
      setClients(prev => [...prev, client])
    } else {
      setClients(prev => prev.map(c => c.id === client.id ? client : c))
    }
    setShowModal(false)
  }

  const handleDelete = (id) => {
    if (!can('delete')) return
    setClients(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Clientes</h2>

      {can('create') && <button onClick={() => { setMode('create'); setSelected(null); setShowModal(true) }} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4">+ Nuevo Cliente</button>}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Nombre</th>
              <th className="border p-2 text-left">Correo</th>
              <th className="border p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(c => (
              <tr key={c.id} className="border-t">
                <td className="border p-2">{c.firstName} {c.lastName}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2 flex gap-2">
                  {can('update') && <button onClick={() => { setMode('edit'); setSelected(c); setShowModal(true) }} className="bg-blue-500 text-white px-2 py-1 rounded">Editar</button>}
                  {can('delete') && <button onClick={() => handleDelete(c.id)} className="bg-red-600 text-white px-2 py-1 rounded">Eliminar</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ClientForm initialData={mode === 'edit' ? selected : null} onSubmit={handleSubmit} onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  )
}
