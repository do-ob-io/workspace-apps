import { test, expect, beforeAll } from 'vitest';
import { db, entity } from '@-/db';

beforeAll(async () => {
  // Ensure all rows in the entity table are deleted.
  await db.delete(entity);
});

/**
 * Test should insert a new entity into the database.
 */
test('should insert entity', async () => {
  const result = await db.insert(entity).values({}).returning();

  // The result should be an array with a single object.
  expect(result).toHaveLength(1);

  // The object should be the entity that was inserted.
  const resultEntity = result[0];

  // Expect the result to be and object with an id property of a UUIDv4 string.
  expect(resultEntity).toMatchObject({
    id: expect.stringMatching(/^[0-9a-f-]{36}$/),
    // The created and updated properties should be a Date object.
    created: expect.any(Date),
    updated: expect.any(Date),
    // The publish property should be a Date object.
    publish: expect.any(Date),
    // The deleted property should be a boolean set to false.
    deleted: false,
    // The creatorId property should be null.
    creatorId: null,
  });
});
