import { Navigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export default function ProtectedRoute({ module, permission, children }) {
  const { user } = useUserStore()
  const allowed = user?.permissions?.[module]?.includes(permission)
  if (!allowed) return <Navigate to="/unauthorized" replace />
  return children
}
