const router = require('express').Router()
const currencyCtrl = require('../controllers/currency')

router.get('/companies', currencyCtrl.get)

module.exports = router
