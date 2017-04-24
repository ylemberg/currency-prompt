angular.module('currency-prompt')
.service('conversion', [function () {
  this.convertCurrency = (rate, currencies) => currencies.map(currency => {
    const convertedValue = this.multiplyByRate(currency.value, rate)
    return {
      name: currency.name,
      value: convertedValue
    }
  })

  this.multiplyByRate = (value, rate) => parseFloat(value) * rate
  this.setToTwoDecimals = val => parseFloat(val).toFixed(2)
}])
