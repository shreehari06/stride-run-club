import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stride Run Club | Move as One",
  description:
    "Bengaluru's largest running community. Weekly runs and events, all levels welcome.",
  keywords: [
    "bangalore",
    "bengaluru",
    "running",
    "runclub",
    "community",
    "fitness",
    "health",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
