import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layouts app",
  description: "Generated by create next app",
};

const navLinks = [
  { name: "Holy Grail", path: "holygrail" },
  { name: "Holy Grail2", path: "holygrail2" },
  { name: "Independent Scroll", path: "independentscroll" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  relative`}>
        <Navbar links={navLinks} />
        {children}
      </body>
    </html>
  );
}
