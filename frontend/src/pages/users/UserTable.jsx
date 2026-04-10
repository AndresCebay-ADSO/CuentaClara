function UserTable({ users, onEdit, onDelete }) {
  return (
    <table className="w-full bg-white shadow rounded-xl">
      <thead>
        <tr className="bg-[#f3eee8]">
          <th className="p-2">Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id} className="text-center border-t">
            <td className="p-2">{u.name}</td>
            <td>{u.email}</td>
            <td className="flex justify-center gap-2 p-2">
              <button onClick={() => onEdit(u)} className="bg-blue-500 text-white px-3 py-1 rounded">✏️</button>
              <button onClick={() => onDelete(u.id)} className="bg-red-500 text-white px-3 py-1 rounded">🗑️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable