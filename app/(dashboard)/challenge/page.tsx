import { ChallengeTimeline } from "@/components/sections/challenge-timeline";
import { DailyCard } from "@/components/sections/daily-card";

export default function ChallengePage() {
  return (
    <main className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-4xl text-lavender-900">Desafio 21 Dias</h1>
        <p className="text-slate-600">
          Avance diariamente, receba lembretes e conquiste badges por consistência.
        </p>
      </header>
      <DailyCard />
      <ChallengeTimeline />
    </main>
  );
}
