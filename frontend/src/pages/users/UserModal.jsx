import { useState, useEffect } from "react"

function UserModal({ onClose, onSave, editUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  useEffect(() => {
    if (editUser) setForm(editUser)
  }, [editUser])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-xl mb-4">
          {editUser ? "Editar Usuario" : "Nuevo Usuario"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="name" placeholder="Nombre" onChange={handleChange} value={form.name} className="border p-2 rounded" />
          <input name="email" placeholder="Correo" onChange={handleChange} value={form.email} className="border p-2 rounded" />
          <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} value={form.password} className="border p-2 rounded" />

          <div className="flex justify-end gap-2">
            <button onClick={onClose} type="button">Cancelar</button>
            <button className="bg-[#8b5e3c] text-white px-4 py-2 rounded">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserModal