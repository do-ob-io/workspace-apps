import { pgTable, serial, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

export const entity = pgTable('entity', {
  id: serial('id').primaryKey().notNull(),
  created: timestamp('created').defaultNow().notNull(),
  updated: timestamp('updated').defaultNow().notNull(),
  publish: timestamp('publish').defaultNow().notNull(),
  deleted: boolean('deleted').notNull().default(false),
  ownerId: integer('owner_id').references(() => entity.id),
  creatorId: integer('creator_id').references(() => entity.id),
});