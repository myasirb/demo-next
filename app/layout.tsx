import AppNavbar from "./AppNavbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Who you",
  description: "Manage Employee Records",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppNavbar />
        <div className="m-10">{children}</div>
      </body>
    </html>
  );
}
