"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Seg", energy: 68 },
  { day: "Ter", energy: 72 },
  { day: "Qua", energy: 65 },
  { day: "Qui", energy: 78 },
  { day: "Sex", energy: 82 },
  { day: "Sáb", energy: 75 },
  { day: "Dom", energy: 88 }
];

export function EnergyTimeline() {
  return (
    <section className="rounded-3xl border border-lavender-100 bg-white/70 p-8">
      <header className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-2xl text-lavender-900">Seu ritmo vibracional</h2>
          <p className="text-sm text-slate-600">Gráfico alimentado pelos registros do diário e desafios concluídos.</p>
        </div>
        <span className="rounded-full bg-lavender-500/10 px-4 py-1 text-xs font-semibold text-lavender-600">
          Últimos 7 dias
        </span>
      </header>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
            <defs>
              <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9560b5" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#d8c0e6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#74498e" />
            <YAxis hide domain={[50, 100]} />
            <Tooltip
              contentStyle={{
                borderRadius: 16,
                border: "1px solid rgba(149,96,181,0.2)",
                background: "rgba(255,255,255,0.9)",
                color: "#543368"
              }}
            />
            <Area type="monotone" dataKey="energy" stroke="#9560b5" strokeWidth={3} fill="url(#energyGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
