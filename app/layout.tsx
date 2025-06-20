import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libby Rollings",
  authors: [
    {
      name: "Elliot Cann",
      url: "https://elliotcann.com",
    },
  ],
  keywords: [
    "Libby Rollings",
    "LinkTree",
    "Links",
    "Social Media",
    "Portfolio",
    "Personal Website",
  ],
  description: "Libby Rollings' personal website, showcasing her social media links and portfolio.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
