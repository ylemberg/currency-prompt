const express = require('express')

module.exports.express = express
module.exports.app = express()
module.exports.PORT = 1337

require('dotenv').config()
