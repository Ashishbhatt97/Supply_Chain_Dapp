import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/Context/trackingContext";
import { Footer, NavBar } from "@/Components";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={poppins.className}>
        <TrackingProvider>
          <NavBar />
          {children}
        </TrackingProvider>
        <Footer />
      </body>
    </html>
  );
}
