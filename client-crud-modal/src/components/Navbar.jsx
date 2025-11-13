import { Link } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export default function Navbar() {
  const { user, loginAs } = useUserStore()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/clients" className="font-bold text-lg">CRM Modal</Link>
          <nav className="flex gap-2">
            <Link to="/clients" className="text-sm text-gray-600 hover:underline">Clientes</Link>
            <Link to="/suppliers" className="text-sm text-gray-600 hover:underline">Proveedores</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-700">Usuario: <strong>{user?.username}</strong></span>
          <select defaultValue={user?.role} onChange={(e) => loginAs(e.target.value)} className="text-sm px-2 py-1 rounded border">
            <option value="admin">Admin</option>
            <option value="clientManager">ClientManager</option>
            <option value="supplierManager">SupplierManager</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
      </div>
    </header>
  )
}
