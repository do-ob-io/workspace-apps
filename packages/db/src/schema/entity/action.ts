import { relations } from 'drizzle-orm';
import {
  pgTable, varchar, uuid, index,
} from 'drizzle-orm/pg-core';

import { entity } from './entity.ts';

/**
 * Records of available actions that can be performed.
 * Subjects that can perform actions are controlled in the authorization layer.
 * 
 * It was debated if a payload schema should be included in the action table, but it was decided
 * that the payload schema should be defined in the logic layer that is responsible for the
 * processing action.
 */
export const action = pgTable('action', {
  id: uuid('id').primaryKey().references(() => entity.id),
  type: varchar('type', { length: 64 }).unique().notNull(), // A unique type identifier for the action.
  name: varchar('name', { length: 256 }).notNull(), // A human readable name for the action.
  description: varchar('description', { length: 1024 }), // A description of what the actions does.
}, (table) => ({
  actionTypeIdx: index('action_type_idx').on(table.type),
  actionNameIdx: index('action_name_idx').on(table.type),
}));

export type Action = typeof action.$inferSelect;
export type ActionInsert = typeof action.$inferInsert;

export const actionRelations = relations(action, ({ one }) => ({
  entity: one(entity, {
    fields: [ action.id ],
    references: [ entity.id ],
    relationName: 'entity',
  }),
}));
