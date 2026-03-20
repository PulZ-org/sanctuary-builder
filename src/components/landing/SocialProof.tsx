import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "I finally understood why I was reaching for snacks at 2 AM. It was never about hunger.",
    name: "Maren L.",
    role: "Beta tester",
  },
  {
    quote: "The Pulse Check feature caught my stress eating pattern in just 3 days. Life-changing.",
    name: "Aisha K.",
    role: "Beta tester",
  },
  {
    quote: "For the first time, I feel like an app actually gets me instead of judging me.",
    name: "Priya S.",
    role: "Beta tester",
  },
];

const partners = [
  "Calm Collective",
  "MindBody",
  "Nourish Studio",
  "Wellbeing Lab",
  "Ease Health",
  "Inner Arc",
];

const SocialProof = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-reveal py-24 lg:py-36 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Trusted by those who get it
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Early voices from our beta community.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`section-reveal stagger-${i + 1} glass-card p-8`}>
              <p className="text-foreground/90 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="section-reveal text-center">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest font-medium">
            Wellness Partners — Coming Soon
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="text-lg font-serif text-foreground/30 font-medium select-none">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
