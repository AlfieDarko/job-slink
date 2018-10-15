const addContractorMutation = require('./addContractorMutation');
import { addJobMutation } from './addJobMutation';
const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

module.exports.RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addContractor: addContractorMutation,
    addJob: addJobMutation,
  },
});
