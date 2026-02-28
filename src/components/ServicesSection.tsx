import { Wrench, Laptop, MonitorDown, Sparkles, Settings, ShieldCheck } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";

const services = [
  { icon: Wrench, title: "Mantenimiento preventivo y correctivo", desc: "Mantén tu equipo funcionando al máximo rendimiento con revisiones periódicas.", bg: service1 },
  { icon: Laptop, title: "Reparación de computadores y laptops", desc: "Diagnóstico y reparación de fallas de hardware y software.", bg: service2 },
  { icon: MonitorDown, title: "Instalación de sistemas operativos", desc: "Windows, Linux y más. Instalación limpia y configurada a tu medida.", bg: service3 },
  { icon: Sparkles, title: "Limpieza física de equipos", desc: "Limpieza interna y externa para prolongar la vida útil de tu equipo.", bg: service4 },
  { icon: Settings, title: "Configuración de programas y drivers", desc: "Instalamos y configuramos todo el software que necesitas.", bg: service5 },
  { icon: ShieldCheck, title: "Eliminación de virus y optimización", desc: "Elimina amenazas y mejora el rendimiento de tu computador.", bg: service6 },
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
              className="relative rounded-xl overflow-hidden min-h-[220px] group hover:glow transition-all duration-300"
            >
              <img src={service.bg} alt={service.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-background/80 group-hover:bg-background/70 transition-colors duration-300" />
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
