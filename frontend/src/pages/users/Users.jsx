import { useState, useEffect } from "react"
import UserModal from "./UserModal"
import UserTable from "./UserTable"

function Users() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editUser, setEditUser] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || []
    setUsers(data)
  }, [])

  const saveUsers = (data) => {
    setUsers(data)
    localStorage.setItem("users", JSON.stringify(data))
  }

  const handleSave = (user) => {
    let updated

    if (editUser) {
      updated = users.map(u => u.id === user.id ? user : u)
    } else {
      updated = [...users, { ...user, id: Date.now() }]
    }

    saveUsers(updated)
    setShowModal(false)
    setEditUser(null)
  }

  const handleDelete = (id) => {
    const updated = users.filter(u => u.id !== id)
    saveUsers(updated)
  }

  const handleEdit = (user) => {
    setEditUser(user)
    setShowModal(true)
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Usuarios del Sistema</h1>

      <button
        onClick={() => setShowModal(true)}
        className="bg-[#8b5e3c] text-white px-4 py-2 rounded mb-4"
      >
        + Nuevo Usuario
      </button>

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      {showModal && (
        <UserModal
          onClose={() => {
            setShowModal(false)
            setEditUser(null)
          }}
          onSave={handleSave}
          editUser={editUser}
        />
      )}
    </div>
  )
}

export default Users