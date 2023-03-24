const {Router} = require('express')
const router = Router()
 
const { newExpert, updateExpert, deleteExpert} = require('../controllers/expertise')

router.post('/', newExpert)
router.put('/:id', updateExpert)
router.delete('/:id',  deleteExpert)

module.exports = router