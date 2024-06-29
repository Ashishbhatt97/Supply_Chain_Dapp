import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/Context/trackingContext";
import { Footer, NavBar } from "@/Components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supply Chain Management",
  description: "Developed by Ashish Bhatt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrackingProvider>
          <NavBar />
          {children}
        </TrackingProvider>
        <Footer />
      </body>
    </html>
  );
}
