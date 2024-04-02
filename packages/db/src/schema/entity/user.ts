import {
  pgTable, varchar, uuid, index, boolean, timestamp, check,
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

import { entity } from './entity.ts';
import { dispatch } from '../dispatch.ts';

/**
 * A user that can be authenticated and authorized using the name.
 */
export const user = pgTable('user', {
  id: uuid('id').primaryKey().references(() => entity.id),
  name: varchar('name', { length: 32 }).unique().notNull(), // Unique handle for the user.
  email: varchar('email', { length: 128 }).unique(), // Email address for sending account information and recovery.
  emailVerified: boolean('email_verified').notNull().default(false), // Flag indicating if the email address has been verified for this user.
  phone: varchar('phone', { length: 16 }).unique(), // Phone number for sending account information and recovery.
  phoneVerified: boolean('phone_verified').notNull().default(false), // Flag indicating if the phone number has been verified for this user.
  locked: boolean('locked').notNull().default(false), // Flag indicating if the user account is locked. Locked accounts cannot establish a session (login).
  lastLogin: timestamp('last_login'),  // Last time the user logged in.
}, (table) => ({
  userNameIdx: index('user_name_idx').on(table.name),
  userEmailIdx: index('user_email_idx').on(table.email),
  userPhoneIdx: index('user_phone_idx').on(table.phone),
  emailValid: check('user_email_valid', sql`${table.email} ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'`),
}));

export type User = typeof user.$inferSelect;
export type UserInsert = typeof user.$inferInsert;

export const userRelations = relations(user, ({ one, many }) => ({
  entity: one(entity, {
    fields: [user.id],
    references: [entity.id],
    relationName: 'entity',
  }),

  dispatches: many(dispatch, { relationName: 'subject' }),

}));
