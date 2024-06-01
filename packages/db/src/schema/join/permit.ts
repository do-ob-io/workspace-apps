import { relations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import { entity } from '../entity/entity.ts';
import { action } from '../entity/action.ts';

/**
 * Permits grant entities the ability to perform actions.
 *
 * Example: In authorization...
 * If the entity is the auth subject and has a permit to perform the action,
 * then the entity is authorized to perform that action in the logic layer.
 */
export const permit = pgTable('permit', {
  entityId: uuid('entity_id').notNull().references(() => entity.id), // The entity that is granted the permit.
  actionId: uuid('action_id').notNull().references(() => action.id), // The action that the entity is permitted to perform.
}, (table) => ({
  pk: primaryKey({ columns: [ table.entityId, table.actionId ] }),
}));

export type Permit = typeof permit.$inferSelect;
export type PermitInsert = typeof permit.$inferInsert;

export const permitRelations = relations(permit, ({ one }) => ({
  entity: one(entity, {
    fields: [ permit.entityId ],
    references: [ entity.id ],
    relationName: 'entity',
  }),
  action: one(action, {
    fields: [ permit.actionId ],
    references: [ action.id ],
    relationName: 'action',
  }),
}));
