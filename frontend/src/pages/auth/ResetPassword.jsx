import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ResetPassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")

  const handleReset = () => {
    const user = JSON.parse(localStorage.getItem("registeredUser"))
    user.password = password
    localStorage.setItem("registeredUser", JSON.stringify(user))

    alert("Contraseña actualizada")
    navigate("/login")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#f5f3ef]">
      
      <div className="bg-white p-8 rounded-xl shadow w-[350px]">
         <h2 className="text-xl mb-4 text-center">
          Correo
        </h2>
        <input 
          type="email"
          placeholder="Correo electrónico"
          className="w-full border p-3 mb-4 rounded"
        />
        <h2 className="text-xl mb-4 text-center">
          Nueva Contraseña
        </h2>

        <input
          type="password"
          placeholder="Nueva contraseña"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 mb-4 rounded"
        />
        
        <button
          onClick={handleReset}
          className="w-full bg-[#d97706] text-white py-3 rounded"
        >
          Guardar
        </button>
      </div>

    </div>
  )
}

export default ResetPassword