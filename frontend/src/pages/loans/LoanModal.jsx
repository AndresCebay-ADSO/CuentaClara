import { useState, useEffect } from "react"

function LoanModal({ onClose, onSave, persons, initialData }) {
  const [form, setForm] = useState({
    personaId: "",
    monto: "",
    fecha: "",
  })

  useEffect(() => {
    if (initialData) setForm(initialData)
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
          {initialData ? "Editar Préstamo" : "Nuevo Préstamo"}
        </h2>

        <select
          name="personaId"
          value={form.personaId}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        >
          <option value="">Seleccione persona</option>
          {persons.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="monto"
          placeholder="Monto"
          value={form.monto}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
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

export default LoanModal