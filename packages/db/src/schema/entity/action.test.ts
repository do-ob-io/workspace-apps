import {
  test,
  expect,
  beforeAll,
} from 'vitest';
import { db, entity, action } from '@-/db';

beforeAll(async () => {
  // Ensure all rows in the action table are deleted.
  await db.delete(action);
});

// Should insert a new action into the database.
test('should insert action', async () => {
  // Insert a new entity into the database.
  // This is necessary to create an action.
  const resultInsertEntity0 = (await db.insert(entity).values({}).returning({
    id: entity.id,
  }))[0];
  expect(resultInsertEntity0.id).toMatch(/^[0-9a-f-]{36}$/);

  const resultInsert = await db.insert(action).values({
    id: resultInsertEntity0.id,
    type: 'query/entity',
  }).returning();

  // The result should be an array with a single object.
  expect(resultInsert).toHaveLength(1);

  // The object should be the action that was inserted.
  const resultInsertAction0 = resultInsert[0];

  // Expect that a proper action was inserted correctly.
  expect(resultInsertAction0).toMatchObject({
    id: resultInsertEntity0.id,
    type: 'query/entity',
    description: null,
  });
});
