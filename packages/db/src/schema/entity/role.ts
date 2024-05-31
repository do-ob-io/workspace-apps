import {
  pgTable, varchar, uuid, check,
} from 'drizzle-orm/pg-core';
import { sql, relations } from 'drizzle-orm';

import { entity } from './entity.ts';

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
  colorHexChk: check('color_hex_chk', sql`${table.color} ~* '^#[A-Fa-f0-9]{6}$'`),
}));

export type Role = typeof role.$inferSelect;
export type RoleInsert = typeof role.$inferInsert;

export const roleRelations = relations(role, ({ one }) => ({
  entity: one(entity, {
    fields: [ role.id ],
    references: [ entity.id ],
    relationName: 'entity',
  }),
}));
