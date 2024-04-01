import { relations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import { entity } from './entity.ts';
import { action } from './action.ts';

/**
 * Entitles grant entities the ability to perform actions on specific entities.
 */
export const entitle = pgTable('entitle', {
  entityId: uuid('entity_id').notNull().references(() => entity.id),
  targetId: uuid('target_id').notNull().references(() => entity.id),
  actionId: uuid('action_id').notNull().references(() => action.id),
}, (table) => ({
  pk: primaryKey({ columns: [table.entityId, table.targetId, table.actionId] }),
}));

export type Entitle = typeof entitle.$inferSelect;
export type EntitleInsert = typeof entitle.$inferInsert;

export const entitleRelations = relations(entitle, ({ one }) => ({
  entity: one(entity, {
    fields: [entitle.entityId],
    references: [entity.id],
    relationName: 'entity',
  }),
  target: one(entity, {
    fields: [entitle.targetId],
    references: [entity.id],
    relationName: 'target',
  }),
  action: one(action, {
    fields: [entitle.actionId],
    references: [action.id],
    relationName: 'action',
  }),
}));
