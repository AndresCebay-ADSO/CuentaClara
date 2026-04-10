const router = require('express').Router()
const { verificarToken } = require('../middlewares/auth.middleware')
const ctrl = require('../controllers/reportes.controller')

router.use(verificarToken)

router.get('/resumen', ctrl.resumen)
router.get('/cartera', ctrl.cartera)

module.exports = router
