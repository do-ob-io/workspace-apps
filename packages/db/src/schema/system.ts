import {
  pgEnum,
  pgTable, text, uuid, varchar,
} from 'drizzle-orm/pg-core';

/**
 * The possible data types for a system settings.
 */
export const systemType = pgEnum('system_type', ['boolean', 'number', 'string']);

/**
 * The system table serves as a registry for global configuration settings.
 */
export const system = pgTable('system', {
  id: uuid('id').primaryKey().defaultRandom(), // Unique system identifier.
  name: varchar('name').notNull().unique(), // Name of the system setting.
  type: systemType('type').notNull(), // Type of the system setting (boolean, number, string).
  value: text('value').notNull(), // Value of the system setting.
  description: text('description'), // Optional description of the system setting.
});

export type System = typeof system.$inferSelect;
export type SystemInsert = typeof system.$inferInsert;
