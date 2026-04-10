import { useEffect, useState } from "react"
import jsPDF from "jspdf"

function ReportView({ person }) {
  const [loans, setLoans] = useState([])
  const [payments, setPayments] = useState([])

  useEffect(() => {
    const l = JSON.parse(localStorage.getItem("loans") || "[]")
    const p = JSON.parse(localStorage.getItem("payments") || "[]")

    const personLoans = l.filter(loan => loan.personaId == person.id)
    const personPayments = p.filter(pay => 
      personLoans.some(l => l.id == pay.loanId)
    )

    setLoans(personLoans)
    setPayments(personPayments)
  }, [person])

  const totalPrestado = loans.reduce((s, l) => s + Number(l.monto), 0)
  const totalPagado = loans.reduce((s, l) => s + Number(l.pagado || 0), 0)
  const saldo = totalPrestado - totalPagado

  // 📄 GENERAR PDF
  const generatePDF = () => {
    const doc = new jsPDF()

    doc.text("Reporte Financiero", 10, 10)
    doc.text(`Persona: ${person.nombre}`, 10, 20)

    doc.text(`Total Prestado: $${totalPrestado}`, 10, 30)
    doc.text(`Total Pagado: $${totalPagado}`, 10, 40)
    doc.text(`Saldo: $${saldo}`, 10, 50)

    doc.save(`reporte_${person.nombre}.pdf`)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold mb-4">
        {person.nombre}
      </h2>

      {/* RESUMEN */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-gray-500">Prestado</p>
          <h3 className="text-lg font-bold">${totalPrestado}</h3>
        </div>

        <div>
          <p className="text-gray-500">Pagado</p>
          <h3 className="text-green-600 font-bold">${totalPagado}</h3>
        </div>

        <div>
          <p className="text-gray-500">Saldo</p>
          <h3 className="text-red-500 font-bold">${saldo}</h3>
        </div>
      </div>

      {/* LISTA */}
      <h3 className="font-semibold mb-2">Préstamos</h3>

      <ul className="mb-4">
        {loans.map(l => (
          <li key={l.id}>
            ${l.monto} - {l.estado}
          </li>
        ))}
      </ul>

      {/* BOTÓN PDF */}
      <button
        onClick={generatePDF}
        className="bg-[#d97706] text-white px-6 py-2 rounded"
      >
        📄 Descargar PDF
      </button>

    </div>
  )
}

export default ReportView