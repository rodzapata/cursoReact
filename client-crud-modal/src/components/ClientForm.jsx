import { useState, useEffect } from 'react'

export default function ClientForm({ initialData, onSubmit, onCancel }) {
  const [client, setClient] = useState({ firstName: '', lastName: '', email: '' })

  useEffect(() => {
    if (initialData) setClient(initialData)
    else setClient({ firstName: '', lastName: '', email: '' })
  }, [initialData])

  const handleChange = (e) => setClient({ ...client, [e.target.name]: e.target.value })

  const handleSubmit = (e) => { e.preventDefault(); onSubmit(client) }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="text-xl font-semibold">{initialData ? 'Editar Cliente' : 'Nuevo Cliente'}</h3>
      <input name="firstName" placeholder="Nombre" value={client.firstName} onChange={handleChange} className="border p-2 rounded w-full" required />
      <input name="lastName" placeholder="Apellido" value={client.lastName} onChange={handleChange} className="border p-2 rounded w-full" required />
      <input name="email" type="email" placeholder="Correo" value={client.email} onChange={handleChange} className="border p-2 rounded w-full" required />
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
      </div>
    </form>
  )
}
