const graphql = require('graphql');
const _ = require('lodash');
const Job = require('../models/job');
const Contractor = require('../models/contractor');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const JobType = new GraphQLObjectType({
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

// fields is wrapped in a function as both booktypes run
// before the other one is defined. wrapping it in
// a function allows the code to load before executing
// any functions

const ContractorType = new GraphQLObjectType({
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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    job: {
      type: JobType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Job.findById(args.id);
      },
    },
    contractor: {
      type: ContractorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Contractor.findById(args.id);
      },
    },
    jobs: {
      type: new GraphQLList(JobType),
      resolve(parent, args) {
        return Job.find({});
      },
    },
    contractors: {
      type: new GraphQLList(ContractorType),
      resolve(parent, args) {
        return Contractor.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addContractor: {
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
        jobTitle: {
          type: new GraphQLNonNull(GraphQLString),
        },
        jobsAccepted: { type: GraphQLInt },
        jobsDeclined: { type: GraphQLInt },
        jobsNoResponse: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let contractor = new Contractor({
          name: args.name,
          address: args.address,
          postcode: args.postcode,
          jobTitle: args.jobTitle,
          jobsAccepted: args.jobsAccepted,
          jobsDeclined: args.jobsDeclined,
          jobsNoResponse: args.jobsNoResponse,
        });
        return contractor.save();
      },
    },
    addJob: {
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
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
