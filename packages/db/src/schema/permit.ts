import { relations as drzRelations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import * as entity from './entity.ts';
import * as action from './action.ts';

/**
 * Permits grant entities the ability to perform actions.
 *
 * Example: In authorization...
 * If the entity is the auth subject and has a permit to perform the action,
 * then the entity is authorized to perform that action in the logic layer.
 */
export const table = pgTable('permit', {
  entityId: uuid('entity_id').notNull().references(() => entity.table.id),
  actionId: uuid('action_id').notNull().references(() => action.table.id),
}, (table) => ({
  pk: primaryKey({ columns: [table.entityId, table.actionId] }),
}));

export type Permit = typeof table.$inferSelect;
export type PermitInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one }) => ({
  entity: one(entity.table, {
    fields: [table.entityId],
    references: [entity.table.id],
    relationName: 'entity',
  }),
  action: one(action.table, {
    fields: [table.actionId],
    references: [action.table.id],
    relationName: 'action',
  }),
}));
