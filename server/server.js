const serverConfig = require('./server-config')

const app = serverConfig.app
const express = serverConfig.express
app.use(express.static(`${__dirname}/../public`))

app.use(require('./routes'))

app.listen(serverConfig.PORT, () => {
  console.log(`listening on port ${serverConfig.PORT}`)
})
