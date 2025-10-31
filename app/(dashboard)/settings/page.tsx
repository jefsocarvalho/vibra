import { ThemeSwitcher } from "@/components/sections/theme-switcher";

export default function SettingsPage() {
  return (
    <main className="space-y-12">
      <header className="space-y-3">
        <h1 className="font-display text-4xl text-lavender-900">Configurações</h1>
        <p className="text-slate-600">
          Ajuste idioma, tema, notificações e preferências de assinatura.
        </p>
      </header>
      <ThemeSwitcher />
    </main>
  );
}
