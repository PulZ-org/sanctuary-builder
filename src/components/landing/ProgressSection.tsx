import { useScrollReveal } from "@/hooks/useScrollReveal";

const dataPoints = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 65 },
  { day: "Sat", value: 85 },
  { day: "Sun", value: 90 },
];

const ProgressSection = () => {
  const ref = useScrollReveal();

  const max = Math.max(...dataPoints.map((d) => d.value));
  const chartHeight = 180;

  // Build SVG path
  const points = dataPoints.map((d, i) => ({
    x: (i / (dataPoints.length - 1)) * 100,
    y: chartHeight - (d.value / max) * chartHeight,
  }));

  const pathD = points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = points[i - 1];
    const cpx1 = prev.x + (p.x - prev.x) * 0.4;
    const cpx2 = p.x - (p.x - prev.x) * 0.4;
    return `${acc} C ${cpx1} ${prev.y}, ${cpx2} ${p.y}, ${p.x} ${p.y}`;
  }, "");

  const areaD = `${pathD} L 100 ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <section ref={ref} className="section-reveal py-24 lg:py-36">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="section-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Progress, not perfection
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
              Track your Calm Streak — a gentle measure of emotional awareness, 
              not calories. Every mindful moment counts.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-serif font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground mt-1">Day streak</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-terracotta">87%</div>
                <div className="text-sm text-muted-foreground mt-1">Awareness score</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-sage">4.2k</div>
                <div className="text-sm text-muted-foreground mt-1">Mindful moments</div>
              </div>
            </div>
          </div>

          <div className="section-reveal stagger-2 glass-card p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-lg font-semibold">Calm Streak</span>
              <span className="text-sm text-muted-foreground">This week</span>
            </div>
            <svg viewBox={`0 0 100 ${chartHeight}`} className="w-full h-44" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--sage))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaD} fill="url(#areaGrad)" />
              <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="hsl(var(--accent))" className="drop-shadow-sm" />
              ))}
            </svg>
            <div className="flex justify-between mt-4 px-1">
              {dataPoints.map((d) => (
                <span key={d.day} className="text-xs text-muted-foreground">{d.day}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
