import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Como está sua energia hoje?",
    description: "Escolha entre leve, neutra ou densa para definirmos sua base.",
    options: ["Leve", "Neutra", "Densa"]
  },
  {
    title: "O que deseja cultivar?",
    description: "Selecione intenções como autocuidado, foco, abundância, confiança.",
    options: ["Autocuidado", "Foco", "Abundância", "Confiança"]
  },
  {
    title: "Idioma e lembretes",
    description: "Defina idioma, fuso horário e lembretes para receber notificações sutis.",
    options: ["Português", "Inglês", "Sem lembretes", "Notificações suaves"]
  }
] as const;

export default function OnboardingPage() {
  return (
    <main className="space-y-10">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl text-lavender-900">Vamos alinhar sua experiência</h1>
        <p className="mt-2 text-slate-600">
          O fluxo de onboarding coleta apenas o essencial para personalizar seu diário energético, rotinas e notificações.
        </p>
      </header>
      <div className="section-grid">
        {steps.map((step) => (
          <article key={step.title} className="rounded-3xl border border-lavender-100 bg-white/70 p-6">
            <h2 className="font-display text-2xl text-lavender-900">{step.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {step.options.map((option) => (
                <button
                  key={option}
                  className="rounded-full border border-lavender-200 bg-white/70 px-4 py-2 text-sm text-lavender-600 transition hover:border-lavender-400"
                >
                  {option}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center">
        <Button size="lg">Começar jornada vibrante</Button>
      </div>
    </main>
  );
}
