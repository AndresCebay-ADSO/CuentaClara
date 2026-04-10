import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

function Charts({ loans }) {

  // 🔹 Datos generales
  const totalPrestado = loans.reduce((s, l) => s + Number(l.monto || 0), 0)
  const totalPagado = loans.reduce((s, l) => s + Number(l.pagado || 0), 0)

  // 🔹 Datos para gráfico de barras
  const barData = [
    { name: "Prestado", valor: totalPrestado },
    { name: "Recuperado", valor: totalPagado },
  ]

  // 🔹 Datos para gráfico circular
  const pagados = loans.filter(l => l.estado === "Pagado").length
  const pendientes = loans.filter(l => l.estado !== "Pagado").length

  const pieData = [
    { name: "Pagados", value: pagados },
    { name: "Pendientes", value: pendientes },
  ]

  const COLORS = ["#16a34a", "#dc2626"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

      {/* BARRAS */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Dinero</h3>

        <BarChart width={300} height={250} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="valor" fill="#d97706" />
        </BarChart>
      </div>

      {/* PIE */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Estado de Préstamos</h3>

        <PieChart width={300} height={250}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

    </div>
  )
}

export default Charts