import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Chat from "./ui/chat";
import { ProductProvider } from "./ui/context/products";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
        <Navbar />
        {children}
        <Chat />
        </ProductProvider>
      </body>
    </html>
  );
}
