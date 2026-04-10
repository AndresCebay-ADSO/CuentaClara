const router = require('express').Router()
const { verificarToken } = require('../middlewares/auth.middleware')
const ctrl = require('../controllers/pagos.controller')

router.use(verificarToken)

router.get('/prestamo/:prestamoId', ctrl.listarPorPrestamo)
router.post('/',                    ctrl.registrar)

module.exports = router
