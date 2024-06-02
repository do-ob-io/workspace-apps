import { test, expect, assert } from 'vitest';
import { graphql } from './graphql.ts';

test('books query', async () => {
  const result = await graphql.executeOperation({
    query: `
      query {
        books {
          title
        }
      }
    `,
  });

  assert(result.body.kind === 'single');
  expect(result.body.singleResult.errors).toBeUndefined();
  expect(result.body.singleResult.data).toEqual({
    books: [
      { title: 'The Awakening' },
      { title: 'City of Glass' },
    ],
  });
});
