import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@-/db/schema';

const DB_URL = process.env.DB_URL || 'postgres://user@localhost:5432/database';

const sql = postgres(DB_URL);
const db = drizzle<schema.Schema>(sql, { schema: schema });

export {
  db,
  schema,
};
