const Contractor = require('../models/contractor');
const ContractorType = require('../types/contractorType');
const graphql = require('graphql');

const { GraphQLString, GraphQLInt, GraphQLNonNull } = graphql;

module.exports.addContractorMutation = {
  type: ContractorType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(GraphQLString),
    },
    postcode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    mobile: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    jobTitle: {
      type: new GraphQLNonNull(GraphQLString),
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
  },
  resolve(parent, args) {
    let contractor = new Contractor({
      name: args.name,
      address: args.address,
      postcode: args.postcode,
      mobile: args.mobile,
      email: args.email,
      jobTitle: args.jobTitle,
      jobsAccepted: args.jobsAccepted,
      jobsDeclined: args.jobsDeclined,
      jobsNoResponse: args.jobsNoResponse,
    });
    return contractor.save();
  },
};
