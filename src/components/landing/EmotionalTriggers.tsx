import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const triggers = [
  { label: "Stress", color: "bg-terracotta/60", delay: "0s", to: "/stress" },
  { label: "Boredom", color: "bg-lavender/50", delay: "1.5s", to: "/boredom" },
  { label: "Loneliness", color: "bg-sage/50", delay: "3s", to: "/loneliness" },
];

const EmotionalTriggers = () => {
  const ref = useScrollReveal();

  return (
    <section id="triggers" ref={ref} className="section-reveal py-24 lg:py-36 relative overflow-hidden">
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
              <Link
                to={t.to}
                className={`blob ${t.color} w-36 h-36 lg:w-44 lg:h-44 flex items-center justify-center transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50`}
                style={{ animationDelay: t.delay }}
                aria-label={`${t.label} details`}
              >
                <span className="gel-text font-serif text-xl sm:text-2xl font-semibold text-foreground/80 select-none">
                  {t.label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalTriggers;
