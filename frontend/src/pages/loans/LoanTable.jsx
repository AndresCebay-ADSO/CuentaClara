function LoanTable({ loans, persons, onEdit, onDelete }) {
  const getPersonName = (id) => {
    const person = persons.find((p) => p.id == id)
    return person ? person.nombre : "Desconocido"
  }

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-3">Persona</th>
            <th className="p-3">Monto</th>
            <th className="p-3">Fecha</th>
            <th className="p-3">Estado</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {loans.length === 0 ? (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-400">
                No hay préstamos
              </td>
            </tr>
          ) : (
            loans.map((l) => (
              <tr key={l.id} className="border-b">
                <td className="p-3">{getPersonName(l.personaId)}</td>
                <td className="p-3">${l.monto}</td>
                <td className="p-3">{l.fecha}</td>
                <td className="p-3">{l.estado}</td>

                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => onEdit(l)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => onDelete(l.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default LoanTable