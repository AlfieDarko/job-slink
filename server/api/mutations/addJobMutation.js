const Job = require('../models/job');
const JobType = require('../types/jobType');
const graphql = require('graphql');
const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

module.exports.addJobMutation = {
  type: JobType,
  args: {
    jobCategory: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nameOfOwner: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(GraphQLString),
    },
    postcode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    specialRequests: { type: GraphQLString },
    pay: {
      type: new GraphQLNonNull(GraphQLString),
    },
    authorId: { type: GraphQLID },
  },
  resolve(parent, args) {
    let job = new Job({
      jobCategory: args.jobCategory,
      nameOfOwner: args.nameOfOwner,
      address: args.address,
      postcode: args.postcode,
      specialRequests: args.specialRequests,
      pay: args.pay,
      authorId: args.authorId,
    });
    return job.save();
  },
};
