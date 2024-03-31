import { relations as drzRelations } from 'drizzle-orm';
import {
  pgTable, timestamp, boolean, uuid,
} from 'drizzle-orm/pg-core';

import * as assignment from './assignment.ts';
import * as permit from './permit.ts';
import * as entitle from './entitle.ts';

/**
 * Entity table for resting data meta information.
 */
export const table = pgTable('entity', {
  id: uuid('id').primaryKey().defaultRandom(),
  created: timestamp('created').defaultNow().notNull(),
  updated: timestamp('updated').defaultNow().notNull(),
  publish: timestamp('publish').defaultNow().notNull(),
  deleted: boolean('deleted').notNull().default(false),
  ownerId: uuid('owner_id'),
  creatorId: uuid('creator_id'),
});

export type Entity = typeof table.$inferSelect;
export type EntityInsert = typeof table.$inferInsert;

export const relations = drzRelations(table, ({ one, many }) => ({
  /**
   * The entity that owns this entity.
   */
  owner: one(table, {
    fields: [table.ownerId],
    references: [table.id],
    relationName: 'owner',
  }),

  /**
   * The entity that created this entity.
   */
  creator: one(table, {
    fields: [table.creatorId],
    references: [table.id],
    relationName: 'creator',
  }),

  /**
   * Roles, with bundled permits for actions, that this entity is assigned to.
   * Entities will inherit the permits on the roles they are assigned to.
   */
  roles: many(assignment.table, { relationName: 'entity' }),

  /**
   * Specific actions that this entity has direct permits to perform.
   */
  actions: many(permit.table, { relationName: 'entity' }),

  /**
   * Entities that this is entitled to perform actions on.
   */
  entitlements: many(entitle.table, { relationName: 'entity' }),

  /**
   * Entities that are entitled to perform actions on this.
   */
  entitled: many(entitle.table, { relationName: 'target' }),
}));
