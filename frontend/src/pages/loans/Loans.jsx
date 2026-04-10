import { useState, useEffect } from "react"
import LoanModal from "./LoanModal"
import LoanTable from "./LoanTable"

function Loans() {
  const [open, setOpen] = useState(false)
  const [loans, setLoans] = useState([])
  const [persons, setPersons] = useState([])
  const [editingLoan, setEditingLoan] = useState(null)

  // Cargar personas
  useEffect(() => {
    const data = localStorage.getItem("persons")
    if (data) setPersons(JSON.parse(data))
  }, [])

  // Cargar préstamos
  useEffect(() => {
    const data = localStorage.getItem("loans")
    if (data) setLoans(JSON.parse(data))
  }, [])

  // Guardar préstamos
  useEffect(() => {
    localStorage.setItem("loans", JSON.stringify(loans))
  }, [loans])

  const handleSave = (data) => {
    if (editingLoan) {
      const updated = loans.map((l) =>
        l.id === editingLoan.id ? { ...data, id: l.id } : l
      )
      setLoans(updated)
    } else {
      setLoans([...loans, { ...data, id: Date.now(), estado: "Pendiente" }])
    }

    setOpen(false)
    setEditingLoan(null)
  }

  const handleEdit = (loan) => {
    setEditingLoan(loan)
    setOpen(true)
  }

  const handleDelete = (id) => {
    if (!window.confirm("¿Eliminar este préstamo?")) return
    setLoans(loans.filter((l) => l.id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Préstamos</h1>

      <button
        onClick={() => {
          setEditingLoan(null)
          setOpen(true)
        }}
        className="bg-[#d97706] text-white px-6 py-3 rounded-lg text-lg mb-6"
      >
        💰 Registrar Préstamo
      </button>

      <LoanTable
        loans={loans}
        persons={persons}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {open && (
        <LoanModal
          onClose={() => {
            setOpen(false)
            setEditingLoan(null)
          }}
          onSave={handleSave}
          persons={persons}
          initialData={editingLoan}
        />
      )}
    </div>
  )
}

export default Loans