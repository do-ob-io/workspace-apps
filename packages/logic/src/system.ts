/**
 * @module system
 * This module contains system settings and functions.
 * 
 * The NextJS application utilizes the system setup during its instrumentation phase. 
 */
import { database, schema } from '@-/db';

/**
 * Name of the application
 */
export const name = 'My Application';

/**
 * Description of the application
 */
export const description = 'My Application Description';

/**
 * The origin of the application
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/origin
 */
export const origin = 'http://localhost:3000';

/**
 * Array of pending dispatchable actions.
 */
export const dispatch: Array<schema.Dispatch> = [];

/**
 * Setup the application system.
 */
export async function setup() {
  const db = await database();
  
  // If there are no system settings, then the application is not initialized.
  const initialized = !!(await db.query.system.findFirst());

  if (initialized) {
    return;
  }

  // If the application is not initialized, then initialize the application.
  await db.insert(schema.system).values([
    {
      $id: 'name',
      type: 'string',
      value: name,
      description: 'Specifies the name of the application.',
    },
    {
      $id: 'description',
      type: 'string',
      value: description,
      description: 'Describes the application.',
    },
    {
      $id: 'origin',
      type: 'string',
      value: origin,
      description: 'The internet origin of the application.',
    }
  ]);

}

/**
 * Query the system settings.
 */
export async function settings(): Promise<schema.System[]> {
  const db = await database();
  const settings = await db.query.system.findMany();

  return settings;
}

/**
 * Dispatch an action to the system.
 */
