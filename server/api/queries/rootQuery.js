const graphql = require('graphql');
const jobQuery = require('./jobQuery');
const Contractor = require('../models/contractor');
const contractorQuery = require('./contractorQuery');
const ContractorType = require('../types/contractorType');
const jobsQuery = require('./jobsQuery');
// const JobType = require('../types/jobType');
const Job = require('../models/job');
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
