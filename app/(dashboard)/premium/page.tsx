import { PremiumLibrary } from "@/components/sections/premium-library";

export default function PremiumPage() {
  return (
    <main className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-4xl text-lavender-900">Premium Zone</h1>
        <p className="text-slate-600">
          Conteúdos exclusivos para assinantes: trilhas extensas, desafios avançados e relatórios com insights energéticos.
        </p>
      </header>
      <PremiumLibrary />
    </main>
  );
}
