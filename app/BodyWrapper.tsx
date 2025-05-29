"use client";
import { usePathname } from "next/navigation";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLinks = pathname.startsWith("/links");
  return (
    <body className={isLinks ? "gradient-bg" : ""}>
      {children}
    </body>
  );
}