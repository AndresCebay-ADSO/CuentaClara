function PersonTable({ persons, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="p-3">Nombre</th>
            <th className="p-3">Teléfono</th>
            <th className="p-3">Dirección</th>
            <th className="p-3 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {persons.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-400">
                No hay personas registradas
              </td>
            </tr>
          ) : (
            persons.map((p) => (
              <tr key={p.id} className="border-b">
                <td className="p-3">{p.nombre}</td>
                <td className="p-3">{p.telefono}</td>
                <td className="p-3">{p.direccion}</td>

                <td className="p-3 text-center flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(p)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => onDelete(p.id)}
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

export default PersonTable