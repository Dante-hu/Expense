import { neon } from "@neondatabase/serverless";
import { drizzzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(process.env.Next_PUBLIC_DATABASE_URL);
export const db = drizzle(sql, { schema });
