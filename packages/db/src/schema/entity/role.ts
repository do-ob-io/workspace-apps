import {
  pgTable, varchar, uuid, check,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { entity } from '../entity.ts';

/**
 * Roles for grouping actions for authorization.
 */
export const role = pgTable('role', {
  id: uuid('id').primaryKey().references(() => entity.id),
  name: varchar('name', { length: 32 }).unique().notNull(),
  description: varchar('description', { length: 1024 }),
  color: varchar('color', { length: 7 }),
  icon: varchar('icon', { length: 256 }),
}, (table) => ({
  color: check('color_hex', sql`${table.color} ~* '^#[A-Fa-f0-9]{6}$'`),
}));

export type Role = typeof role.$inferSelect;
export type RoleInsert = typeof role.$inferInsert;
