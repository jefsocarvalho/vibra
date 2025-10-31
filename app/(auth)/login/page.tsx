import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white/80">
      <div className="w-full max-w-md rounded-3xl border border-lavender-100 bg-white/90 p-8 shadow-xl">
        <h1 className="font-display text-3xl text-lavender-900">Entrar no VIBRA</h1>
        <p className="mt-2 text-sm text-slate-600">Continue com sua energia elevada.</p>
        <form className="mt-6 space-y-4">
          <label className="flex flex-col gap-1 text-sm text-slate-600">
            Email
            <input
              type="email"
              placeholder="voce@email.com"
              className="rounded-full border border-lavender-200 bg-white/80 px-4 py-2 focus:border-lavender-400 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-slate-600">
            Senha
            <input
              type="password"
              placeholder="********"
              className="rounded-full border border-lavender-200 bg-white/80 px-4 py-2 focus:border-lavender-400 focus:outline-none"
            />
          </label>
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
        <div className="mt-6 flex flex-col gap-3">
          <Button variant="secondary" className="w-full">
            Continuar com Google
          </Button>
          <p className="text-center text-sm text-slate-600">
            Ainda não tem conta? <Link href="/(auth)/onboarding" className="text-lavender-600 underline">Começar agora</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
