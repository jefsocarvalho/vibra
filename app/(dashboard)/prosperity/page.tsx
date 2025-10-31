import { RoutineBoard } from "@/components/sections/routine-board";

export default function ProsperityPage() {
  return (
    <main className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-4xl text-lavender-900">Modo Prosperidade</h1>
        <p className="text-slate-600">
          Micro-rotinas matinais, vespertinas e noturnas alinhadas às suas intenções e histórico energético.
        </p>
      </header>
      <RoutineBoard />
    </main>
  );
}
