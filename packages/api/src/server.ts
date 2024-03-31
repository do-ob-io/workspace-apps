import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolvers.ts';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const schemaFile = resolve(import.meta.dirname, './schema.graphql');

let typeDefs: string;
try {
  typeDefs = readFileSync(schemaFile, { encoding: 'utf8' });
} catch (error) {
  console.error(`Failed to read the GraphQL schema file: ${error}`);
}

/**
 * The Apollo Server instance.
 */
export const server = new ApolloServer({
  typeDefs,
  resolvers,
});
