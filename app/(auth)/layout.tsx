import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-lavender-100 via-white to-gold-100">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="font-display text-2xl text-lavender-700">
          VIBRA
        </Link>
        <Link href="/(auth)/onboarding" className="text-sm text-lavender-600 underline">
          Criar conta
        </Link>
      </header>
      {children}
    </div>
  );
}
