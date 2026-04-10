const router = require('express').Router()
const { verificarToken } = require('../middlewares/auth.middleware')
const ctrl = require('../controllers/deudores.controller')

router.use(verificarToken)

router.get('/',       ctrl.listar)
router.get('/:id',    ctrl.obtener)
router.post('/',      ctrl.crear)
router.put('/:id',    ctrl.actualizar)
router.delete('/:id', ctrl.eliminar)

module.exports = router
