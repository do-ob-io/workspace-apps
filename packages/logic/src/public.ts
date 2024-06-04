/**
 * Logic function that do not require Authorization or Authentication to be used.
 * 
 * These are convenience functions that should be freely used in the application.
 * 
 * @module public
 */
import { database } from '@-/db';
import { memoize } from './memorize';

/**
 * The appication information from the system registry.
 * 
 * Throws an error if the application is not initialized.
 */
export const appInfo = memoize(async () => {
  const db = await database();

  const settings = await db.query.system.findMany({
    where: (system, { eq }) => (eq(system.$id, 'name') || eq(system.$id, 'description') || eq(system.$id, 'origin')),
  });

  if (settings.length !== 3) {
    throw new Error('The application is not initialized.');
  }

  return settings.reduce((acc, setting) => {
    acc[setting.$id] = setting.value;
    return acc;
  }, {} as Record<string, string>) as {
    name: string;
    description: string;
    origin: string;
  };

});
