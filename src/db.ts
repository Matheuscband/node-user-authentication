import { Pool } from "pg";

const connectionString = 'postgres://sfbnwcxg:AEE3iIjcV3LsFF980z-v_4MoPeEsqbHr@raja.db.elephantsql.com/sfbnwcxg';

const db = new Pool({ connectionString });

export default db;