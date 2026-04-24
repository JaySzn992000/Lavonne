// config.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "neondb_owner", // username
  host: "ep-lingering-wind-aduh3od1-pooler.c-2.us-east-1.aws.neon.tech", // host
  database: "neondb", // database name
  password: "npg_1CqeMWFOzB2U", // password
  port: 5432, // default postgres port
  ssl: { rejectUnauthorized: false }, // ssl required
});

module.exports = pool;