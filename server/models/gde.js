const mongoose = require('mongoose')
const Schema = mongoose.Schema

let gdeSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  location: {
    type: String
  },
  website: {
    type: String
  },
  twitter: {
    type: String
  },
})

let GDEModel = mongoose.model('GDE', gdeSchema)
module.exports = GDEModel
