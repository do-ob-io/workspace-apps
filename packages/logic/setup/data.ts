import type { schema } from '@-/db';

/**
 * Define some basic actions that can be performed.
 */
export const actions: schema.ActionInsert[] = [
  {
    id: 'account_create',
    name: 'Create Account',
    description: 'Inserts new records required for a fresh account. If the system is configured with a default role, the account will be assigned that role.',
  },
  {
    id: 'account_delete',
    name: 'Delete Account',
    description: 'Removes records associated with an account. The account is permanently deleted after the system configured time.',
  },
  {
    id: 'register',
    name: 'Register',
    description: 'Register a new account if the system is configured to allow registration.',
  },
  {
    id: 'login',
    name: 'Login',
    description: 'Logs a client into the application.',
  },
  {
    id: 'logout',
    name: 'Logout',
    description: 'Logs a client out of the application.',
  }
];
