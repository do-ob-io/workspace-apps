import type { Resolvers } from './_generated/graphql.ts';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};
