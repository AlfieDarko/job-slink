const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;
const JobType = require('../types/jobType');
const Job = require('../models/job');

module.exports.jobsQuery = {
  type: new GraphQLList(JobType),
  resolve(/*parent, args*/) {
    return Job.find({});
  },
};
