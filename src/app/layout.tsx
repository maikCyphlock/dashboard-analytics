import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "simple analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={inter.className + " " + "dark:bg-zinc-900 dark:text-zinc-50"}
      >
        {children}
      </body>
    </html>
  );
}
