const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

//  dummy data
var contractors = [{
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
    jobTitle: 'Builder',
    jobsAccepted: 8,
    jobsDeclined: 3,
    jobsNoResponse: 1,
    id: '3',
  },
];

var jobs = [{
    jobCategory: 'Cleaning',
    address: '91 Cannington Ave',
    pay: '£60',
    id: '1',
    contractorId: 3,
  },
  {
    jobCategory: 'Removals',
    address: '17 Burnett Street',
    pay: '£80',
    id: '2',
    contractorId: 3,
  },
  {
    jobCategory: 'Cleaning',
    address: '91 Cannington Ave',
    pay: '£75',
    id: '3',
    contractorId: 1,
  },
];

const JobType = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    jobCategory: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    pay: {
      type: GraphQLString
    },
    contractor: {
      type: ContractorType,
      resolve(parent, args){
        
      }
    }
  }),
});

const ContractorType = new GraphQLObjectType({
  name: 'Contractor',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    jobTitle: {
      type: GraphQLString
    },
    jobsAccepted: {
      type: GraphQLInt
    },
    jobsDeclined: {
      type: GraphQLInt
    },
    jobsNoResponse: {
      type: GraphQLInt
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
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db/ other source
        // resolve function to find info
        return _.find(jobs, {
          id: args.id
        });
      },
    },
    contractor: {
      type: ContractorType,
      args: {
        id: {
          type: GraphQLID
        },
      },
      resolve(parent, args) {
        return _.find(contractors, {
          id: args.id
        });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});