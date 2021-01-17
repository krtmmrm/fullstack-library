const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database, 
    config.db.user, 
    config.db.password, 
    config.db.options
)

//Read through the directory and return array of files
//Filter current file 
fs
  .readdirSync(__dirname)
  .filter((file) => 
    file !== 'index.js'
  )
  .forEach((file) => {
      //Changed to node's built in CommonJS
      const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
      db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 