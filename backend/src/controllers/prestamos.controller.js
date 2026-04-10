const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { calcularCuota } = require('../services/interes.service')

const listar = async (req, res) => {
  const prestamos = await prisma.prestamo.findMany({
    include: { deudor: true },
    orderBy: { createdAt: 'desc' }
  })
  res.json(prestamos)
}

const obtener = async (req, res) => {
  const prestamo = await prisma.prestamo.findUnique({
    where: { id: Number(req.params.id) },
    include: { deudor: true, pagos: true }
  })
  if (!prestamo) return res.status(404).json({ error: 'Prestamo no encontrado' })
  res.json(prestamo)
}

const crear = async (req, res) => {
  try {
    const { deudorId, monto, tasaInteres, modalidad, numeroCuotas, fechaInicio } = req.body
    const cuotaMensual = calcularCuota(Number(monto), Number(tasaInteres), Number(numeroCuotas))
    const totalPagar = cuotaMensual * Number(numeroCuotas)

    const prestamo = await prisma.prestamo.create({
      data: {
        deudorId:      Number(deudorId),
        monto:         Number(monto),
        tasaInteres:   Number(tasaInteres),
        modalidad,
        numeroCuotas:  Number(numeroCuotas),
        cuotaMensual,
        totalPagar,
        saldoPendiente: totalPagar,
        fechaInicio:   new Date(fechaInicio),
        estado:        'activo'
      }
    })
    res.status(201).json(prestamo)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const actualizar = async (req, res) => {
  try {
    const prestamo = await prisma.prestamo.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })
    res.json(prestamo)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const vencidos = async (req, res) => {
  const prestamos = await prisma.prestamo.findMany({
    where: { estado: 'activo', saldoPendiente: { gt: 0 } },
    include: { deudor: true }
  })
  res.json(prestamos)
}

module.exports = { listar, obtener, crear, actualizar, vencidos }
