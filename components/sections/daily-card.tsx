import { Button } from "@/components/ui/button";

export function DailyCard() {
  return (
    <section className="rounded-3xl border border-lavender-100 bg-white/70 p-8 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-lavender-500">Dia 07 de 21</span>
          <h2 className="mt-2 font-display text-2xl text-lavender-900">Respiração dourada + afirmação guiada</h2>
          <p className="mt-2 text-sm text-slate-600">
            Sente-se confortavelmente, inspire contando até 4, segure por 4 e expire por 6. Em seguida, escute a afirmação gerada para hoje.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button variant="secondary">Iniciar exercício</Button>
          <Button variant="ghost">Ouvir afirmação</Button>
        </div>
      </div>
    </section>
  );
}
