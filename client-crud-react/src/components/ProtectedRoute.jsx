import { Navigate } from 'react-router-dom'
import { useUserStore } from '../store/userStore'

export default function ProtectedRoute({ permission, children }) {
  const { user } = useUserStore()
  if (!user.permissions.includes(permission)) {
    return <Navigate to="/unauthorized" />
  }
  return children
}
