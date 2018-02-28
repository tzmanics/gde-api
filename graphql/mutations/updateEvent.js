const _ = require('lodash')
const { GraphQLNonNull, GraphQLString } = require('graphql')
const EventType = require('../types/event')
const GDEType = require('../types/gde')
const EventModel = require('../models/event')

exports.addEvent = {
  type: EventType.eventType,
  args: {
    id: { name: 'id', type: new GraphQLNonNull(GraphQLID) },
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
    return EventModel.findByIdAndUpdate(
      params.id,
      { $set: {
        name: params.name,
        email: params.email,
        location: params.location,
        website: params.website,
        gdes: params.gdes
      }},
      { new: true }
    ).catch(err => new Error(err))
  }
}
