const graphql = require('graphql');
const jobQuery = require('./jobQuery');
// const Contractor = require('../models/contractor');
const contractorQuery = require('./contractorQuery');
// const ContractorType = require('../types/contractorType');
// const jobsQuery = require('./jobsQuery');
const JobType = require('../types/jobType');
// const Job = require('../models/job');
// const contractorsQuery = require('./contractorsQuery');
const { GraphQLObjectType, GraphQLList } = graphql;

module.exports.RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    job: jobQuery,
    contractor: contractorQuery,
    jobs: {
      type: new GraphQLList(JobType),
      resolve() {
        return Job.find({});
      },
    },
    contractors: {
      type: new GraphQLList(ContractorType),
      resolve() {
        return Contractor.find({});
      },
    },
  },
});
