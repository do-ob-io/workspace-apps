import {
  pgTable,
  varchar,
  jsonb,
} from 'drizzle-orm/pg-core';

/**
 * Records of available actions that can be performed.
 * Subjects that can perform actions are controlled in the authorization layer.
 */
export const action = pgTable('action', {
  $id: varchar('id', { length: 64 }).primaryKey(), // A unique key for the action.
  definition: jsonb('definition'), // The schema for the payload data that is expected.
  description: varchar('description', { length: 1024 }), // A description of what the actions does.
});

export type Action = typeof action.$inferSelect;
export type ActionInsert = typeof action.$inferInsert;
