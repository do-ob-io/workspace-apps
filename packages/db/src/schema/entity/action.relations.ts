import { relations } from 'drizzle-orm';

import { action } from './action.ts';
import { entity } from '../entity.ts';

export const actionRelations = relations(action, ({ one }) => ({
  entity: one(entity, {
    fields: [action.id],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
