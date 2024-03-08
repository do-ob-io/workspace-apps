import { pgTable, uuid, primaryKey } from 'drizzle-orm/pg-core';

import { entity } from '../entity.ts';
import { action } from '../entity/action.ts';

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
