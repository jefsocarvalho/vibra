import { JournalComposer } from "@/components/sections/journal-composer";
import { EnergyTimeline } from "@/components/sections/energy-timeline";

export default function JournalPage() {
  return (
    <main className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-4xl text-lavender-900">Diário Energético</h1>
        <p className="text-slate-600">
          Escreva sobre seus sentimentos, receba respostas compassivas e acompanhe sua vibração ao longo do tempo.
        </p>
      </header>
      <JournalComposer />
      <EnergyTimeline />
    </main>
  );
}
