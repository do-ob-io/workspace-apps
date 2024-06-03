import { setup } from '@-/logic/system';

/**
 * Setup the application system when the NextJS service starts.
 */
export function register() {
  // Setup the application system if it isn't already initialized.
  setup();
}
