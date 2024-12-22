import { db } from "@src/db";
import { transport } from "@src/libs/nodemailer";

export class ServerUtility {
  email: string;
  userId: string;

  private generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  constructor(useremail: string, userId: string) {
    this.email = useremail;
    this.userId = userId;
  }

  public SendEmail = async () => {
    try {
      const otp = this.generateOtp();
      const expireAt = new Date(Date.now() + 15 * 60 * 1000);
      const info = await transport.sendMail({
        from: '"LMS Team"',
        to: this.email,
        subject: "Your OTP Code",
        html: `
              <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
                <h2>Hello,</h2>
                <p>Thank you for using our LMS platform. Your One-Time Password (OTP) is:</p>
                <h1 style="text-align: center; color: #007BFF;">${otp}</h1>
                <p>Please use this OTP to complete your verification. It is valid for the next 10 minutes.</p>
                <p>If you did not request this OTP, please ignore this email or contact support.</p>
                <p>Best regards,<br/>LMS Team</p>
              </div>
            `,
      });

      const user = await db.user.findUnique({
        where: {
          id: this.userId,
        },
      });

      if (!user) {
        console.error("User not found with the provided email:", this.email);
        throw new Error("User not found");
      }

      await db.otp.upsert({
        where: {
          id: user.id,
        },
        update: {
          otp: otp ?? "",
        },
        create: {
          otp: otp ?? "",
          expireAt: expireAt,
          user: {
            connect: {
              id: this.userId,
            },
          },
        },
      });
      console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
      console.log(error);
    }
  };
}
