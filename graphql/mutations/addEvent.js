const _ = require('lodash')
const { GraphQLNonNull, GraphQLString } = require('graphql')
const EventType = require('../types/event')
const GDEType = require('../types/gde')
const EventModel = require('../models/event')

const gModel
const newEvent

exports.addEvent = {
  type: EventType.eventType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: new GraphQLNonNull(GraphQLString) },
    gdes: {
      type: GDEType,
      resolve: (event) => _.flatMap(GDEs, gde => gde.id == event.gde_id)
    }
  },
  resolve(root, params) {
    gModel = new EventModel(params)
    newEvent = gModel.save()
    if (!newEvent ) throw new Error('Error')
    return newEvent
  }
}
