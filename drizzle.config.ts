import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
});
