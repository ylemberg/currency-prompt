const express = require('express')
require('./server-config')

const app = express()
const PORT = 1337

// app.use(express.static(`${__dirname}/../public`))

app.use(require('./routes'))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
