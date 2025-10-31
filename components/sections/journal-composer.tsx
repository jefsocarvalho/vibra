"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JournalComposer() {
  const [entry, setEntry] = useState("");
  const [energy, setEnergy] = useState<"leve" | "neutra" | "densa" | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  function simulateAnalysis() {
    if (!entry.trim()) return;
    const tones = {
      leve: "Sua energia está radiante e receptiva. Aproveite para ancorar gratidão no corpo.",
      neutra: "Percebemos um equilíbrio suave. Pequenos rituais de respiração podem expandir sua vibração.",
      densa: "Tudo bem sentir intensidade. Vamos acolher com carinho e liberar com movimentos gentis."
    } as const;
    const detected = energy ?? "neutra";
    setResponse(tones[detected]);
  }

  return (
    <section className="grid gap-6 rounded-3xl border border-lavender-100 bg-white/70 p-8 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <h2 className="font-display text-2xl text-lavender-900">Escreva sobre sua energia</h2>
        <textarea
          value={entry}
          onChange={(event) => setEntry(event.target.value)}
          placeholder="Hoje meu coração está..."
          rows={8}
          className="w-full rounded-3xl border border-lavender-200 bg-white/80 p-4 text-sm text-slate-700 focus:border-lavender-400 focus:outline-none"
        />
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {(["leve", "neutra", "densa"] as const).map((option) => (
            <button
              key={option}
              onClick={() => setEnergy(option)}
              className={
                "rounded-full border px-4 py-2 capitalize transition " +
                (energy === option
                  ? "border-lavender-500 bg-lavender-500/10 text-lavender-700"
                  : "border-lavender-200 bg-white/70 text-slate-600 hover:border-lavender-400")
              }
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <Button onClick={simulateAnalysis} className="mt-2">
          Gerar análise com IA
        </Button>
      </div>
      <div className="space-y-4">
        <h3 className="font-display text-xl text-lavender-900">Retorno da mentora energética</h3>
        <div className="rounded-3xl border border-lavender-100 bg-white/80 p-6 text-sm text-slate-600">
          {response ? (
            <>
              <p>{response}</p>
              <p className="mt-4 text-lavender-700">
                Afirmação sugerida: <span className="font-semibold">“Meu corpo é templo de luz, seguro e abundante.”</span>
              </p>
              <p className="mt-2 text-lavender-600">
                Prática: 5 minutos de respiração em 4-7-8 + registrar gratidão.
              </p>
            </>
          ) : (
            <p>O retorno compassivo aparecerá aqui após enviar seu relato.</p>
          )}
        </div>
      </div>
    </section>
  );
}
