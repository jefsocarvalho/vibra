import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Recursos" },
  { href: "#pricing", label: "Planos" },
  { href: "/(dashboard)/referrals", label: "Indicações" }
];

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-display text-2xl text-lavender-700">
            VIBRA
          </Link>
          <nav className="flex items-center gap-4">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-lavender-600 hover:text-lavender-800">
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm">
              <Link href="/(auth)/login">Entrar</Link>
            </Button>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
