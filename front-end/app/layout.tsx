import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Web3Provider } from "./components/providers/Web3Provider";

export const metadata: Metadata = {
  title: "CropTrust",
  description: "Web3 Marketplace for agriculture 🌱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>
          <NavBar />
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
