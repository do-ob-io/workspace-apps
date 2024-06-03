// import postgres from 'postgres';
import postgres from 'postgres';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import * as schema from './schema.ts';

const POSTGRES_URL = process.env.POSTGRES_URL || 'postgres://user@localhost:5432/database';

export type Database = PostgresJsDatabase<typeof schema>;

let dbInstance: Database;

export async function database() {
  if (dbInstance) {
    return dbInstance;
  }
  const sql = postgres(POSTGRES_URL);

  return drizzle(sql, { schema });
};

export {
  schema,
};
