import { Sparkles, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-16 border-t border-border/50">
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Sparkles size={18} strokeWidth={1.5} className="text-accent" />
          <span className="font-serif text-lg font-semibold">Serene</span>
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart size={14} strokeWidth={1.5} className="text-terracotta" /> for mindful living
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
