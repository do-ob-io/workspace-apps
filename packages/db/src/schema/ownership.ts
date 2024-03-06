import { pgTable, uuid } from 'drizzle-orm/pg-core';

import { entity } from './entity.ts';

/**
 * Ownership table for entity to entity relationships to indication ownerships.
 */
export const ownership = pgTable('ownership', {
  ownerId: uuid('owner_id').references(() => entity.id).notNull(),
  ownsId: uuid('owns_id').references(() => entity.id).notNull(),
});

export type Ownership = typeof ownership.$inferSelect;
export type OwnershipInsert = typeof ownership.$inferInsert;
