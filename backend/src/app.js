console.log("Hi there!")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json()) //Allow app to easly parse json files
app.use(cors()) //Allow any client to access (security risk)

require('./routes')(app)

sequelize.sync()
  .then(()=> {
   app.listen(config.port)
   console.log(`Server started on port ${config.port}`)
  })
