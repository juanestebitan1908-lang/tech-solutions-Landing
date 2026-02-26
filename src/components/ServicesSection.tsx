import { Wrench, Laptop, MonitorDown, Sparkles, Settings, ShieldCheck } from "lucide-react";

const services = [
  { icon: Wrench, title: "Mantenimiento preventivo y correctivo", desc: "Mantén tu equipo funcionando al máximo rendimiento con revisiones periódicas." },
  { icon: Laptop, title: "Reparación de computadores y laptops", desc: "Diagnóstico y reparación de fallas de hardware y software." },
  { icon: MonitorDown, title: "Instalación de sistemas operativos", desc: "Windows, Linux y más. Instalación limpia y configurada a tu medida." },
  { icon: Sparkles, title: "Limpieza física de equipos", desc: "Limpieza interna y externa para prolongar la vida útil de tu equipo." },
  { icon: Settings, title: "Configuración de programas y drivers", desc: "Instalamos y configuramos todo el software que necesitas." },
  { icon: ShieldCheck, title: "Eliminación de virus y optimización", desc: "Elimina amenazas y mejora el rendimiento de tu computador." },
];

const ServicesSection = () => {
  return (
    <section className="py-20" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluciones integrales para todo tipo de equipos de cómputo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 hover:glow transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
