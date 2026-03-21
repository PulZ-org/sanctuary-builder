import { useState } from "react";
import { ArrowRight } from "lucide-react";
import whatsappImage from "@/assets/WhatsApp_Image_2026-03-21_at_18.03.07-removebg-preview (1).png";
import logoImage from "@/assets/WhatsApp_Image_2026-03-21_at_12.38.25-removebg-preview.png";
import watchImage from "@/assets/WhatsApp_Image_2026-03-21_at_19.35.41-removebg-preview.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(
    "You're on the list! We'll be in touch soon.",
  );
  const ref = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong. Try again.");
      }
      setSuccessMessage(
        data?.status === "already"
          ? "You're already on the list!"
          : "You're on the list! We'll be in touch soon.",
      );
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Floating ambient shapes */}
      <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-lavender-light/30 blur-3xl" style={{ animation: "float 8s ease-in-out infinite" }} />
      <div className="absolute bottom-32 right-[15%] w-48 h-48 rounded-full bg-sage-light/40 blur-3xl" style={{ animation: "float 10s ease-in-out infinite 2s" }} />

      <div ref={ref} className="container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/60 border-b border-border/50">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between overflow-visible">
            <a href="#home" className="flex items-center">
              <img
                src={logoImage}
                alt="Pulz logo"
                className="h-32 w-32 rounded-full object-cover -my-8"
              />
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#triggers" className="hover:text-foreground transition-colors">Triggers</a>
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#progress" className="hover:text-foreground transition-colors">Progress</a>
              <a href="#stories" className="hover:text-foreground transition-colors">Stories</a>
              <a href="#footer" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <a
              href="#waitlist"
              className="text-sm font-semibold text-white bg-accent/90 hover:bg-accent transition-colors px-4 py-2 rounded-full"
            >
              Join Waitlist
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[70vh]">
          {/* Left: copy + waitlist */}
          <div className="section-reveal max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender-light/40 border border-lavender/20 text-sm font-medium text-foreground/80 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              Coming 2026
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
              Feel first.
              <br />
              <span className="text-accent">Eat mindfully.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Pulz helps you understand the emotions behind impulsive eating — 
              so you can respond with care, not cravings.
            </p>

            <form id="waitlist" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              {!submitted ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-5 py-3.5 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all"
                  >
                    {isSubmitting ? "Submitting..." : "Secure Early Access"}
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </button>
                  {error ? (
                    <div className="text-sm text-red-600">
                      {error}
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="px-5 py-3.5 rounded-2xl bg-sage-light/50 border border-sage/30 text-foreground text-sm font-medium">
                  ✨ {successMessage}
                </div>
              )}
            </form>
          </div>

          {/* Right: phone mockup */}
          <div className="section-reveal stagger-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-[80px] scale-75" />
              <img
                src={whatsappImage}
                alt="Pulz app showing the mood slider interface"
                className="relative w-44 sm:w-[15rem] lg:w-[19rem] xl:w-[23rem] drop-shadow-2xl"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
              <img
                src={watchImage}
                alt="Pulz app on a watch"
                className="absolute -left-[220px] -bottom-2 w-24 sm:w-[9.5rem] lg:w-[13rem] xl:w-[16rem] rounded-3xl shadow-2xl outline outline-1 outline-black/40"
                style={{
                  animation: "float 6s ease-in-out infinite 1s",
                  WebkitMaskImage:
                    "radial-gradient(120% 120% at 50% 50%, #000 70%, transparent 100%)",
                  maskImage:
                    "radial-gradient(120% 120% at 50% 50%, #000 70%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
