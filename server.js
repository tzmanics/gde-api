const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const schema = require('./graphql/schema.js')
const mongoose = require('./config/mongoose')


const PORT = process.env.PORT || 3000
const app = express()
const DB = mongoose()

app.use('*', cors())

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(PORT)
console.log('GraphQL API server running at localhost:'+ PORT)
