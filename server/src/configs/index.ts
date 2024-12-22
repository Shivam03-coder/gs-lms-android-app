import { config } from "dotenv";
config();

console.log(process.env.DATABASE_URL)

export const appEnvConfigs = {
  PORT: process.env.PORT,
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
};
