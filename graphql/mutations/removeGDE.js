const { GraphQLNonNull, GraphQLString } = require('graphql')
const GDEType = require('../types/gde')
const GDEModel = require('../models/gde')

const removedGDE

exports.addGDE = {
  type: GDEType.gdeType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(root, params) {
    removedGDE = GDEModel.findByIdAndRemove(params.id).exec()
    if (!removedGDE) throw new Error('Error')
    return removedGDE
  }
}
