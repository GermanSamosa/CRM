import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../models/userModel";

export const getUser = async (id: number) => {
  return await getUserById(id);
};

export const getUsers = async () => await getAllUsers();

export const addUser = async (userData: { name: string; email: string; phone?: string }) => {
  return await createUser(userData);
};

export const editUser = async (id: number, userData: Partial<{ name: string; email: string; phone?: string }>) => {
  return await updateUser(id, userData);
};

export const removeUser = async (id: number) => {
  return await deleteUser(id);
};
