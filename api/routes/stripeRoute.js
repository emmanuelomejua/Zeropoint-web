const Payment = require('../controllers/stripe')
const { Router } = require('express')
const router = Router()

router.post('/', Payment)

module.exports = router