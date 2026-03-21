import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import stressVideo from "@/assets/7693409-hd_1920_1080_25fps.mp4";

const Stress = () => {
  const ref = useScrollReveal();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section
        ref={ref}
        className="section-reveal pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={stressVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 container mx-auto px-6 text-white">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/30 border border-terracotta/40 text-sm font-medium text-white/90 mb-6">
              Stress
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              When pressure fuels cravings
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
              Stress is your body’s alarm system. When it stays on too long, it can
              push you toward quick comfort — often food — even when you’re not hungry.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Definition</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Stress is the mind‑body response to perceived demands, threats, or
                uncertainty. It can be acute (short‑term) or chronic (ongoing).
              </p>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Causes</h3>
              <ul className="text-sm text-white/80 leading-relaxed list-disc pl-5 space-y-2">
                <li>Work or school pressure</li>
                <li>Financial or family concerns</li>
                <li>Too many commitments, too little rest</li>
              </ul>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Consequences</h3>
              <ul className="text-sm text-white/80 leading-relaxed list-disc pl-5 space-y-2">
                <li>Impulsive snacking or overeating</li>
                <li>Sleep disruption and low energy</li>
                <li>Feeling stuck in a loop of relief and regret</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Stress;
