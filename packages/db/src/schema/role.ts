import {
  pgTable, varchar, uuid, check,
} from 'drizzle-orm/pg-core';
import { sql, relations as drzRelations } from 'drizzle-orm';

import * as entity from './entity.ts';

/**
 * Roles for grouping actions for authorization.
 */
export const table = pgTable('role', {
  id: uuid('id').primaryKey().references(() => entity.table.id),
  name: varchar('name', { length: 32 }).unique().notNull(),
  description: varchar('description', { length: 1024 }),
  color: varchar('color', { length: 7 }),
  icon: varchar('icon', { length: 256 }),
}, (table) => ({
  color: check('color_hex', sql`${table.color} ~* '^#[A-Fa-f0-9]{6}$'`),
}));

export type Role = typeof table.$inferSelect;
export type RoleInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one }) => ({
  entity: one(entity.table, {
    fields: [table.id],
    references: [entity.table.id],
    relationName: 'entity',
  }),
}));
