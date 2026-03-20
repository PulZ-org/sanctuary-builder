import { useScrollReveal } from "@/hooks/useScrollReveal";

const triggers = [
  { label: "Stress", color: "bg-terracotta/60", delay: "0s" },
  { label: "Boredom", color: "bg-lavender/50", delay: "1.5s" },
  { label: "Loneliness", color: "bg-sage/50", delay: "3s" },
];

const EmotionalTriggers = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-reveal py-24 lg:py-36 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          What's really driving the craving?
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-20">
          Impulsive eating rarely starts with hunger. It starts with a feeling you haven't named yet.
        </p>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {triggers.map((t) => (
            <div key={t.label} className="section-reveal group flex flex-col items-center gap-5">
              <div
                className={`blob ${t.color} w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center cursor-default group-hover:animate-pulse-soft transition-transform`}
                style={{ animationDelay: t.delay }}
              >
                <span className="font-serif text-lg font-semibold text-foreground/80 select-none">
                  {t.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalTriggers;
