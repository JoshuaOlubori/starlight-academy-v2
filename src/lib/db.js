// lib/db.js
import { Pool } from "pg";

// Initialize PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER, // Your PostgreSQL user
  host: process.env.DB_HOST, // Your Neon DB host
  database: process.env.DB_NAME, // Your PostgreSQL database name
  password: process.env.DB_PASSWORD, // Your PostgreSQL password
  port: process.env.DB_PORT, // Your PostgreSQL port (usually 5432)
});

export const query = (text, params) => pool.query(text, params);
