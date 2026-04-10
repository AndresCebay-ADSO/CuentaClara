import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
  const savedSession = localStorage.getItem("sessionUser")
  if (savedSession) {
    setUser(JSON.parse(savedSession))
  }

  // 🔥 CREAR USUARIO POR DEFECTO SI NO EXISTE
  const users = JSON.parse(localStorage.getItem("users"))

  if (!users || users.length === 0) {
    const defaultUser = {
      id: 1,
      name: "Administrador",
      email: "admin@admin.com",
      password: "123456"
    }

    localStorage.setItem("users", JSON.stringify([defaultUser]))

    console.log("⚠️ Usuario por defecto creado:")
    console.log("Email: admin@admin.com")
    console.log("Password: 123456")
  }
}, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || []

    const found = users.find(
      u => u.email === email && u.password === password
    )

    if (found) {
      setUser(found)
      localStorage.setItem("sessionUser", JSON.stringify(found))
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("sessionUser")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}