import { relations } from 'drizzle-orm';
import {
  pgTable, varchar, uuid, index, text, unique,
} from 'drizzle-orm/pg-core';

import { entity }from './entity.ts';

/**
 * Translations for text based on a locale code and a name as key.
 */
export const locale = pgTable('locale', {
  id: uuid('id').primaryKey().references(() => entity.id),
  code: varchar('code', { length: 32 }).notNull(),
  name: varchar('name', { length: 1024 }).notNull(),
  content: text('content'),
}, (table) => ({
  unique: unique().on(table.code, table.name),
  codeIdx: index('code_idx').on(table.code),
  nameIdx: index('name_idx').on(table.name),
}));

export type Locale = typeof locale.$inferSelect;
export type LocaleInsert = typeof locale.$inferInsert;

export const localeRelations = relations(locale, ({ one }) => ({
  entity: one(entity, {
    fields: [locale.id],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
