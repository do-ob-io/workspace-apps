import {
  test, expect, beforeAll,
} from 'vitest';
import { db, entity } from '@-/db';

let ownerId: string;
let creatorId: string;

beforeAll(async () => {
  // Ensure all rows in the entity table are deleted.
  await db.delete(entity);
});

/**
 * Should insert a new entity into the database.
 */
test('should insert entity', async () => {
  const resultInsert = await db.insert(entity).values({}).returning();

  // The result should be an array with a single object.
  expect(resultInsert).toHaveLength(1);

  // The object should be the entity that was inserted.
  const resultInsertEntity0 = resultInsert[0];

  // Expect the result to be and object with an id property of a UUIDv4 string.
  expect(resultInsertEntity0).toMatchObject({
    id: expect.stringMatching(/^[0-9a-f-]{36}$/),
    // The created, updated, and publish properties should be a Date object.
    created: expect.any(Date),
    updated: expect.any(Date),
    publish: expect.any(Date),
    // The deleted property should be a boolean set to false.
    deleted: false,
    // The ownerId property should be null.
    ownerId: null,
    // The creatorId property should be null.
    creatorId: null,
  });

  // Assign the owner id for use in other tests.
  ownerId = resultInsertEntity0.id;

  // Assign the creator id for use in other tests.
  creatorId = resultInsertEntity0.id;
});

/**
 * Should insert a new entity with an owner and creator into the database.
 */
test('should insert entity with owner', async () => {
  const resultInsert = await db.insert(entity).values({ ownerId, creatorId }).returning();

  // The result should be an array with a single object.
  expect(resultInsert).toHaveLength(1);

  // The object should be the entity that was inserted.
  const resultInsertEntity0 = resultInsert[0];

  // Expect the result to be and object with an id property of a UUIDv4 string.
  expect(resultInsertEntity0).toMatchObject({
    id: expect.stringMatching(/^[0-9a-f-]{36}$/),
    // The created, updated, and publish properties should be a Date object.
    created: expect.any(Date),
    updated: expect.any(Date),
    publish: expect.any(Date),
    // The deleted property should be a boolean set to false.
    deleted: false,
    // The ownerId property should be the same as the previously inserted entity id.
    ownerId,
    // The creatorId property should be the same as the previously inserted entity id.
    creatorId,
  });
});
