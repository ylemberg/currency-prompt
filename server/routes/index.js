const router = require('express').Router()
const currencyCtrl = require('../controllers/currency')

router.get('/companies', currencyCtrl.getCompanies)
router.get('/currencies', currencyCtrl.getCurrencies)

module.exports = router
