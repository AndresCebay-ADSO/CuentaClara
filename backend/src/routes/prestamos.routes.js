const router = require('express').Router()
const { verificarToken } = require('../middlewares/auth.middleware')
const ctrl = require('../controllers/prestamos.controller')

router.use(verificarToken)

router.get('/',           ctrl.listar)
router.get('/vencidos',   ctrl.vencidos)
router.get('/:id',        ctrl.obtener)
router.post('/',          ctrl.crear)
router.put('/:id',        ctrl.actualizar)

module.exports = router
