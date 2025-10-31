const routines = [
  {
    period: "Manhã",
    focus: "Expansão",
    steps: [
      "Água morna com limão e intenção de abundância",
      "Jornada de respiração de 5 minutos guiada pela IA",
      "Registrar no diário um pensamento de gratidão"
    ]
  },
  {
    period: "Tarde",
    focus: "Fluxo",
    steps: [
      "Pausa consciente com alongamento de 3 minutos",
      "Escutar afirmação Prosperidade em áudio",
      "Enviar mensagem vibrante para uma amiga"
    ]
  },
  {
    period: "Noite",
    focus: "Acolhimento",
    steps: [
      "Banho relaxante com visualização dourada",
      "Fechar o dia com journaling guiado",
      "Meditação guiada premium de 10 minutos"
    ]
  }
] as const;

export function RoutineBoard() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {routines.map((routine) => (
        <article key={routine.period} className="rounded-3xl border border-lavender-100 bg-white/70 p-6">
          <div className="flex items-center justify-between text-sm text-lavender-500">
            <span>{routine.period}</span>
            <span className="rounded-full bg-lavender-500/10 px-3 py-1 text-xs uppercase tracking-wide">{routine.focus}</span>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            {routine.steps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold-400" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
