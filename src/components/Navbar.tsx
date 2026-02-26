import { Monitor } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Monitor className="w-6 h-6 text-primary" />
          <span className="font-display font-bold text-lg text-foreground">TechSupport</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">Servicios</a>
          <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
          <a
            href="https://wa.me/573213711610"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
