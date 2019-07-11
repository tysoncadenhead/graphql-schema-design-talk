const typeDefs = require('./schema.gql');

import { ApolloServer } from 'apollo-server-lambda';
import { about } from './data/about';
import { makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: {
        Query: {
            about: () => about
        },
        // Mutation: {}   
    }
});

export const server = new ApolloServer({
    schema,
    tracing: false,
    cacheControl: false
});