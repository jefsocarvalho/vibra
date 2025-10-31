import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="rounded-3xl bg-lavender-100/60 p-10">
      <h2 className="font-display text-3xl text-lavender-900">Amor das nossas musas</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="flex h-full flex-col justify-between rounded-3xl bg-white/70 p-6">
            <blockquote className="text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-lavender-700">
              <div>{testimonial.name}</div>
              <div className="text-xs font-normal text-slate-500">{testimonial.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
