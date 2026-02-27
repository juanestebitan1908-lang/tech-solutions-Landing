import { MessageCircle, Headphones, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Tecnología y hardware" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
            Soporte técnico profesional
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6 animate-fade-in-up text-foreground">
            Soporte Técnico en{" "}
            <span className="text-gradient">Equipos de Cómputo</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Soluciones rápidas y confiables para tu computador y tu empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573213711610?text=Hola,%20necesito%20soporte%20técnico"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-whatsapp text-whatsapp-foreground font-semibold text-lg hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--whatsapp)/0.5)] transition-all duration-300 glow-sm animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 hover:brightness-110 transition-all duration-300 glow-sm animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}
            >
              <Headphones className="w-5 h-5" />
              Solicitar soporte
            </a>
            <a
              href="mailto:juanestebitan1908@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold text-lg hover:scale-105 hover:bg-muted transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Mail className="w-5 h-5" />
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
