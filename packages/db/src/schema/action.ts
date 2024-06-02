import {
  pgTable, varchar, index,
} from 'drizzle-orm/pg-core';

/**
 * Records of available actions that can be performed.
 * Subjects that can perform actions are controlled in the authorization layer.
 * 
 * It was debated if a payload schema should be included in the action table, but it was decided
 * that the payload schema should be defined in the logic layer that is responsible for the
 * processing action.
 */
export const action = pgTable('action', {
  id: varchar('id', { length: 64 }).primaryKey(), // A unique key for the action.
  name: varchar('name', { length: 256 }).notNull(), // A human readable name for the action.
  description: varchar('description', { length: 1024 }), // A description of what the actions does.
}, (table) => ({
  actionNameIdx: index('action_name_idx').on(table.name),
}));

export type Action = typeof action.$inferSelect;
export type ActionInsert = typeof action.$inferInsert;
