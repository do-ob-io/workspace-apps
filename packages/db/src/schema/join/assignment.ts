import { relations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import { entity } from '../entity/entity.ts';
import { role } from '../entity/role.ts';

/**
 * Assignment table for Many-to-Many entity <-> role relationships for authorization.
 * Roles are a collection of permitted actions.
 */
export const assignment = pgTable('assignment', {
  entityId: uuid('entity_id').references(() => entity.id).notNull(),
  roleId: uuid('role_id').references(() => role.id).notNull(),
}, (table) => ({
  pk: primaryKey({ columns: [ table.entityId, table.roleId ] }),
}));

export type Assignment = typeof assignment.$inferSelect;
export type AssignmentInsert = typeof assignment.$inferInsert;

export const assignmentRelations = relations(assignment, ({ one }) => ({
  entity: one(entity, {
    fields: [ assignment.entityId ],
    references: [ entity.id ],
    relationName: 'entity',
  }),
  role: one(role, {
    fields: [ assignment.roleId ],
    references: [ role.id ],
    relationName: 'role',
  }),
}));
