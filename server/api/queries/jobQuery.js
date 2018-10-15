const graphql = require('graphql');
const { GraphQLID } = graphql;
const JobType = require('../types/jobType');
const Job = require('../models/job');

module.exports.jobQuery = {
  type: JobType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Job.findById(args.id);
  },
};
