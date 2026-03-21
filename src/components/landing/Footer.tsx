import { Heart } from "lucide-react";
import logoImage from "@/assets/WhatsApp_Image_2026-03-21_at_12.38.25-removebg-preview.png";

const Footer = () => (
  <footer id="footer" className="py-5 border-t border-border/50 bg-[#FAF8FE]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center h-16 overflow-visible">
          <img
            src={logoImage}
            alt="Pulz logo"
            className="h-32 w-32 rounded-full object-cover -my-12"
          />
        </div>
        <p className="text-sm text-muted-foreground flex items-center gap-1">
          Made with <Heart size={14} strokeWidth={1.5} className="text-terracotta" /> for mindful living
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
