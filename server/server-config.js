const express = require('express')

module.exports.express = express
module.exports.app = express()
module.exports.PORT = 80

require('dotenv').config()
