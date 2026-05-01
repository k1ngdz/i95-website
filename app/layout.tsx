import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I95 Clan | PUBG Community",
  description: "I95 — A PUBG clan that survives together, dies together, and blames each other after.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body className="bg-[#0a0a0a] text-[#e8e8e8] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-6 text-center text-sm text-white/30">
          © {new Date().getFullYear()} I95 Clan · Built by the squad · Blame KurV if it&apos;s broken
        </footer>
      </body>
    </html>
  );
}
