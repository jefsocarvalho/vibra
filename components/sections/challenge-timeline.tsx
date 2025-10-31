const schedule = Array.from({ length: 21 }, (_, index) => ({
  day: index + 1,
  status: index + 1 < 7 ? "complete" : index + 1 === 7 ? "active" : "locked"
}));

export function ChallengeTimeline() {
  return (
    <section className="rounded-3xl border border-lavender-100 bg-white/70 p-8">
      <h2 className="font-display text-2xl text-lavender-900">Sua trilha</h2>
      <div className="mt-6 grid grid-cols-3 gap-4 md:grid-cols-7">
        {schedule.map((day) => (
          <div
            key={day.day}
            className={`flex aspect-square flex-col items-center justify-center rounded-2xl border text-sm transition ${
              day.status === "complete"
                ? "border-lavender-400 bg-lavender-500/10 text-lavender-700"
                : day.status === "active"
                ? "border-gold-300 bg-gold-200/30 text-gold-500"
                : "border-dashed border-lavender-200 text-slate-400"
            }`}
          >
            <span className="text-xs uppercase tracking-wide">Dia</span>
            <span className="text-lg font-semibold">{day.day}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
