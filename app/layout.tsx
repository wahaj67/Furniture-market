
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ReactNode } from "react";
import Prvider from "@/redux/provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Avion",
  description: "Avion is a web application for managing your furniture and home decor.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children:ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <Prvider>
      <Navbar/>
        {children}
        <Footer/>
        </Prvider>
      </body>
    </html>
  );
}
