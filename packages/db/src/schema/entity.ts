import { relations } from 'drizzle-orm';
import {
  pgTable, timestamp, boolean, uuid,
} from 'drizzle-orm/pg-core';

import { assignment } from './assignment.ts';
import { permit } from './permit.ts';
import { entitle } from './entitle.ts';
import { credential } from './credential.ts';

/**
 * Entity table for resting data meta information.
 */
export const entity = pgTable('entity', {
  id: uuid('id').primaryKey().defaultRandom(),
  created: timestamp('created').defaultNow().notNull(),
  updated: timestamp('updated').defaultNow().notNull(),
  publish: timestamp('publish').defaultNow().notNull(),
  deleted: boolean('deleted').notNull().default(false),
  ownerId: uuid('owner_id'),
  creatorId: uuid('creator_id'),
});

export type Entity = typeof entity.$inferSelect;
export type EntityInsert = typeof entity.$inferInsert;

export const entityRelations = relations(entity, ({ one, many }) => ({
  /**
   * The entity that owns this entity.
   */
  owner: one(entity, {
    fields: [entity.ownerId],
    references: [entity.id],
    relationName: 'owner',
  }),

  /**
   * The entity that created this entity.
   */
  creator: one(entity, {
    fields: [entity.creatorId],
    references: [entity.id],
    relationName: 'creator',
  }),

  /**
   * Roles, with bundled permits for actions, that this entity is assigned to.
   * Entities will inherit the permits on the roles they are assigned to.
   */
  roles: many(assignment, { relationName: 'entity' }),

  /**
   * Specific actions that this entity has direct permits to perform.
   */
  actions: many(permit, { relationName: 'entity' }),

  /**
   * Entities that this is entitled to perform actions on.
   */
  entitlements: many(entitle, { relationName: 'entity' }),

  /**
   * Entities that are entitled to perform actions on this.
   */
  entitled: many(entitle, { relationName: 'target' }),

  /**
   * Credentials that this entity is registered with.
   */
  credentials: many(credential, { relationName: 'subject' }),
}));
