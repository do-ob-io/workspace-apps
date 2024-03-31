import { relations as drzRelations } from 'drizzle-orm';
import {
  pgTable, varchar, uuid, index,
} from 'drizzle-orm/pg-core';

import * as entity from './entity.ts';

/**
 * Contains actions that can be performed by subjects in the authorization layer.
 */
export const table = pgTable('action', {
  id: uuid('id').primaryKey().references(() => entity.table.id),
  type: varchar('type', { length: 32 }).unique().notNull(),
  description: varchar('description', { length: 1024 }),
}, (table) => ({
  typeIdx: index('type_idx').on(table.type),
}));

export type Action = typeof table.$inferSelect;
export type ActionInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one }) => ({
  entity: one(entity.table, {
    fields: [table.id],
    references: [entity.table.id],
    relationName: 'entity',
  }),
}));
