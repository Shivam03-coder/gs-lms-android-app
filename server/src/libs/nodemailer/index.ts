import { appEnvConfigs } from "@src/configs";
import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smpt.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: appEnvConfigs.AUTH_EMAIL,
    pass: appEnvConfigs.AUTH_PASS,
  },
});


