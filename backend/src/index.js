const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api/auth',      require('./routes/auth.routes'))
app.use('/api/deudores',  require('./routes/deudores.routes'))
app.use('/api/prestamos', require('./routes/prestamos.routes'))
app.use('/api/pagos',     require('./routes/pagos.routes'))
app.use('/api/reportes',  require('./routes/reportes.routes'))

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'CuentaClara API corriendo' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
