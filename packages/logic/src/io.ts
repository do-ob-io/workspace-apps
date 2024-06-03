export interface Input<T = Record<string, unknown>>{
  /**
   * Session object.
   */
  session: Record<string, unknown>;

  /**
   * Access token.
   */
  access: Record<string, unknown>;

  /**
   * The action identifier to dispatch.
   */
  $action: string;

  /**
   * The payload data to send with the action.
   */
  payload: T;
}
