const graphql = require('graphql');
const RootQuery = require('../queries/rootQuery');
const RootMutation = require('../mutations/rootMutation');
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
