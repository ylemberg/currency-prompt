const router = require('express').Router()
const currencyCtrl = require('../controllers/currency')

router.get('/currencies', currencyCtrl.get)

module.exports = router
