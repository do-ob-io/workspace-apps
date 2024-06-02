import { relations } from 'drizzle-orm';
import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import { entity } from '../entity/entity.ts';
import { action } from '../action.ts';
import { ambit } from '../ambit.ts';

/**
 * Permits grant entities the ability to perform actions.
 *
 * Example: In authorization...
 * If the entity is the auth subject and has a permit to perform the action,
 * then the entity is authorized to perform that action in the logic layer.
 */
export const permit = pgTable('permit', {
  entityId: uuid('entity_id').notNull().references(() => entity.id, { onDelete: 'cascade' }), // The entity that is granted the permit.
  actionId: uuid('action_id').notNull().references(() => action.id, { onDelete: 'cascade' }), // The action that the entity is permitted to perform.
  ambitId: uuid('ambit_id').notNull().references(() => ambit.id, { onDelete: 'cascade' }), // The ambit that the entity is bound to perform the action within.
}, (table) => ({
  pk: primaryKey({ columns: [ table.entityId, table.actionId, table.ambitId ] }),
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
  ambit: one(ambit, {
    fields: [ permit.ambitId ],
    references: [ ambit.id ],
    relationName: 'ambit',
  }),
}));
