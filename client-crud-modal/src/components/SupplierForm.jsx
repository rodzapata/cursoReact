import { useState, useEffect } from 'react'

export default function SupplierForm({ initialData, onSubmit, onCancel }) {
  const [supplier, setSupplier] = useState({ companyName: '', contactName: '', phone: '', email: '' })

  useEffect(() => {
    if (initialData) setSupplier(initialData)
    else setSupplier({ companyName: '', contactName: '', phone: '', email: '' })
  }, [initialData])

  const handleChange = (e) => setSupplier({ ...supplier, [e.target.name]: e.target.value })

  const handleSubmit = (e) => { e.preventDefault(); onSubmit(supplier) }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <h3 className="text-xl font-semibold">{initialData ? 'Editar Proveedor' : 'Nuevo Proveedor'}</h3>
      <input name="companyName" placeholder="Empresa" value={supplier.companyName} onChange={handleChange} className="border p-2 rounded w-full" required />
      <input name="contactName" placeholder="Contacto" value={supplier.contactName} onChange={handleChange} className="border p-2 rounded w-full" required />
      <input name="phone" placeholder="Teléfono" value={supplier.phone} onChange={handleChange} className="border p-2 rounded w-full" required />
      <input name="email" type="email" placeholder="Correo" value={supplier.email} onChange={handleChange} className="border p-2 rounded w-full" required />
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">Cancelar</button>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
      </div>
    </form>
  )
}
