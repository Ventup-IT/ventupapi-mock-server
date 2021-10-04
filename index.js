const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const sessionsTypes = require('./schemas/sessions/types');
const sessionsResolvers = require('./schemas/sessions/resolvers');
const sessionsSchema = makeExecutableSchema({
    typeDefs: sessionsTypes,
    resolvers: sessionsResolvers,
});

const reportsTypes = require('./schemas/reports/types');
const reportsResolvers = require('./schemas/reports/resolvers');
const reportsSchema = makeExecutableSchema({
    typeDefs: reportsTypes,
    resolvers: reportsResolvers,
});

const businessTypes = require('./schemas/business/types');
const businessResolvers = require('./schemas/business/resolvers');
const businessSchema = makeExecutableSchema({
    typeDefs: businessTypes,
    resolvers: businessResolvers,
});

const app = express();

app.use('/graphql_api/sessions', graphqlHTTP({
    schema: sessionsSchema,
    graphiql: true,
}));

app.use('/graphql_api/reports', graphqlHTTP({
    schema: reportsSchema,
    graphiql: true,
}));

app.use('/graphql_api/business', graphqlHTTP({
    schema: businessSchema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.info('Listening on http://localhost:4000/graphql_api/sessions');
    console.info('Listening on http://localhost:4000/graphql_api/reports');
    console.info('Listening on http://localhost:4000/graphql_api/business');
});
