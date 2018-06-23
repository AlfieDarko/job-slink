const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

//  dummy data
var contractors = [
  {
    name: 'Vlad Muchkinokfsi',
    address: '32 Joymore ave',
    jobTitle: 'Removal',
    jobsAccepted: 3,
    jobsDeclined: 7,
    jobsNoResponse: 2,
    id: '1',
  },

  {
    name: 'Janet Moline',
    address: '15 Hunch Road',
    jobTitle: 'Cleaner',
    jobsAccepted: 6,
    jobsDeclined: 3,
    jobsNoResponse: 2,
    id: '2',
  },

  {
    name: 'Jake Robinson',
    address: '10 Fishbourne Ave',
    jobTitle: 'Cleaner',
    jobsAccepted: 8,
    jobsDeclined: 3,
    jobsNoResponse: 1,
    id: '3',
  },
];

var jobs = [
  {
    jobCategory: 'Cleaning',
    address: '91 Cannington Ave',
    pay: '£60',
    id: '1',
    contractorId: '3',
  },
  {
    jobCategory: 'Removals',
    address: '17 Burnett Street',
    pay: '£80',
    id: '3',
    contractorId: '1',
  },
  {
    jobCategory: 'Cleaning',
    address: '91 Compton Ave',
    pay: '£75',
    id: '3',
    contractorId: '3',
  },
];

const JobType = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    jobCategory: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    pay: {
      type: GraphQLString,
    },
    contractor: {
      type: ContractorType,
      resolve(parent, args) {
        return _.find(contractors, {
          id: parent.contractor.id,
        });
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
        return _.filter(jobs, {
          contractorId: parent.id,
        });
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
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        // code to get data from db/ other source
        // resolve function to find info
        return _.find(jobs, {
          id: args.id,
        });
      },
    },
    contractor: {
      type: ContractorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return _.find(contractors, {
          id: args.id,
        });
      },
    },
    jobs: {
      type: new GraphQLList(JobType),
      resolve(parent, args) {
        return jobs;
      },
    },
    contractors: {
      type: new GraphQLList(ContractorType),
      resolve(parent, args) {
        return contractors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
