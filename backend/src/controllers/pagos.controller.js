const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listarPorPrestamo = async (req, res) => {
  const pagos = await prisma.pago.findMany({
    where: { prestamoId: Number(req.params.prestamoId) },
    orderBy: { fecha: 'desc' }
  })
  res.json(pagos)
}

const registrar = async (req, res) => {
  const { prestamoId, monto, nota } = req.body

  try {
    const prestamo = await prisma.prestamo.findUnique({ where: { id: Number(prestamoId) } })
    if (!prestamo) return res.status(404).json({ error: 'Prestamo no encontrado' })

    const nuevoSaldo = prestamo.saldoPendiente - Number(monto)

    const [pago] = await prisma.$transaction([
      prisma.pago.create({
        data: { prestamoId: Number(prestamoId), monto: Number(monto), nota }
      }),
      prisma.prestamo.update({
        where: { id: Number(prestamoId) },
        data: {
          saldoPendiente: nuevoSaldo <= 0 ? 0 : nuevoSaldo,
          estado: nuevoSaldo <= 0 ? 'pagado' : 'activo'
        }
      })
    ])

    res.status(201).json(pago)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { listarPorPrestamo, registrar }
