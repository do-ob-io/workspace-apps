import {
  pgTable, timestamp, boolean, uuid,
} from 'drizzle-orm/pg-core';

/**
 * Entity table for resting data meta information.
 */
export const entity = pgTable('entity', {
  id: uuid('id').primaryKey().defaultRandom(),
  created: timestamp('created').defaultNow().notNull(),
  updated: timestamp('updated').defaultNow().notNull(),
  publish: timestamp('publish').defaultNow().notNull(),
  deleted: boolean('deleted').notNull().default(false),
  creatorId: uuid('creator_id'),
});

export type Entity = typeof entity.$inferSelect;
export type EntityInsert = typeof entity.$inferInsert;
