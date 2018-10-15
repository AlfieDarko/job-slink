const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const Contractor = require('../models/contractor');
const ContractorType = require('./contractorType');

module.exports.JobTypie = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    jobCategory: {
      type: GraphQLString,
    },
    nameOfOwner: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    postcode: {
      type: GraphQLString,
    },
    specialRequests: {
      type: GraphQLString,
    },
    pay: {
      type: GraphQLString,
    },
    contractor: {
      type: ContractorType,
      resolve(parent, args) {
        return Contractor.findById(parent.contractorId);
      },
    },
  }),
});
