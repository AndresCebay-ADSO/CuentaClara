const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const listar = async (req, res) => {
  const deudores = await prisma.deudor.findMany({ orderBy: { nombre: 'asc' } })
  res.json(deudores)
}

const obtener = async (req, res) => {
  const deudor = await prisma.deudor.findUnique({
    where: { id: Number(req.params.id) },
    include: { prestamos: true }
  })
  if (!deudor) return res.status(404).json({ error: 'Deudor no encontrado' })
  res.json(deudor)
}

const crear = async (req, res) => {
  try {
    const { nombre, telefono, cedula, direccion } = req.body
    const deudor = await prisma.deudor.create({ data: { nombre, telefono, cedula, direccion } })
    res.status(201).json(deudor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const actualizar = async (req, res) => {
  try {
    const deudor = await prisma.deudor.update({
      where: { id: Number(req.params.id) },
      data: req.body
    })
    res.json(deudor)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const eliminar = async (req, res) => {
  try {
    await prisma.deudor.delete({ where: { id: Number(req.params.id) } })
    res.json({ mensaje: 'Deudor eliminado' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { listar, obtener, crear, actualizar, eliminar }
