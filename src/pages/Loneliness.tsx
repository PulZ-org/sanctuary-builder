import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import lonelinessVideo from "@/assets/6116183-hd_1920_1080_30fps.mp4";

const Loneliness = () => {
  const ref = useScrollReveal();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <section
        ref={ref}
        className="section-reveal pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={lonelinessVideo}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/30 border border-sage/40 text-sm font-medium text-white/90 mb-6">
              Loneliness
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              When connection feels out of reach
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
              Loneliness can feel like an ache for connection. Food can become a
              stand‑in for comfort, even though it doesn’t replace being seen.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Definition</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Loneliness is the feeling of being disconnected or unseen, even
                when other people are physically around.
              </p>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Causes</h3>
              <ul className="text-sm text-white/80 leading-relaxed list-disc pl-5 space-y-2">
                <li>Major life changes or transitions</li>
                <li>Social isolation or lack of support</li>
                <li>Feeling misunderstood</li>
              </ul>
            </div>
            <div className="glass-card p-7">
              <h3 className="font-serif text-xl font-semibold mb-3">Consequences</h3>
              <ul className="text-sm text-white/80 leading-relaxed list-disc pl-5 space-y-2">
                <li>Comfort eating for emotional relief</li>
                <li>Lower motivation and energy</li>
                <li>Pulling away from social opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loneliness;
