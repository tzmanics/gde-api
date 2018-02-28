const env = process.env_NODE_ENV || 'production'
const config = require('./config')[env]
const mongoose = require('mongoose')

module.exports = () => {
  mongoose.Promise = global.Promise
  let db = mongoose.connect(config.db)
  mongoose.connection.on('error', () => {
    console.log('Error: Could not connect to MongoDB'.red)
  }).on('open', () => {
    console.log('Connection established with MongoDB')
  })
  return db
}
