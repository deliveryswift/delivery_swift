import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Delivery Swift",
  description: "Delivery and Logistic company in the US",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <ToastContainer />
        <main className="bg-yellow-50/30">{children}</main>
      </body>
    </html>
  );
}
