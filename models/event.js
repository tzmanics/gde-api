const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  gde_id: {
    type: Array
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  website: {
    type: String
  },
  date: {
    type: Date
  },
})

let EventModel = mongoose.model('Event', eventSchema)
module.exports = EventModel

