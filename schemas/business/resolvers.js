const { makeExecutableSchema } = require('@graphql-tools/schema');
const { find, filter } = require('lodash');
const users = require('../../data/users');
const branches = require('../../data/branches');

const resolvers = {
    RootQueryType: {
        branches: () => ({
            branches,
            pagination: {
                totalCount: branches.length
            }
        }),
        branch: () => {},
        clients: () => {},
        company: () => {},
        providers: () => {},
        users: () => ({
            users,
            pagination: {
                totalCount: users.length
            }
        }),
        user: () => {},
    },
    RootMutationType: {
        createBranch: () => {},
        updateBranch: () => {},
        activateBranch: () => {},
        deactivateBranch: () => {},
        deleteBranch: () => {},
        bulkUpdateBranches: () => {},
        updateCompany: () => {},
        createUser: () => {},
        updateUser: () => {},
        activateUser: () => {},
        deactivateUser: () => {},
        deleteUser: () => {},
        bulkUpdateUsers: () => {},
    },
};

module.exports = resolvers;
