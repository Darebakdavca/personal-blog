import type { Metadata } from "next";
import { Inter, Ms_Madi } from "next/font/google"
import "./globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Main from "./ui/Main"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My React project app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="bg-blue-400">
      <body className={`${inter.className} min-h-screen grid grid-cols-1 grid-rows-12`}>
        <Header/>
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
