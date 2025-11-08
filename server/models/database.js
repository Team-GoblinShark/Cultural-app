import { Pool } from "pg";
// import type { QueryResult } from "pg";

const PG_URI =
  "postgresql://postgres:uZOtBi2LWn3yXluv@db.yjijzzpnosftnbnlnkov.supabase.co:5432/postgres";

const pool = new Pool({
  connectionString: PG_URI,
});

export default {
  query: (text, params) => {
    console.log("executed query", text);
    return pool.query(text, params);
  },
};
