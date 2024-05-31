import {
  pgTable, uuid, smallint
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

import { file } from './file.ts';

/**
 * Information about videos that can be uploaded.
 */
export const video = pgTable('video', {
  id: uuid('id').primaryKey().references(() => file.id),
  height: smallint('height').notNull(),
  width: smallint('width').notNull(),
  length: smallint('length').notNull(),
});

export type Video = typeof video.$inferSelect;
export type VideoInsert = typeof video.$inferInsert;

export const videoRelations = relations(video, ({ one }) => ({
  file: one(file, {
    fields: [ video.id ],
    references: [ file.id ],
    relationName: 'file',
  }),
}));
