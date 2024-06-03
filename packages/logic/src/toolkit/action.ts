export interface Action<
  P extends Readonly<Record<string, unknown>> = Readonly<Record<string, unknown>>
>{
  /**
   * The key identifier of the action.
   */
  $id: string;

  /**
   * The title of the action.
   */
  title: string;

  /**
   * A description of what the action does.
   */
  description: string;

  /**
   * Properties for the action payload.
   */
  properties: P;
}
