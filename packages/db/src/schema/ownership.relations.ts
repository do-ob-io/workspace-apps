import { relations } from 'drizzle-orm';

import { entity } from './entity.ts';
import { ownership } from './ownership.ts';

export const ownershipRelations = relations(ownership, ({ one }) => ({
  owner: one(entity, {
    fields: [ownership.ownerId],
    references: [entity.id],
    relationName: 'owner',
  }),
  owns: one(entity, {
    fields: [ownership.ownsId],
    references: [entity.id],
    relationName: 'owns',
  }),
}));
