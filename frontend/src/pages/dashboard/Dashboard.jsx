import { useEffect, useState } from "react"
import Charts from "./Charts"

function Dashboard() {
  const [persons, setPersons] = useState([])
  const [loans, setLoans] = useState([])

  useEffect(() => {
    const p = localStorage.getItem("persons")
    const l = localStorage.getItem("loans")

    if (p) setPersons(JSON.parse(p))
    if (l) setLoans(JSON.parse(l))
  }, [])

  // 🔹 Cálculos
  const totalPrestado = loans.reduce(
    (sum, l) => sum + Number(l.monto || 0),
    0
  )

  const totalPagado = loans.reduce(
    (sum, l) => sum + Number(l.pagado || 0),
    0
  )

  const totalPendiente = totalPrestado - totalPagado

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        Panel General
      </h1>

      {/* TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-lg">Total Prestado</p>
          <h2 className="text-3xl font-bold text-[#3e2f2f]">
            ${totalPrestado}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-lg">Total Recuperado</p>
          <h2 className="text-3xl font-bold text-green-600">
            ${totalPagado}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-lg">Pendiente</p>
          <h2 className="text-3xl font-bold text-red-500">
            ${totalPendiente}
          </h2>
        </div>

      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-lg">Personas Registradas</p>
          <h2 className="text-3xl font-bold">
            {persons.length}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500 text-lg">Préstamos Activos</p>
          <h2 className="text-3xl font-bold">
            {loans.filter(l => l.estado !== "Pagado").length}
          </h2>
        </div>

      </div>

      {/* ✅ GRÁFICAS */}
      <div className="mt-10">
        <Charts loans={loans} />
      </div>

    </div>
  )
}

export default Dashboard