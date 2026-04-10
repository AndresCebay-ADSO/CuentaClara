import { useState, useEffect } from "react"
import PaymentModal from "./PaymentModal"
import PaymentTable from "./PaymentTable"

function Payments() {
  const [open, setOpen] = useState(false)
  const [payments, setPayments] = useState([])
  const [loans, setLoans] = useState([])
  const [persons, setPersons] = useState([])

  // Cargar datos
  useEffect(() => {
    const p = localStorage.getItem("payments")
    const l = localStorage.getItem("loans")
    const per = localStorage.getItem("persons")

    if (p) setPayments(JSON.parse(p))
    if (l) setLoans(JSON.parse(l))
    if (per) setPersons(JSON.parse(per))
  }, [])

  // Guardar pagos
  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments))
  }, [payments])

  // Guardar cambios en préstamos
  useEffect(() => {
    localStorage.setItem("loans", JSON.stringify(loans))
  }, [loans])

  const handleSave = (data) => {
    const newPayment = {
      ...data,
      id: Date.now(),
    }

    // actualizar pagos
    const updatedPayments = [...payments, newPayment]
    setPayments(updatedPayments)

    // actualizar préstamo
    const updatedLoans = loans.map((loan) => {
      if (loan.id == data.loanId) {
        const totalPagado = updatedPayments
          .filter((p) => p.loanId == loan.id)
          .reduce((sum, p) => sum + Number(p.monto), 0)

        const saldo = loan.monto - totalPagado

        return {
          ...loan,
          pagado: totalPagado,
          saldo: saldo,
          estado: saldo <= 0 ? "Pagado" : "Pendiente",
        }
      }
      return loan
    })

    setLoans(updatedLoans)
    setOpen(false)
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Pagos</h1>

      <button
        onClick={() => setOpen(true)}
        className="bg-[#d97706] text-white px-6 py-3 rounded-lg text-lg mb-6"
      >
        💵 Registrar Pago
      </button>

      <PaymentTable
        payments={payments}
        loans={loans}
        persons={persons}
      />

      {open && (
        <PaymentModal
          onClose={() => setOpen(false)}
          onSave={handleSave}
          loans={loans}
          persons={persons}
        />
      )}
    </div>
  )
}

export default Payments