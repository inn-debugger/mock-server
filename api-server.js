const express = require('express')
const app = new express()
const port = 3001
const mock = require('./mock/mock-server')

mock(app)

app.listen(port, () => console.log('api server listen at ' + port))
