import {
  pgTable, varchar, uuid, index,
} from 'drizzle-orm/pg-core';

import { entity } from '../entity.ts';

/**
 * Contains actions that can be performed by subjects in the authorization layer.
 */
export const action = pgTable('action', {
  id: uuid('id').primaryKey().references(() => entity.id),
  type: varchar('type', { length: 32 }).unique().notNull(),
  description: varchar('description', { length: 1024 }),
}, (table) => ({
  typeIdx: index('type_idx').on(table.type),
}));

export type Action = typeof action.$inferSelect;
export type ActionInsert = typeof action.$inferInsert;
