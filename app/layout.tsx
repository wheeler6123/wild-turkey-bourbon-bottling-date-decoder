import type { Metadata } from "next";
import { playfair } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wild Turkey Date Decoder",
  description: "Enter the laser code from your bottle of Wild Turkey bourbon to find out when it was bottled.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
