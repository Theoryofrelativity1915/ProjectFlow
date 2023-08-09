const session = require('express-session')

//postgres stuff
// 1st: create a session pg-related
const pgSession = require('connect-pg-simple')(session);
const { Pool } = require('pg')

// 2nd: prepare configuration stuff for creating of a Connection Pool to PostgreSQL
const poolConfigOpts = {
    "host": "localhost",
    "port": "5432",
    "user": "postgres",
    "password": "postgres",
    "database": "projectflow",
    "max": 20,
    "connectionTimeoutMillis": 0,
    "idleTimeoutMillis": 0
}

const pool = new Pool(poolConfigOpts);

// 3rd: create a PostgreSQL Store that will handles all sessions logic from here (e.g set/create a session record in `session` table; prune/delete out-dated sessions; etc)
// To create a Store, you need a Connection Pool (recommended by author)
const postgreStore = new pgSession({
  // check interface PGStoreOptions for more info https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/connect-pg-simple/index.d.ts
  pool: pool,
  createTableIfMissing: true, // this will create a `session` table if you do not have it yet
})

module.exports = {postgreStore, pool}