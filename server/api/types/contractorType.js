const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;
const Job = require('../models/job');
// const JobType = require('./jobType');

module.exports = new GraphQLObjectType({
  name: 'Contractor',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    mobile: {
      type: GraphQLInt,
    },
    email: {
      type: GraphQLString,
    },
    postcode: {
      type: GraphQLString,
    },
    jobTitle: {
      type: GraphQLString,
    },
    jobsAccepted: {
      type: GraphQLInt,
    },
    jobsDeclined: {
      type: GraphQLInt,
    },
    jobsNoResponse: {
      type: GraphQLInt,
    },
    jobs: {
      type: new GraphQLList(JobType),
      resolve(parent, args) {
        return Job.find({ contractorId: parent.id });
      },
    },
  }),
});

const JobType = require('./jobType');
