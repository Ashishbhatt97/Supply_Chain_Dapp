import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/Context/trackingContext";
import { Footer, NavBar } from "@/Components";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <TrackingProvider>
          <NavBar />
          {children}
        </TrackingProvider>
        <Footer />
      </body>
    </html>
  );
}
