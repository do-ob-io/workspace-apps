import {
  pgTable, varchar, uuid, index, bigint
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { entity } from '../entity.ts';

/**
 * Information about files that can be uploaded.
 */
export const file = pgTable('file', {
  id: uuid('id').primaryKey().references(() => entity.id),
  name: varchar('name', { length: 32 }).unique().notNull(),
  description: varchar('description', { length: 1024 }),
  mimeType: varchar('mime_type', { length: 64 }).notNull(),
  size: bigint('size', { mode: 'number' }).notNull(), // Size in bytes.
  path: varchar('path', { length: 2048 }).notNull(),
}, (table) => ({
  fileNameIdx: index('file_name_idx').on(table.name),
  filePathIdx: index('file_path_idx').on(table.path),
}));

export type File = typeof file.$inferSelect;
export type FileInsert = typeof file.$inferInsert;

export const fileRelations = relations(file, ({ one }) => ({
  entity: one(entity, {
    fields: [file.id],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
