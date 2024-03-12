import {
  pgTable, timestamp, uuid,
} from 'drizzle-orm/pg-core';

/**
 * Stores a session for a client connection.
 */
export const session = pgTable('session', {
  id: uuid('id').primaryKey().defaultRandom(), // Unique session identifier.
  sub: uuid('sub').notNull(), // Reference to a subject record (usually a user).
  cre: uuid('cre').notNull(), // Reference to a credential record.
  exp: timestamp('exp').notNull(), // Expiration time.
});

export type Session = typeof session.$inferSelect;
export type SessionInsert = typeof session.$inferInsert;
