const { GraphQLNonNull, GraphQLString } = require('graphql')
const GDEType = require('../types/gde')
const GDEModel = require('../models/gde')

const gModel
const newGDE

exports.addGDE = {
  type: GDEType.gdeType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: new GraphQLNonNull(GraphQLString) },
    twitter: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(root, params) {
    gModel = new GDEModel(params)
    newGDE = gModel.save()
    if (!newGDE) throw new Error('Error')
    return newGDE
  }
}
