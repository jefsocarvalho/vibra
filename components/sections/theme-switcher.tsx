"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="grid gap-6 rounded-3xl border border-lavender-100 bg-white/70 p-8 md:grid-cols-2">
      <div className="space-y-3">
        <h2 className="font-display text-2xl text-lavender-900">Luz & Sombra</h2>
        <p className="text-sm text-slate-600">
          Alterne entre os modos claro e escuro mantendo a paleta lavanda, branca e dourada equilibrada.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button variant={theme === "light" ? "primary" : "ghost"} onClick={() => setTheme("light")}>Tema claro</Button>
        <Button variant={theme === "dark" ? "primary" : "ghost"} onClick={() => setTheme("dark")}>Tema escuro</Button>
        <Button variant={theme === "system" ? "secondary" : "ghost"} onClick={() => setTheme("system")}>Sistema</Button>
      </div>
    </section>
  );
}
