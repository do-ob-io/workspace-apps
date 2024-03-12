import { relations } from 'drizzle-orm';

import { locale } from './locale.ts';
import { entity } from '../entity.ts';

export const localeRelations = relations(locale, ({ one }) => ({
  entity: one(entity, {
    fields: [locale.id],
    references: [entity.id],
    relationName: 'entity',
  }),
}));
