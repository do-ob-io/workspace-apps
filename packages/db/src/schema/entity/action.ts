import { relations } from 'drizzle-orm';
import {
  pgTable, varchar, uuid, index,
} from 'drizzle-orm/pg-core';

import { entity } from './entity.ts';

/**
 * Contains actions that can be performed by subjects in the authorization layer.
 */
export const action = pgTable('action', {
  id: uuid('id').primaryKey().references(() => entity.id),
  type: varchar('type', { length: 64 }).unique().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  description: varchar('description', { length: 1024 }),
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
