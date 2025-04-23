import { Montserrat_Alternates, Albert_Sans } from "next/font/google";

export const montserrat = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
  display: "swap",
});

export const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-albert-sans",
  display: "swap",
});
