import { relations } from 'drizzle-orm';

import { entity } from './entity.ts';
import { assignment, permit, entitle } from './join/index.ts';

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
}));
