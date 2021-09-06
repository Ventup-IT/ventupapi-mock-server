const { makeExecutableSchema } = require('@graphql-tools/schema');
const { find, filter } = require('lodash');
const users = require('../../data/users');

const resolvers = {
    RootQueryType: {
        logIn: (_, {email, password}) => {
            user = find(users, { email });

            if (!user) {
                throw new Error(`invalid_credentials`);
            }

            if (password != user.password) {
                throw new Error(`invalid_credentials`);
            }

            return user;
        },
        resetPassword: () => ({
            message: 'email_delivered'
        }),
        setPassword: () => ({
            message: 'password_updated'
        }),
    },
    RootMutationType: {
        logOut: () => ({
            message: 'logged_out'
        }),
    },
};

module.exports = resolvers;
