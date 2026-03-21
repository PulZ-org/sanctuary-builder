import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import boredomVideo from "@/assets/8102762-uhd_4096_2160_25fps.mp4";

const Boredom = () => {
  const ref = useScrollReveal();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section
        ref={ref}
        className="section-reveal pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={boredomVideo}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/30 border border-lavender/40 text-sm font-medium text-white/90 mb-6">
              Boredom
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              When food becomes a placeholder
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
              Boredom creates a need for stimulation. Reaching for snacks can feel
              like a quick fix, even if it doesn’t satisfy what you’re truly craving.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Definition</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Boredom is a state of low engagement or under‑stimulation that
                often seeks novelty or distraction.
              </p>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Causes</h3>
              <ul className="text-sm text-white/80 leading-relaxed list-disc pl-5 space-y-2">
                <li>Repetitive routines</li>
                <li>Empty time with no meaningful outlet</li>
                <li>Under‑challenging work or environment</li>
              </ul>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Consequences</h3>
              <ul className="text-sm text-white/80 leading-relaxed list-disc pl-5 space-y-2">
                <li>Mindless snacking and grazing</li>
                <li>Temporary relief followed by restlessness</li>
                <li>Difficulty staying present</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Boredom;
