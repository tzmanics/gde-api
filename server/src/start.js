import { MongoClient, ObjectID } from 'mongodb'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const URL = 'http://localhost'
const PORT = 3001
const MONGO_URL = '<db-info'

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

export const start = async () => {
  try {
    await MongoClient.connect(MONGO_URL, (err, database) => {
      const db = database.db('gde-api')
      const GDEs = db.collection('gdes')
      const typeDefs = [`
        type Query {
          gde(_id: String): GDE
          gdes: [GDE]
        }

        type GDE {
          _id: String
          name: String
          location: String
          twitter: String
          events: String
        }

        type Mutation {
          createGDE(name: String, location: String, twitter: String, events: String): GDE
        }

        schema {
          query: Query
          mutation: Mutation
        }
      `]

      const resolvers = {
        Query: {
          gde: async (root, {_id}) => {
            return prepare(await GDEs.findOne(Object(_id)))
          },
          gdes: async () => {
            return (await GDEs.find({}).toArray()).map(prepare)
          }
        },
        Mutation: {
          createGDE: async (root, args, contect, info) => {
            const response = await GDEs.insert(args)
            return prepare(await GDEs. findOne({ _id: response.insertedIds[1]}))
          }
        }
      }

      const schema = makeExecutableSchema({
        typeDefs,
        resolvers
      })

      const app = express()

      app.use(cors())

      app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
      app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

      app.listen(PORT, () => {
        console.log(`Visit ${URL}:${PORT}/graphql`)
      })
    })
  } catch (e) {
    console.log(e)
  }
}
