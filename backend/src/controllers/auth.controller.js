const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const registro = async (req, res) => {
  const { nombre, email, password } = req.body
  try {
    const existe = await prisma.usuario.findUnique({ where: { email } })
    if (existe) return res.status(400).json({ error: 'Email ya registrado' })

    const hash = await bcrypt.hash(password, 10)
    const usuario = await prisma.usuario.create({
      data: { nombre, email, password: hash }
    })

    res.status(201).json({ mensaje: 'Usuario creado', id: usuario.id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } })
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' })

    const valido = await bcrypt.compare(password, usuario.password)
    if (!valido) return res.status(401).json({ error: 'Contrasena incorrecta' })

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    )

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email } })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = { login, registro }
