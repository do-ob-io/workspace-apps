import { relations } from 'drizzle-orm';

import { assignment } from './assignment.ts';
import { entity } from '../entity.ts';
import { role } from '../entity/role.ts';

export const assignmentRelations = relations(assignment, ({ one }) => ({
  entity: one(entity, {
    fields: [assignment.entityId],
    references: [entity.id],
    relationName: 'entity',
  }),
  role: one(role, {
    fields: [assignment.roleId],
    references: [role.id],
    relationName: 'role',
  }),
}));
