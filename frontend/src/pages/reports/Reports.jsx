import { useEffect, useState } from "react"
import ReportView from "./ReportView"

function Reports() {
  const [persons, setPersons] = useState([])
  const [selectedPerson, setSelectedPerson] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem("persons")
    if (data) setPersons(JSON.parse(data))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Reportes
      </h1>

      <select
        onChange={(e) => {
          const id = e.target.value
          const person = persons.find(p => p.id == id)
          setSelectedPerson(person)
        }}
        className="w-[300px] border p-3 rounded mb-6"
      >
        <option value="">Seleccione persona</option>
        {persons.map(p => (
          <option key={p.id} value={p.id}>
            {p.nombre}
          </option>
        ))}
      </select>

      {selectedPerson && (
        <ReportView person={selectedPerson} />
      )}
    </div>
  )
}

export default Reports