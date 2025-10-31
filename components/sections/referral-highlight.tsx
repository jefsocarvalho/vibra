import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ReferralHighlight() {
  return (
    <section className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-lavender-200/80 via-lavender-100 to-gold-100 p-10 md:grid-cols-[1.2fr_1fr]">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-lavender-500">
          Indicações premiadas
        </span>
        <h2 className="font-display text-3xl text-lavender-900">Compartilhe sua luz e ganhe meses gratuitos</h2>
        <p className="text-slate-600">
          Cada convite confirmado adiciona 100 pontos de vibração ao seu ranking. A cada 5 assinaturas Premium, o sistema amplia automaticamente sua assinatura em 30 dias e envia uma notificação carinhosa.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link href="/(dashboard)/referrals">Ver painel de indicações</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/(dashboard)/referrals#leaderboard">Leaderboard semanal</Link>
          </Button>
        </div>
      </div>
      <div className="rounded-3xl border border-white/80 bg-white/70 p-6 shadow-lg">
        <h3 className="font-display text-2xl text-lavender-900">Exemplo de progresso</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-slate-600">Indicações confirmadas</dt>
            <dd className="font-semibold text-lavender-700">3 / 5</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-slate-600">Pontos de vibração</dt>
            <dd className="font-semibold text-gold-500">300 pts</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-slate-600">Próxima recompensa</dt>
            <dd className="font-semibold text-lavender-700">+30 dias Premium</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
