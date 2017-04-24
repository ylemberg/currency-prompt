angular.module('currency-prompt')
.service('conversion', [function () {
  this.convertCurrency = (rate, currencies) => currencies.map(currency => {
    const conversionRate = this.multiplyByRate(currency.value, rate)
    return {
      name: currency.name,
      value: conversionRate
    }
  })

  this.multiplyByRate = (value, rate) => parseFloat(value) * rate
  this.setToTwoDecimals = val => parseFloat(val).toFixed(2)
}])
