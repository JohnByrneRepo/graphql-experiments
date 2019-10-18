const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const expressPlayground = require('graphql-playground-middleware-express')
  .default

const schema = makeExecutableSchema({
  typeDefs: `
    type Query {
      hello: String!
    }
    schema {
      query: Query
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
})
const PORT = 5000

const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

app.listen(PORT)

console.log(
  `Serving the GraphQL Playground on http://localhost:${PORT}/playground`,
)