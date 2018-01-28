const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
let port = 3000;

let schema = buildSchema(`
  type Query {
    gdeName: String,
    gdeEmail: String,
    gdeBaseCity: String
  }
`);

let root = {
  gdeName: () => 'Tara Z. Manicsic',
  gdeEmail: () => 'tzmanics@gmail.com', 
  gdeBaseCity: () => 'Cincinnati' 
};

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(port);
console.log('GraphQL API server running at localhost:'+ port);
