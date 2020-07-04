const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')

mongoose.connect('mongodb://127.0.0.1:27017/passport-jwt', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})

const app = express()

require('./auth/auth')

app.use(bodyParser.json())
app.use(routes)

const PORT = 3000

app.listen(PORT, function () {
  console.log(`App listening on ${PORT}`)
})