import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import "dotenv/config";
import { usersTable } from "./schema";

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const db = drizzle(pool);

pool.getConnection()
  .then(() => console.log("Connected to MySQL"))
  .catch((err) => console.error("Database connection error:", err));

//Test Seeding and Query
// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     name: 'Johnny',
//     email: 'johnnyNumber2@example.com',
//   };

//   await db.insert(usersTable).values(user);
//   console.log('New user created!')

//   const users = await db.select().from(usersTable);
//   console.log('Getting all users from the database: ', users)
//   /*
//   const users: {
//     id: number;
//     name: string;
//     email: string;
//   }[]
//   */

//   // await db
//   //   .update(usersTable)
//   //   .set({
//   //     age: 31,
//   //   })
//   //   .where(eq(usersTable.email, user.email));
//   // console.log('User info updated!')

//   // await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   // console.log('User deleted!')
// }

// main(); 