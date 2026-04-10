import { useState } from "react"

function PaymentModal({ onClose, onSave, loans, persons }) {
  const [form, setForm] = useState({
    loanId: "",
    monto: "",
    fecha: "",
  })

  const getPersonName = (id) => {
    const person = persons.find((p) => p.id == id)
    return person ? person.nombre : ""
  }

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
          Registrar Pago
        </h2>

        <select
          name="loanId"
          value={form.loanId}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        >
          <option value="">Seleccione préstamo</option>
          {loans.map((l) => (
            <option key={l.id} value={l.id}>
              {getPersonName(l.personaId)} - ${l.monto}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="monto"
          placeholder="Monto a pagar"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-3"
        />

        <input
          type="date"
          name="fecha"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancelar
          </button>

          <button
            onClick={() => onSave(form)}
            className="bg-[#d97706] text-white px-4 py-2 rounded"
          >
            Guardar
          </button>
        </div>

      </div>
    </div>
  )
}

export default PaymentModal