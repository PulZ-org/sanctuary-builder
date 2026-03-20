import { Activity, Users, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: Activity,
    title: "Pulse Check",
    desc: "AI-driven real-time emotional monitoring that learns your unique patterns and gently intervenes before impulse takes over.",
    accent: "text-terracotta",
  },
  {
    icon: Users,
    title: "Anonymous Community",
    desc: "A judgment-free space where you can share, vent, or simply listen — completely anonymous, always supportive.",
    accent: "text-accent",
  },
  {
    icon: Shield,
    title: "Your Safe Space",
    desc: "End-to-end encrypted journals and mood logs. Your emotional data belongs to you and no one else.",
    accent: "text-sage",
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-reveal py-24 lg:py-36 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Your safe space to heal
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Tools designed with empathy, not guilt. Support that meets you where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`section-reveal stagger-${i + 1} glass-card p-8 lg:p-10 group`}
            >
              <f.icon size={28} strokeWidth={1.5} className={`${f.accent} mb-6`} />
              <h3 className="font-serif text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
