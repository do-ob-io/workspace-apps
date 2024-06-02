import {
  test,
  expect,
  beforeAll,
} from 'vitest';
import { db } from '@-/db';
import { action } from '@-/db/schema';

beforeAll(async () => {
  // Ensure all rows in the action table are deleted.
  await db.delete(action);
});

// Should insert a new action into the database.
test('should insert action', async () => {

  const resultInsert = await db.insert(action).values({
    id: 'query:entity',
    name: 'Retrieve Entities',
  }).returning();

  // The result should be an array with a single object.
  expect(resultInsert).toHaveLength(1);

  // The object should be the action that was inserted.
  const resultInsertAction0 = resultInsert[0];

  // Expect that a proper action was inserted correctly.
  expect(resultInsertAction0).toMatchObject({
    id: 'query:entity',
    name: 'Retrieve Entities',
    description: null,
  });
});
