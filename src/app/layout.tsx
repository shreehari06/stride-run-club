import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stride Run Club | Bengaluru",
  description:
    "Bengaluru's most fun running club, join us for weekly runs and events!",
  keywords: ["running", "club", "bengaluru", "stride", "fitness", "health"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
