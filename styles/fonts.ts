import { Inter, Playfair_Display } from "next/font/google";

export const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

export const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});
