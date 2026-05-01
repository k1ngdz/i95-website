"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/stats", label: "Stats" },
  { href: "/tournaments", label: "Tournaments" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/i95pubg.jpg"
            alt="I95 Clan Logo"
            width={44}
            height={44}
            className="rounded-lg object-cover"
            unoptimized
          />
          <span className="text-xl font-black tracking-widest text-[#c9a84c] group-hover:text-white transition-colors">
            [I95]
          </span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                pathname === l.href
                  ? "text-[#c9a84c] bg-white/5"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/nZupsHQfRv"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded bg-[#5865F2] text-white text-sm font-semibold hover:bg-[#4752c4] transition-colors"
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
