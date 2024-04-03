import type { db } from '@-/db';

export interface Session {
  id: string;
  subject: string;
  expires: Date;
  created: Date;
}

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
  session?: Session;
  access?: Access;
  database: typeof db;
}
