import Link from "next/link";
import { type ReactNode } from "react";
import { buttonLink } from "@/components/ui/button-link";

const links = [
  { href: "/(dashboard)/journal", label: "Diário" },
  { href: "/(dashboard)/challenge", label: "Desafio" },
  { href: "/(dashboard)/prosperity", label: "Prosperidade" },
  { href: "/(dashboard)/premium", label: "Premium" },
  { href: "/(dashboard)/referrals", label: "Indicações" },
  { href: "/(dashboard)/settings", label: "Configurações" }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-lavender-50">
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-display text-2xl text-lavender-700">
            VIBRA
          </Link>
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={buttonLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10">{children}</main>
    </div>
  );
}
