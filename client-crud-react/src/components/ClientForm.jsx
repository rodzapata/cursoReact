import { useState, useEffect } from 'react'

export default function ClientForm({ mode, clientData, onSubmit }) {
  const [formData, setFormData] = useState({
    id: undefined,
    firstName: '',
    lastName: '',
    email: ''
  })

  useEffect(() => {
    if (mode === 'edit' && clientData) {
      setFormData(clientData)
    } else if (mode === 'create') {
      setFormData({ id: undefined, firstName: '', lastName: '', email: '' })
    }
  }, [mode, clientData])

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        name="firstName"
        placeholder="Nombre"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="lastName"
        placeholder="Apellido"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700" type="submit">
        {mode === 'create' ? 'Crear Cliente' : 'Actualizar Cliente'}
      </button>
    </form>
  )
}
