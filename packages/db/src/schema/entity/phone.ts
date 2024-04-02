import {
  pgTable, varchar, uuid,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { entity } from './entity.ts';

/**
 * Email addresses
 */
export const phone = pgTable('phone', {
  id: uuid('id').primaryKey().references(() => entity.id),
  countryCode: varchar('country_code', { length: 3 }).notNull(), // ISO 3166-1 alpha-3
  number: varchar('number', { length: 12 }).notNull(), // Any number up to 12 digits
});

export type Phone = typeof phone.$inferSelect;
export type PhoneInsert = typeof phone.$inferInsert;

export const phoneRelations = relations(phone, ({ one }) => ({
  entity: one(entity, {
    fields: [phone.id],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
