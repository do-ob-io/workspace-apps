import { relations } from 'drizzle-orm';

import { entitle } from './entitle.ts';
import { entity } from '../entity.ts';
import { action } from '../entity/action.ts';

export const entitleRelations = relations(entitle, ({ one }) => ({
  entity: one(entity, {
    fields: [entitle.entityId],
    references: [entity.id],
    relationName: 'entity',
  }),
  target: one(entity, {
    fields: [entitle.targetId],
    references: [entity.id],
    relationName: 'target',
  }),
  action: one(action, {
    fields: [entitle.actionId],
    references: [action.id],
    relationName: 'action',
  }),
}));
