import CustomRainbowKitProvider from "./CustomRainbowKitProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoKDO",
  description: "Make prize pool, offer gift and win! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomRainbowKitProvider>
          {children}
        </CustomRainbowKitProvider>
      </body>
    </html>
  );
}
