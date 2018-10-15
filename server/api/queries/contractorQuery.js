const graphql = require('graphql');
const { GraphQLID } = graphql;
const ContractorType = require('../types/contractorType');
const Contractor = require('../models/contractor');

module.exports.contractorQuery = {
  type: ContractorType,
  args: {
    id: { type: GraphQLID },
  },
  resolve(parent, args) {
    return Contractor.findById(args.id);
  },
};
