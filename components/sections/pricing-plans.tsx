import { plans } from "@/lib/data/pricing";
import { Button } from "@/components/ui/button";

interface PricingPlansProps {
  id?: string;
}

export function PricingPlans({ id }: PricingPlansProps) {
  return (
    <section id={id} className="rounded-3xl bg-white/80 p-10 shadow-xl shadow-lavender-100">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-display text-3xl text-lavender-900">Escolha a vibração ideal</h2>
        <p className="text-slate-600">
          Assinaturas com teste gratuito de 14 dias e integração com Stripe e Google Play para manter o fluxo sem atritos.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-lavender-100 bg-white/70 p-8 text-left shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-lavender-900">{plan.name}</h3>
                <span className="text-lg font-semibold text-gold-500">{plan.price}</span>
              </div>
              <p className="text-sm text-slate-600">{plan.description}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button variant={plan.highlight ? "primary" : "secondary"} className="mt-8 w-full">
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
