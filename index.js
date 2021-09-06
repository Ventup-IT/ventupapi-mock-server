const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const sessionsTypes = require('./sessions_types');
const sessionsResolvers = require('./sessions_resolvers');
const sessionsSchema = makeExecutableSchema({
    typeDefs: sessionsTypes,
    resolvers: sessionsResolvers,
});

const reportsTypes = require('./reports_types');
const reportsResolvers = require('./reports_resolvers');
const reportsSchema = makeExecutableSchema({
    typeDefs: reportsTypes,
    resolvers: reportsResolvers,
});

const businessTypes = require('./business_types');
const businessResolvers = require('./business_resolvers');
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
    schema: reportsSchema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.info('Listening on http://localhost:4000/graphql_api/sessions');
    console.info('Listening on http://localhost:4000/graphql_api/reports');
    console.info('Listening on http://localhost:4000/graphql_api/business');
});
