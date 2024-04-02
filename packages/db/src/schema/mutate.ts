import { relations } from 'drizzle-orm';
import {
  pgEnum,
  pgTable,
  uuid,
  timestamp,
  jsonb,
} from 'drizzle-orm/pg-core';

import { dispatch } from './dispatch.ts';
import { entity } from './entity/entity.ts';

/**
 * Possible operations to a historical change.
 */
export const mutateOperation = pgEnum('mutate_operation', ['create', 'update', 'delete']);

/**
 * Log of mutations to records.
 */
export const mutate = pgTable('mutate', {
  id: uuid('id').primaryKey().defaultRandom(), // Unique mutate identifier.
  dispatchId: uuid('dispatch_id').notNull().references(() => dispatch.id), // The dispatch ID that was responsible for the mutation.
  entityId: uuid('record_id').notNull().references(() => entity.id), // The record ID that was changed.
  operation: mutateOperation('operation').notNull(), // The operation performed on the record.
  occurred: timestamp('occurred').defaultNow().notNull(), // When the operation was performed.
  mutation: jsonb('mutation').notNull(), // The mutation that was performed.
});

export type Mutate = typeof mutate.$inferSelect;
export type MutateInsert = typeof mutate.$inferInsert;

export const mutateRelations = relations(mutate, ({ one }) => ({
  dispatch: one(dispatch, {
    fields: [mutate.dispatchId],
    references: [dispatch.id],
    relationName: 'dispatch',
  }),
  
  entity: one(entity, {
    fields: [mutate.entityId],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
