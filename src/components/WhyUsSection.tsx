import { Zap, ShieldCheck, DollarSign, UserCheck, Award } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Atención rápida", desc: "Respondemos en el menor tiempo posible." },
  { icon: ShieldCheck, title: "Servicio confiable", desc: "Trabajo profesional con garantía." },
  { icon: DollarSign, title: "Precios accesibles", desc: "Tarifas justas para todos los presupuestos." },
  { icon: UserCheck, title: "Soporte personalizado", desc: "Cada cliente recibe atención dedicada." },
  { icon: Award, title: "Experiencia en soporte", desc: "Conocimiento sólido en equipos de cómputo." },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            ¿Por qué elegirnos?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-4 glass rounded-xl px-6 py-4 min-w-[260px]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold font-display text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
