function PaymentTable({ payments, loans, persons }) {
  const getLoan = (id) => loans.find((l) => l.id == id)

  const getPersonName = (loanId) => {
    const loan = getLoan(loanId)
    if (!loan) return "N/A"
    const person = persons.find((p) => p.id == loan.personaId)
    return person ? person.nombre : "N/A"
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-3">Persona</th>
            <th className="p-3">Monto</th>
            <th className="p-3">Fecha</th>
          </tr>
        </thead>

        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-400">
                No hay pagos
              </td>
            </tr>
          ) : (
            payments.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-3">{getPersonName(p.loanId)}</td>
                <td className="p-3">${p.monto}</td>
                <td className="p-3">{p.fecha}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PaymentTable