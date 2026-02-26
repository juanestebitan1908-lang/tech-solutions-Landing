import { Monitor } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <Monitor className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
            Sobre el servicio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos una microempresa dedicada al soporte técnico de equipos de cómputo. Ofrecemos soluciones en mantenimiento, reparación y configuración de computadores, con atención responsable y personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
