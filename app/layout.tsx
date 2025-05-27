import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Libby Rollings - LinkTree",
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
  viewport: "width=device-width, initial-scale=1",
  description: "LinkTree for Libby Rollings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
