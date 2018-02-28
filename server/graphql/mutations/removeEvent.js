const { GraphQLNonNull, GraphQLString } = require('graphql')
const EventType = require('../types/event')
const EventModel = require('../models/event')

const removedEvent

exports.addEvent = {
  type: EventType.eventType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(root, params) {
    removedEvent = EventModel.findByIdAndRemove(params.id).exec()
    if (!removedEvent) throw new Error('Error')
    return removedEvent
  }
}
