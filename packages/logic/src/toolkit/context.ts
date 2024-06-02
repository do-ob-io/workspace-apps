import type { db, schema } from '@-/db';

/**
 * System variables for the application.
 * 
 * Key: The name of the system setting.
 * 
 * Type: The data type of the system setting.
 * 
 * Value: The value of the system setting.
 */
export type System = Record<string, {
  type: 'string';
  value: string;
} | {
  type: 'number';
  value: number;
} | {
  type: 'boolean';
  value: boolean;
}>;

export interface Access {
  subject: string;
  expires: Date;
  created: Date;
}

export interface FileSystem {
  write: (file: ArrayBuffer) => string;
  read: (path: string) => ArrayBuffer;
}

export interface Context {
  /**
   * The system variables.
   */
  system: System;

  /**
   * The client session.
   */
  session?: schema.Session;

  /**
   * The client access token.
   */
  access?: Access;

  /**
   * The ORM Database.
   * 
   * @see https://orm.drizzle.team/docs
   */
  database: typeof db;
}
