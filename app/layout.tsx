import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <SpeedInsights />
      </body>
    </html>
  );
}
