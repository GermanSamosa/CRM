import { Elysia } from "elysia";
import { getUsers, addUser } from "../controllers/userController";

export const userRoutes = (app: Elysia) => {

  //GET All Users
  app.get("/users", async () => {
    return await getUsers();
  });

  //POST Create User
  app.post("/users", async (req , res ) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).send({ message: "Name and email are required" });
    }

    const result = await addUser({ name, email, phone });
    if (result.error) {
        return res.status(500).send({ message: result.message, error: result.error });
    }
    return res.status(201).send(result);
  });
};
