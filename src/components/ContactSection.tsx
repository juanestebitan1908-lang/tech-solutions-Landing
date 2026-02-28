import { MapPin, Mail, Phone, PhoneCall } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const ContactSection = () => {
  return (
    <section className="py-20" id="contacto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Datos de Contacto
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="glass rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-semibold font-display text-foreground mb-4">Información</h3>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Juan Esteban T</p>
                <p className="text-sm text-muted-foreground">Bogotá, Colombia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a href="mailto:juanestebitan1908@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                juanestebitan1908@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <a href="tel:+573213711610" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +57 321 371 1610
              </a>
            </div>
          </div>

          {/* Quick contact */}
          <div className="glass rounded-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold font-display text-foreground mb-4">Contacto rápido</h3>
            <a
              href="https://wa.me/3213711610"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-lg bg-whatsapp text-whatsapp-foreground font-semibold hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--whatsapp)/0.4)] transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="tel:+573213711610"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all"
            >
              <PhoneCall className="w-5 h-5" />
              Llamar ahora
            </a>
            <a
              href="mailto:juanestebitan1908@gmail.com"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-lg border border-border bg-secondary text-secondary-foreground font-semibold hover:bg-muted transition-all"
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

export default ContactSection;
