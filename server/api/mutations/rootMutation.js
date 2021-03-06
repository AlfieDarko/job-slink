const addContractorMutation = require('./addContractorMutation');
const addJobMutation = require('./addJobMutation');
const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

module.exports.RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addContractor: addContractorMutation,
    addJob: addJobMutation,
  },
});
