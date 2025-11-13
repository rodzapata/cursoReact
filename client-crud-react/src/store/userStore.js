import { create } from 'zustand'

export const useUserStore = create((set) => ({
  user: {
    name: 'Rodney',
    role: 'editor',
    permissions: ['read', 'update'] // example permissions
  },
  setUser: (user) => set({ user })
}))
