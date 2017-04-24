angular.module('currency-prompt')
.service('conversion', [function () {
  this.convertCurrency = (rate, currencies) => currencies.map(currency => {
    const conversionRate = this.multiplyByRate(currency.value, rate)
    return {
      name: currency.name,
      value: conversionRate
    }
  })

  this.multiplyByRate = (value, rate) => parseInt(value, 10) * rate
}])
