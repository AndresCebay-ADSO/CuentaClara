import { useState, useEffect } from "react"

function PersonModal({ onClose, onSave, initialData }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
  })

  useEffect(() => {
    if (initialData) {
      setForm(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
        
        <h2 className="text-xl font-semibold mb-4">
          {initialData ? "Editar Persona" : "Nueva Persona"}
        </h2>

        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          name="direccion"
          placeholder="Dirección"
          value={form.direccion}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancelar
          </button>

          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 bg-[#d97706] text-white rounded"
          >
            Guardar
          </button>
        </div>

      </div>
    </div>
  )
}

export default PersonModal