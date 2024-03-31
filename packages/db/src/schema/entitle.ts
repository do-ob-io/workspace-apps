import { relations as drzRelations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import * as entity from './entity.ts';
import * as action from './action.ts';

/**
 * Entitles grant entities the ability to perform actions on specific entities.
 */
export const table = pgTable('entitle', {
  entityId: uuid('entity_id').notNull().references(() => entity.table.id),
  targetId: uuid('target_id').notNull().references(() => entity.table.id),
  actionId: uuid('action_id').notNull().references(() => action.table.id),
}, (table) => ({
  pk: primaryKey({ columns: [table.entityId, table.targetId, table.actionId] }),
}));

export type Entitle = typeof table.$inferSelect;
export type EntitleInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one }) => ({
  entity: one(entity.table, {
    fields: [table.entityId],
    references: [entity.table.id],
    relationName: 'entity',
  }),
  target: one(entity.table, {
    fields: [table.targetId],
    references: [entity.table.id],
    relationName: 'target',
  }),
  action: one(action.table, {
    fields: [table.actionId],
    references: [action.table.id],
    relationName: 'action',
  }),
}));
