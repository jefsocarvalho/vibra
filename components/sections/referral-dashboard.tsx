import { Button } from "@/components/ui/button";

const leaderboard = [
  { name: "Ana", points: 1200 },
  { name: "Marina", points: 900 },
  { name: "Lívia", points: 700 }
];

export function ReferralDashboard() {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 rounded-3xl border border-lavender-100 bg-white/70 p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-2xl text-lavender-900">Seu link mágico</h2>
          <p className="mt-2 text-sm text-slate-600">
            Compartilhe em grupos, stories ou email. Cada assinatura confirmada soma 100 pontos e aproxima você de 30 dias extras.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <code className="rounded-full bg-white px-4 py-2 text-sm text-lavender-600 shadow-sm">https://vibra.app/invite/lua</code>
            <Button variant="secondary">Copiar link</Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl border border-lavender-100 bg-white/80 p-6 text-sm text-slate-600">
            <div className="flex items-center justify-between">
              <span>Indicações confirmadas</span>
              <span className="font-semibold text-lavender-700">3 / 5</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span>Próxima recompensa</span>
              <span className="font-semibold text-gold-500">+30 dias Premium</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span>Histórico</span>
              <span className="font-semibold text-lavender-700">2 recompensas recebidas</span>
            </div>
          </div>
          <Button variant="ghost">Configurar notificações</Button>
        </div>
      </div>
      <div id="leaderboard" className="rounded-3xl border border-lavender-100 bg-white/70 p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-lavender-900">Leaderboard vibrante</h2>
          <span className="text-xs uppercase tracking-wide text-lavender-500">Reset semanal</span>
        </div>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          {leaderboard.map((entry, index) => (
            <li key={entry.name} className="flex items-center justify-between rounded-2xl bg-white/60 px-4 py-3">
              <span>
                <span className="font-semibold text-lavender-700">#{index + 1}</span> {entry.name}
              </span>
              <span className="font-semibold text-gold-500">{entry.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
