import { relations } from 'drizzle-orm';

import { role } from './role.ts';
import { entity } from '../entity.ts';

export const roleRelations = relations(role, ({ one }) => ({
  entity: one(entity, {
    fields: [role.id],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
