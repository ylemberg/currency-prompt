angular.module('currency-prompt')
.service('currencyAPI', ['$http', function ($http) {
  const usdBase = []
  let currenciesToDisplay = []
  let countryCurrencies = []

  const requestCompaniesSuccess = resp => {
    this.formatCompanies(resp.data)
  }
  const requestCompaniesFailure = err => {
    console.error(`err after requesting companies = ${err}`)
  }

  const requestCurrenciesSuccess = resp => {
    this.formatCurrencies(resp.data)
  }
  const requestCurrenciesFailure = err => {
    console.error(`err after requesting companies = ${err}`)
  }

  this.requestCompanies = () => {
    $http.get('/companies').then(requestCompaniesSuccess, requestCompaniesFailure)
  }

  this.requestCurrencies = () => {
    $http.get('/currencies').then(requestCurrenciesSuccess, requestCurrenciesFailure)
  }

  this.getCurrencyValues = () => currenciesToDisplay
  this.getUSDBase = () => usdBase

  this.formatCompanies = companiesObj => {
    for (company in companiesObj) {
      usdBase.push({
        name: company,
        value: companiesObj[company]
      })
      currenciesToDisplay.push({
        name: company,
        value: companiesObj[company]
      })
    }
  }
  this.formatCurrencies = currenciesObj => {
    for (currency in currenciesObj) {
      countryCurrencies.push({
        name: currency,
        value: currenciesObj[currency]
      })
    }
    countryCurrencies.push({
      name: 'USD',
      value: '1.00'
    })
    countryCurrencies = this.sortCountries(countryCurrencies)
  }

  this.sortCountries = countries => countries.sort((countryA, countryB) => {
    return countryA.name < countryB.name ? -1 : 1
  })
  this.getCountryCurrencies = () => countryCurrencies

  this.changeCurrencyValues = newCurrencies => {
    currenciesToDisplay = newCurrencies
  }
}])
