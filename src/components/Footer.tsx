import { Monitor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Monitor className="w-4 h-4 text-primary" />
          <span className="font-display font-semibold text-foreground">TechSupport</span>
        </div>
        <p>© {new Date().getFullYear()} Juan Esteban T — Bogotá, Colombia</p>
      </div>
    </footer>
  );
};

export default Footer;
