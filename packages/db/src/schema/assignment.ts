import { relations as drzRelations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import * as entity from './entity.ts';
import * as role from './role.ts';

/**
 * Assignment table for Many-to-Many entity <-> role relationships for authorization.
 * Roles are a collection of permitted actions.
 */
export const table = pgTable('assignment', {
  entityId: uuid('entity_id').references(() => entity.table.id).notNull(),
  roleId: uuid('role_id').references(() => role.table.id).notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.entityId, table.roleId] }),
}));

export type Assignment = typeof table.$inferSelect;
export type AssignmentInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one }) => ({
  entity: one(entity.table, {
    fields: [table.entityId],
    references: [entity.table.id],
    relationName: 'entity',
  }),
  role: one(role.table, {
    fields: [table.roleId],
    references: [role.table.id],
    relationName: 'role',
  }),
}));
