import { relations } from 'drizzle-orm';

import { entity } from './entity.ts';
import { ownership } from './ownership.ts';

export const entityRelations = relations(entity, ({ one, many }) => ({
  creator: one(entity, {
    fields: [entity.creatorId],
    references: [entity.id],
    relationName: 'creator',
  }),
  owners: many(ownership, { relationName: 'owner' }),
  owns: many(ownership, { relationName: 'owns' }),
}));
