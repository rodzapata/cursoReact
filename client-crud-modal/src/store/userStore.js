import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: {
    username: 'admin',
    role: 'admin',
    permissions: {
      clients: ['create', 'read', 'update', 'delete'],
      suppliers: ['create', 'read', 'update', 'delete']
    }
  },
  setUser: (user) => set({ user }),
  loginAs: (role) => {
    let user = null
    switch (role) {
      case 'admin':
        user = {
          username: 'admin',
          role: 'admin',
          permissions: {
            clients: ['create', 'read', 'update', 'delete'],
            suppliers: ['create', 'read', 'update', 'delete']
          }
        }
        break
      case 'clientManager':
        user = {
          username: 'clientManager',
          role: 'clientManager',
          permissions: {
            clients: ['create', 'read'],
            suppliers: ['read']
          }
        }
        break
      case 'supplierManager':
        user = {
          username: 'supplierManager',
          role: 'supplierManager',
          permissions: {
            clients: ['read'],
            suppliers: ['read', 'update']
          }
        }
        break
      case 'viewer':
        user = {
          username: 'viewer',
          role: 'viewer',
          permissions: {
            clients: ['read'],
            suppliers: ['read']
          }
        }
        break
      default:
        user = { username: 'guest', role: 'guest', permissions: { clients: [], suppliers: [] } }
    }
    set({ user })
  }
}))
