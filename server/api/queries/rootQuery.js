const graphql = require('graphql');
const jobQuery = require('./jobQuery');
const contractorQuery = require('./contractorQuery');
const jobsQuery = require('./jobsQuery');
const contractorsQuery = require('./contractorsQuery');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql;

module.exports = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    job: jobQuery,
    contractor: contractorQuery,
    jobs: jobsQuery,
    contractors: contractorsQuery,
  },
});
