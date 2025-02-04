import { db } from "../config/db"
import { usersTable } from "../config/schema"
import { eq } from "drizzle-orm";

export const getAllUsers = async () => {
  return await db.select().from(usersTable);
};

export const getUserById = async (id: number) => {
  const result = await db.select().from(usersTable).where(eq(usersTable.id, id));
  return result[0] || null;
};

export const createUser = async (userData: { name: string; email: string; phone?: string }) => {
  const result = await db.insert(usersTable).values(userData);
  return result;
};

export const updateUser = async (id: number, userData: Partial<{ name: string; email: string; phone?: string }>) => {
  return await db.update(usersTable).set(userData).where(eq(usersTable.id, id));
};

export const deleteUser = async (id: number) => {
  return await db.delete(usersTable).where(eq(usersTable.id, id));
};