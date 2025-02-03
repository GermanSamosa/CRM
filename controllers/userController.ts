import { getAllUsers, createUser } from "../models/userModel";

export const getUsers = async () => {
  const users = await getAllUsers();
  return users;
};

export const addUser = async (userData: { name: string; email: string; phone?: string; }) => {
  try {
    const result = await createUser(userData);
    return { message: "User created successfully", data: result };
  } catch (error: any) {
    return { message: "Error creating user", error: error.message };
  }
};