import { useState, useEffect } from "react"
import PersonModal from "./PersonModal"
import PersonTable from "./PersonTable"

function Persons() {
  const [open, setOpen] = useState(false)
  const [persons, setPersons] = useState([])
  const [editingPerson, setEditingPerson] = useState(null)

  // 🔹 CARGAR desde localStorage
  useEffect(() => {
    const data = localStorage.getItem("persons")
    if (data) {
      setPersons(JSON.parse(data))
    }
  }, [])

  // 🔹 GUARDAR en localStorage
  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons))
  }, [persons])

  const handleSave = (data) => {
    if (editingPerson) {
      const updated = persons.map((p) =>
        p.id === editingPerson.id ? { ...data, id: p.id } : p
      )
      setPersons(updated)
    } else {
      setPersons([...persons, { ...data, id: Date.now() }])
    }

    setOpen(false)
    setEditingPerson(null)
  }

  const handleEdit = (person) => {
    setEditingPerson(person)
    setOpen(true)
  }

  const handleDelete = (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar esta persona?")
    if (!confirm) return

    setPersons(persons.filter((p) => p.id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Personas</h1>

      <button
        onClick={() => {
          setEditingPerson(null)
          setOpen(true)
        }}
        className="bg-[#d97706] text-white px-6 py-3 rounded-lg text-lg mb-6"
      >
        ➕ Agregar Persona
      </button>

      <PersonTable
        persons={persons}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {open && (
        <PersonModal
          onClose={() => {
            setOpen(false)
            setEditingPerson(null)
          }}
          onSave={handleSave}
          initialData={editingPerson}
        />
      )}
    </div>
  )
}

export default Persons