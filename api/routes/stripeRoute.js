const { Router } = require('express')
const router = Router()
const Payment = require('../controllers/stripe')

router.post('/', Payment)

module.exports = router
