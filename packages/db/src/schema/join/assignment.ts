import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import { entity } from '../entity.ts';
import { role } from '../entity/role.ts';

/**
 * Assignment table for Many-to-Many entity <-> role relationships for authorization.
 * Roles are a collection of permitted actions.
 */
export const assignment = pgTable('assignment', {
  entityId: uuid('entity_id').references(() => entity.id).notNull(),
  roleId: uuid('role_id').references(() => role.id).notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [table.entityId, table.roleId] }),
}));

export type Assignment = typeof assignment.$inferSelect;
export type AssignmentInsert = typeof assignment.$inferInsert;
