import { relations as drzRelations } from 'drizzle-orm';
import {
  pgTable, varchar, uuid, index, text, unique,
} from 'drizzle-orm/pg-core';

import * as entity from './entity.ts';

/**
 * Translations for text based on a locale code and a name as key.
 */
export const table = pgTable('locale', {
  id: uuid('id').primaryKey().references(() => entity.table.id),
  code: varchar('code', { length: 32 }).notNull(),
  name: varchar('name', { length: 1024 }).notNull(),
  content: text('content'),
}, (table) => ({
  unique: unique().on(table.code, table.name),
  codeIdx: index('code_idx').on(table.code),
  nameIdx: index('name_idx').on(table.name),
}));

export type Locale = typeof table.$inferSelect;
export type LocaleInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one }) => ({
  entity: one(entity.table, {
    fields: [table.id],
    references: [entity.table.id],
    relationName: 'entity',
  }),
}));
