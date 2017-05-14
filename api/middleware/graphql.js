const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world!',
};

module.exports = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
});
