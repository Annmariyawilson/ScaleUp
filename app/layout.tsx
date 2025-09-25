import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleUp Conclave",
  description: "Modern landing page built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
