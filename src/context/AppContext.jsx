import { createContext, useContext, useState } from 'react'

const AppContext = createContext({})

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const showError = (message) => {
    setError(message)
    setTimeout(() => setError(null), 5000)
  }

  const clearError = () => {
    setError(null)
  }

  const value = {
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    loading,
    setLoading,
    error,
    showError,
    clearError
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
