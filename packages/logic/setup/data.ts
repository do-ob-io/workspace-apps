import type { schema } from '@-/db';

/**
 * Omit the `id` field from a type that'll be set later when inserting into the database.
 * 
 * E = Entity
 */
type E<T> = Omit<T, 'id'>;

/**
 * Define some basic actions that can be performed.
 */
export const actions: E<schema.ActionInsert>[] = [
  {
    type: 'account:create',
    name: 'Create Account',
    description: 'Inserts new records required for a fresh account. If the system is configured with a default role, the account will be assigned that role.',
  },
  {
    type: 'account:delete',
    name: 'Delete Account',
    description: 'Removes records associated with an account. The account is permanently deleted after the system configured time.',
  },
  {
    type: 'profile:own:read',
    name: 'Read Own Profile',
    description: 'Retrieves the profile information for the current client.',
  },
  {
    type: 'profile:read',
    name: 'Read Profile',
    description: 'Retrieves profile information given an ID.',
  },
  {
    type: 'register',
    name: 'Register',
    description: 'Registers a new account for a client if the system is configured to allow self-registration.',
  },
  {
    type: 'login',
    name: 'Login',
    description: 'Logs a client into the application.',
  },
  {
    type: 'logout',
    name: 'Logout',
    description: 'Logs a client out of the application.',
  }
];
