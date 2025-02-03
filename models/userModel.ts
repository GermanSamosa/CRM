import { pool } from "../config/db";

export interface User {
    id?: number;
    name: string;
    email: string;
    phone?: string;
    createdAt?: Date;
  }

  export const getAllUsers = async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  };
  
  export const createUser = async (userData: User) => {
    const { name, email, phone } = userData;
    const query = "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";
    const [result] = await pool.query(query, [name, email, phone]);
    return result;
  };