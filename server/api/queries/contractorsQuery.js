const graphql = require('graphql');
const { GraphQLList } = graphql;
const ContractorType = require('../types/contractorType');
const Contractor = require('../models/contractor');

module.exports = {
  type: new GraphQLList(ContractorType),
  resolve(/*parent, args*/) {
    return Contractor.find({});
  },
};
