import { relations } from 'drizzle-orm';

import { permit } from './permit.ts';
import { entity } from '../entity.ts';
import { action } from '../entity/action.ts';

export const permitRelations = relations(permit, ({ one }) => ({
  entity: one(entity, {
    fields: [permit.entityId],
    references: [entity.id],
    relationName: 'entity',
  }),
  action: one(action, {
    fields: [permit.actionId],
    references: [action.id],
    relationName: 'action',
  }),
}));
