const { Router } = require('express')
const router = Router()

const subNewsletter = require('../controllers/newsletter')

router.post('/', subNewsletter)

module.exports = router