import { Elysia } from "elysia";
import { pool } from "./config/db";
import { userRoutes } from "./routes/userRoutes";

const app = new Elysia();

app.get("/", () => "Welcome to my Elysia API");

//User Routes
app.use(userRoutes());

app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});


// console.log("Hello via Bun!");