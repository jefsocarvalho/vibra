import { ReferralDashboard } from "@/components/sections/referral-dashboard";

export default function ReferralsPage() {
  return (
    <main className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-4xl text-lavender-900">Programa de Indicações</h1>
        <p className="text-slate-600">
          Compartilhe sua luz com amigas. Acompanhe progresso, recompensas e o ranking semanal.
        </p>
      </header>
      <ReferralDashboard />
    </main>
  );
}
