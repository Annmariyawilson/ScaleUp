import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import Script from "next/script";
=======
>>>>>>> 08950c4bb45ababec07a92bd45b010adda4c4541

export const metadata: Metadata = {
  title: "ScaleUp Conclave",
  description: "ScaleUp Conclave - 2026",
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
<<<<<<< HEAD
      <body>
        {/* Razorpay Checkout Script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
=======
      <body>{children}</body>
>>>>>>> 08950c4bb45ababec07a92bd45b010adda4c4541
    </html>
  );
}
