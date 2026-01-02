import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Toaster from "@/components/Toaster";

/* GOOGLE FONTS */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

/* LOCAL FONTS */
const hankenGrotesk = localFont({
  src: [
    {
      path: "./fonts/HankenGrotesk-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-hanken",
});

const rajdhani = localFont({
  src: [
    {
      path: "./fonts/Rajdhani-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Rajdhani-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Rajdhani-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "banglar chakra",
  description: "Buy & Sell Cars",
  icons: {
    icon: "/Images/Fav.PNG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          bg-gray-100
          ${inter.variable}
          ${poppins.variable}
          ${hankenGrotesk.variable}
          ${rajdhani.variable}
        `}
      >
        <Toaster />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
