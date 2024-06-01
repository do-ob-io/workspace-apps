import { relations } from 'drizzle-orm';
import {
  pgTable,
  uuid,
  timestamp,
  jsonb,
  text,
} from 'drizzle-orm/pg-core';

import { mutate } from './mutate.ts';
import { entity } from './entity/entity.ts';
import { action } from './entity/action.ts';

/**
 * Whenever a subject performs an action, a dispatch is created to apply the action.
 * Dispatches can happen instantly or be scheduled for a future time.
 */
export const dispatch = pgTable('dispatch', {
  id: uuid('id').primaryKey().defaultRandom(), // Unique dispatch identifier.
  subjectId: uuid('subject_id').notNull().references(() => entity.id), // The subject ID that is responsible for the dispatch.
  actionId: uuid('action_id').notNull().references(() => action.id), // The action that was/will be dispatched.
  created: timestamp('created').defaultNow().notNull(), // When the dispatch was created.
  submit: timestamp('submit').defaultNow().notNull(), // When the dispatch was/will be submitted.
  payload: jsonb('payload'), // The payload data to send with the action.
  result: jsonb('result'), // The result data from the action.
  message: text('message'), // A message to describe the dispatch.
});

export type Dispatch = typeof dispatch.$inferSelect;
export type DispatchInsert = typeof dispatch.$inferInsert;

export const dispatchRelations = relations(dispatch, ({ one, many }) => ({

  subject: one(entity, {
    fields: [ dispatch.subjectId ],
    references: [ entity.id ],
    relationName: 'subject',
  }),
  
  action: one(action, {
    fields: [ dispatch.actionId ],
    references: [ action.id ],
    relationName: 'action',
  }),

  mutations: many(mutate, { relationName: 'dispatch' }),

}));
