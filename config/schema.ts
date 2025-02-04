import { mysqlTable, serial, varchar, timestamp } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users", {
  id: serial("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  company: varchar("company", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});