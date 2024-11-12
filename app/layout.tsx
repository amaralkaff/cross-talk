import "./globals.css";
import type { Metadata } from "next";
import Providers from "../components/providers";
import { ReactNode } from "react";
import TopNavbar from "@/components/navbar/TopNavbar";


export const metadata: Metadata = {
  title: "Cross Talk",
  description: "Cross Talk is a platform for creating and sharing conversations.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
