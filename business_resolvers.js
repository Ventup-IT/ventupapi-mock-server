const { makeExecutableSchema } = require('@graphql-tools/schema');
const { find, filter } = require('lodash');

const users = [
    {
        id: "35be0b10-aa59-45de-8003-d4157ec7082b",
        email: 'director@ventup.com.mx'
    },
    {
        id: "e998c033-1a05-4dfb-8e95-b812a9f4ec26",
        email: 'gerente@ventup.com.mx'
    },
    {
        id: "22eb6d6d-4c51-4d18-ac5f-cca09ae4d09a",
        email: 'administracion'
    },
    {
        id: "d61e21e0-a21a-46c5-908b-c15bc600b963",
        email: 'operaciones@ventup.com.mx'
    },
];

const resolvers = {
    RootQueryType: {
        branches: () => {},
        branch: () => {},
        clients: () => {},
        company: () => {},
        providers: () => {},
        users: () => {},
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
