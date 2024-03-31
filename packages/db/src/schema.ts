import * as _action from './schema/action.ts';
import * as _assignment from './schema/assignment.ts';
import * as _entitle from './schema/entitle.ts';
import * as _entity from './schema/entity.ts';
import * as _locale from './schema/locale.ts';
import * as _permit from './schema/permit.ts';
import * as _role from './schema/role.ts';
import * as _session from './schema/session.ts';
import * as _system from './schema/system.ts';

export const action = _action.table;
export const actionRelations = _action.relations;
export const assignment = _assignment.table;
export const assignmentRelations = _assignment.relations;
export const entitle = _entitle.table;
export const entitleRelations = _entitle.relations;
export const entity = _entity.table;
export const entityRelations = _entity.relations;
export const locale = _locale.table;
export const localeRelations = _locale.relations;
export const permit = _permit.table;
export const permitRelations = _permit.relations;
export const role = _role.table;
export const roleRelations = _role.relations;
export const session = _session.table;
export const system = _system.table;

export type Schema = {
  action: typeof action,
  actionRelations: typeof actionRelations,
  assignment: typeof assignment,
  assignmentRelations: typeof assignmentRelations,
  entitle: typeof entitle,
  entitleRelations: typeof entitleRelations,
  entity: typeof entity,
  entityRelations: typeof entityRelations,
  locale: typeof locale,
  localeRelations: typeof localeRelations,
  permit: typeof permit,
  permitRelations: typeof permitRelations,
  role: typeof role,
  roleRelations: typeof roleRelations,
  session: typeof session,
  system: typeof system,
}
