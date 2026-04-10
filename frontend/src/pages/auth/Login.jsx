import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = () => {
    const ok = login(form.email, form.password)
    if (ok) navigate("/")
    else alert("Credenciales incorrectas")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#f5f3ef]">

      <div className="bg-white p-8 rounded-xl shadow w-[350px]">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Iniciar Sesión
        </h2>

        <input
          placeholder="Correo"
          onChange={(e) => setForm({...form, email: e.target.value})}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setForm({...form, password: e.target.value})}
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#d97706] text-white py-3 rounded"
        >
          Entrar
        </button>

        <div className="text-sm mt-4 text-center">
          
          <Link to="/reset">Olvidé contraseña</Link>
        </div>
      </div>

    </div>
  )
}

export default Login