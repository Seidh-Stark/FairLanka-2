import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      setUser({ token })
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    const token = 'dummy_token'
    localStorage.setItem('auth_token', token)
    setUser({ token })
    return { success: true }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setUser(null)
  }

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
