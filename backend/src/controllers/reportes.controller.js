const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const resumen = async (req, res) => {
  const [totalPrestamos, prestamosActivos, prestamosPagados, totalDeudores] = await Promise.all([
    prisma.prestamo.count(),
    prisma.prestamo.count({ where: { estado: 'activo' } }),
    prisma.prestamo.count({ where: { estado: 'pagado' } }),
    prisma.deudor.count()
  ])

  const saldoTotal = await prisma.prestamo.aggregate({
    _sum: { saldoPendiente: true },
    where: { estado: 'activo' }
  })

  res.json({
    totalPrestamos,
    prestamosActivos,
    prestamosPagados,
    totalDeudores,
    saldoPendienteTotal: saldoTotal._sum.saldoPendiente || 0
  })
}

const cartera = async (req, res) => {
  const prestamos = await prisma.prestamo.findMany({
    include: { deudor: true, pagos: { orderBy: { fecha: 'desc' }, take: 1 } }
  })
  res.json(prestamos)
}

module.exports = { resumen, cartera }
