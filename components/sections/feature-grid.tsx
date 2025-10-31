import Link from "next/link";
import { featureSections } from "@/lib/data/feature-sections";
import { Button } from "@/components/ui/button";

interface FeatureGridProps {
  id?: string;
}

export function FeatureGrid({ id }: FeatureGridProps) {
  return (
    <section id={id} className="grid gap-6 md:grid-cols-3">
      {featureSections.map((feature) => (
        <article
          key={feature.title}
          className="group relative flex h-full flex-col justify-between rounded-3xl border border-lavender-100 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wide text-lavender-400">{feature.highlight}</span>
            <div className="h-2 w-14 rounded-full bg-gradient-to-r from-lavender-300 via-gold-300 to-lavender-500" />
          </div>
          <div className="mt-6 space-y-3">
            <h3 className="font-display text-2xl text-lavender-900">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
          </div>
          <Button asChild variant="ghost" className="mt-8 self-start">
            <Link href={feature.href}>Ver detalhes</Link>
          </Button>
        </article>
      ))}
    </section>
  );
}
