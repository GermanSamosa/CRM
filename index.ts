import { Elysia } from "elysia";
import { pool } from "./config/db";

const app = new Elysia();

app.get("/", () => "Welcome to my Elysia API");

// //test GET
// app.get("/users", async () => {
//   const [rows] = await pool.query("SELECT * FROM users");
//   return rows;
// });

// //test POST
// app.post("/users", async (req) => {
//   const { name, email }: any = req.body;
//   if (!name || !email) {
//     return { message: "Name and email are required" };
//   }
  
//   try {
//     const result = await pool.query(
//       "INSERT INTO users (name, email) VALUES (?, ?)",
//       [name, email]
//     );
//     return { message: "User added successfully", result };
//   } catch (error) {
//     return { message: "Error adding user", error };
//   }
// });

app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});


// console.log("Hello via Bun!");