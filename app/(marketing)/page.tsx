import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { ReferralHighlight } from "@/components/sections/referral-highlight";

export default function LandingPage() {
  return (
    <main className="space-y-20">
      <header className="flex flex-col items-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-lavender-200 bg-white/80 px-4 py-1 text-sm text-lavender-600 shadow-glow">
          Elevate your energy
        </span>
        <h1 className="max-w-3xl font-display text-4xl tracking-tight text-lavender-900 sm:text-5xl">
          VIBRA helps you balance your emotional energy and sustain luminous habits.
        </h1>
        <p className="max-w-2xl text-lg text-slate-700">
          Journal with an empathetic AI guide, immerse in soothing affirmations, and stay accountable with joyful challenges and prosperity routines.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="primary">
            <Link href="/(auth)/login">Comece agora</Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="#features">Explorar recursos</Link>
          </Button>
        </div>
      </header>
      <FeatureGrid id="features" />
      <section className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-lavender-100">
        <h2 className="font-display text-3xl text-lavender-900">Uma rotina completa para elevar sua vibração</h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Cada interação no VIBRA foi desenhada para ser intuitiva, amorosa e transformadora. Os componentes são otimizados para Framer, sem efeitos supérfluos.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          <li className="rounded-2xl border border-lavender-100 bg-white/70 p-6">
            <h3 className="font-semibold text-lavender-900">Diário Energético com IA</h3>
            <p className="mt-2 text-sm text-slate-600">
              Escreva livremente e receba um retorno compassivo com a leitura energética do momento, afirmações e práticas personalizadas.
            </p>
          </li>
          <li className="rounded-2xl border border-lavender-100 bg-white/70 p-6">
            <h3 className="font-semibold text-lavender-900">Afirmações em Áudio</h3>
            <p className="mt-2 text-sm text-slate-600">
              Converta afirmações em áudios envolventes com voz feminina suave e trilha relaxante integrada ao player web.
            </p>
          </li>
          <li className="rounded-2xl border border-lavender-100 bg-white/70 p-6">
            <h3 className="font-semibold text-lavender-900">Desafio 21 Dias</h3>
            <p className="mt-2 text-sm text-slate-600">
              Avance diariamente com exercícios desbloqueados, conquiste badges e mantenha o momentum com notificações amorosas.
            </p>
          </li>
          <li className="rounded-2xl border border-lavender-100 bg-white/70 p-6">
            <h3 className="font-semibold text-lavender-900">Modo Prosperidade</h3>
            <p className="mt-2 text-sm text-slate-600">
              Sequências matinais, da tarde e noturnas ajustadas ao seu objetivo, alimentadas pelo histórico do seu diário.
            </p>
          </li>
        </ul>
      </section>
      <ReferralHighlight />
      <Testimonials />
      <PricingPlans id="pricing" />
    </main>
  );
}
