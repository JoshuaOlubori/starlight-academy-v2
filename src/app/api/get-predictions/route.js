import { NextResponse } from 'next/server';
import { Pool } from 'pg'; // Assuming you're using pg for connecting to your Neon DB

// Create a connection to your Neon PostgreSQL database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ensure this env variable is set in your `.env` file
  ssl: {
    rejectUnauthorized: false, // Optional: Use this to skip certificate validation if necessary
  },
});

// Define the GET handler
export async function GET() {
  try {
    const result = await pool.query(`
      SELECT student_id, failure_risk_percentage
      FROM student_failure_predictions 
      ORDER BY failure_risk_percentage DESC 
      LIMIT 5
    `);

    console.log(NextResponse.json(result.rows));
    return NextResponse.json(result.rows); // Send the query result as JSON
  
  } catch (error) {
    console.error('Error querying student predictions:', error);
    return NextResponse.error();
  }
}