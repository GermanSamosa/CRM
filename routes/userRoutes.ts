import { Elysia, t } from "elysia"; 
import { getUser, getUsers, addUser, editUser, removeUser } from "../controllers/userController";

export const userRoutes = () => {
  const userApp = new Elysia(); 

  userApp.get("/users", async () => {
    return await getUsers();
  });

  userApp.get("/users/:id", async ({ params }) => {
    const user = await getUser(Number(params.id));
    if (!user) return { message: "User not found" };
    return user;
  }, {
    params: t.Object({
      id: t.Number(),
    }),
  });

  userApp.post("/users", async ({ body }) => {
    const result = await addUser(body);
    return result;
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
      phone: t.Optional(t.String()),
    })
  });

  userApp.put("/users/:id", async ({ params, body }) => {
    const result = await editUser(Number(params.id), body);
    return result;
  }, {
    params: t.Object({
      id: t.Number(),
    }),
    body: t.Object({
      name: t.String(),
      email: t.String(),
      phone: t.Optional(t.String()),
    })
  });

  userApp.delete("/users/:id", async ({ params }) => {
    const result = await removeUser(Number(params.id));
    return result;
  }, {
    params: t.Object({
      id: t.Number(),
    })
  });

  return userApp;
};
