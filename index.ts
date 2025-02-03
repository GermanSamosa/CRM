import { Elysia } from "elysia";
import { pool } from "./db";

// Initialize API
const app = new Elysia();

// Home route
app.get("/", () => "Welcome to my Elysia API");

// Get all users
app.get("/users", async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});


// console.log("Hello via Bun!");