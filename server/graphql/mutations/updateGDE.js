const { GraphQLNonNull, GraphQLString } = require('graphql')
const GDEType = require('../types/gde')
const GDEModel = require('../models/gde')

exports.addGDE = {
  type: GDEType.gdeType,
  args: {
    id: { name: 'id', type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: new GraphQLNonNull(GraphQLString) },
    twitter: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(root, params) {
    return GDEModel.findByIdAndUpdate(
      params.id,
      { $set: {
        name: params.name,
        email: params.email,
        location: params.location,
        website: params.website,
        twitter: params.twitter
      }},
      { new: true }
    ).catch(err => new Error(err))
  }
}
