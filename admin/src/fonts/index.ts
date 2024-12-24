// src/fonts.ts
import {
  Inter,
  Poppins,
  Lexend,
  Space_Grotesk,
  Manrope,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "800"],
});


export const appfonts = `${inter.variable} ${poppins.variable} ${lexend.variable} ${manrope.variable} ${spaceGrotesk.variable} antialiased`;
