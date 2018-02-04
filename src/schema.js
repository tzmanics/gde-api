const _ = require('lodash')
const GDEs = require('./data/gdes')
const  Events  = require( './data/events')

let {
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema
} = require('graphql')

const GDEType = new GraphQLObjectType({
  name: 'GDE',
  description: 'This represents a GDE',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    twitter: { type: new GraphQLNonNull(GraphQLString) }
  })
})

const EventsType = new GraphQLObjectType({
  name: 'Events',
  description: 'This respresents events GDEs are attending',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    location: { type: new GraphQLNonNull(GraphQLString) },
    gdes: {
      type: GDEType,
      resolve: (event) => _.flatMap(GDEs, gde => gde.id == event.gde_id)
    }
  })
})

const GDEQueryRootType = new GraphQLObjectType({
  name: 'GDEAppSchema',
  description: 'GDE Application Schema Query Root',
  fields: () => ({
    gdes: {
      type: new GraphQLList(GDEType),
      description: 'List of all GDE',
      resolve: () => GDEs
    },
    events: {
      type: new GraphQLList(EventType),
      description: 'List of all Events',
      resolve: () => Posts
    }
  }),
})

const GDEAppSchema = new GraphQLSchema({
  query: GDEQueryRootType
})

module.exports = GDEAppSchema
