"use client"
import "./globals.css";
import NavBar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/footer";
import {ThemeProvider} from 'next-themes'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["500","700"]
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-full flex flex-col bg-light text-dark dark:bg-dark dark:text-light w-full min-h-screen`}>
        <ThemeProvider enableSystem attribute="class">
        <NavBar />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
