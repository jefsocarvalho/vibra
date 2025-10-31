import { Button } from "@/components/ui/button";

const premiumItems = [
  {
    title: "Trilha Aura Dourada 45min",
    description: "Áudio imersivo com voz feminina e soundscape relaxante para elevar sua vibração de abundância.",
    type: "Áudio"
  },
  {
    title: "Desafio Prosperidade 2.0",
    description: "Sequência de 14 dias com práticas para alinhar mente, corpo e finanças com delicadeza.",
    type: "Desafio"
  },
  {
    title: "Relatório Energético Personalizado",
    description: "Análise trimestral com insights, padrões de humor e recomendações de rotinas.",
    type: "Relatório"
  }
] as const;

export function PremiumLibrary() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {premiumItems.map((item) => (
        <article key={item.title} className="rounded-3xl border border-lavender-100 bg-white/70 p-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-lavender-500">{item.type}</span>
          <h2 className="mt-3 font-display text-2xl text-lavender-900">{item.title}</h2>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          <Button className="mt-6" variant="secondary">
            Acessar conteúdo
          </Button>
        </article>
      ))}
    </section>
  );
}
