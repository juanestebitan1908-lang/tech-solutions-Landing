import { Instagram, Mail, Phone } from "lucide-react";

const ribbons = [
  {
    icon: Instagram,
    label: "@aliastorresxd",
    href: "https://www.instagram.com/aliastorresxd",
    bg: "bg-gradient-to-r from-pink-600 to-purple-600",
  },
  {
    icon: Mail,
    label: "juanestebitan1908@gmail.com",
    href: "mailto:juanestebitan1908@gmail.com",
    bg: "bg-primary",
  },
  {
    icon: Phone,
    label: "+57 321 371 1610",
    href: "tel:+573213711610",
    bg: "bg-accent",
  },
];

const SocialRibbons = () => {
  return (
    <div className="fixed left-0 bottom-6 z-50 flex flex-col gap-2">
      {ribbons.map((r) => (
        <a
          key={r.label}
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 ${r.bg} text-primary-foreground pl-3 pr-4 py-2.5 rounded-r-lg -translate-x-[calc(100%-40px)] hover:translate-x-0 transition-transform duration-300 ease-out shadow-md hover:shadow-lg`}
        >
          <r.icon className="w-5 h-5 shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {r.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialRibbons;
