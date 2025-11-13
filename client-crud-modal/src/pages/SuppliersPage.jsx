import { useEffect, useState } from 'react'
import { useUserStore } from '../store/userStore'
import SupplierForm from '../components/SupplierForm'
import Modal from '../components/Modal'
import suppliersMock from '../assets/suppliers.json'

let nextId = Math.max(...suppliersMock.map(c => c.id)) + 1

export default function SuppliersPage() {
  const { user } = useUserStore()
  const [suppliers, setSuppliers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [mode, setMode] = useState('create')
  const [selected, setSelected] = useState(null)

  useEffect(() => setSuppliers(suppliersMock), [])

  const can = (action) => user?.permissions?.suppliers?.includes(action)

  const handleSubmit = (supplier) => {
    if (mode === 'create') {
      supplier.id = nextId++
      setSuppliers(prev => [...prev, supplier])
    } else {
      setSuppliers(prev => prev.map(s => s.id === supplier.id ? supplier : s))
    }
    setShowModal(false)
  }

  const handleDelete = (id) => {
    if (!can('delete')) return
    setSuppliers(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Proveedores</h2>

      {can('create') && <button onClick={() => { setMode('create'); setSelected(null); setShowModal(true) }} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4">+ Nuevo Proveedor</button>}

  <div className="overflow-x-auto">
    <table className="w-full border-collapse border">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2 text-left">Empresa</th>
          <th className="border p-2 text-left">Contacto</th>
          <th className="border p-2 text-left">Teléfono</th>
          <th className="border p-2 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map(s => (
          <tr key={s.id} className="border-t">
            <td className="border p-2">{s.companyName}</td>
            <td className="border p-2">{s.contactName}</td>
            <td className="border p-2">{s.phone}</td>
            <td className="border p-2 flex gap-2">
              {can('update') && <button onClick={() => { setMode('edit'); setSelected(s); setShowModal(true) }} className="bg-blue-500 text-white px-2 py-1 rounded">Editar</button>}
              {can('delete') && <button onClick={() => handleDelete(s.id)} className="bg-red-600 text-white px-2 py-1 rounded">Eliminar</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <SupplierForm initialData={mode === 'edit' ? selected : null} onSubmit={handleSubmit} onCancel={() => setShowModal(false)} />
      </Modal>
    </div>
  )
}
