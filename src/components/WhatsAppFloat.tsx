import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/3213711610"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-fade-in-up animate-[neon-pulse_2s_ease-in-out_infinite]"
      style={{
        boxShadow: '0 0 15px hsl(142 70% 40% / 0.5), 0 0 30px hsl(142 70% 40% / 0.3), 0 0 45px hsl(142 70% 40% / 0.15)',
        animation: 'neon-pulse 2s ease-in-out infinite',
      }}
      aria-label="Contactar por WhatsApp"
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px hsl(142 70% 45% / 0.7), 0 0 40px hsl(142 70% 45% / 0.5), 0 0 60px hsl(142 70% 45% / 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 15px hsl(142 70% 40% / 0.5), 0 0 30px hsl(142 70% 40% / 0.3), 0 0 45px hsl(142 70% 40% / 0.15)';
      }}
    >
      <MessageCircle className="w-8 h-8" />

      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            box-shadow: 0 0 15px hsl(142 70% 40% / 0.5), 0 0 30px hsl(142 70% 40% / 0.3), 0 0 45px hsl(142 70% 40% / 0.15);
          }
          50% {
            box-shadow: 0 0 20px hsl(142 70% 45% / 0.7), 0 0 40px hsl(142 70% 45% / 0.45), 0 0 60px hsl(142 70% 45% / 0.25);
          }
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFloat;
