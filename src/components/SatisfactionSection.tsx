import { useState } from "react";
import { Star } from "lucide-react";

const SatisfactionSection = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (value: number) => {
    setRating(value);
    setSubmitted(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto glass rounded-xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 text-foreground">
            Califica nuestro servicio
          </h2>
          <p className="text-muted-foreground mb-8">
            ¿Qué tan satisfecho estás con nuestra atención?
          </p>

          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleSelect(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                className="transition-transform duration-200 hover:scale-125 focus:outline-none"
                aria-label={`${star} estrellas`}
              >
                <Star
                  className={`w-10 h-10 transition-colors duration-200 ${
                    star <= (hovered || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            ))}
          </div>

          {submitted && (
            <p className="text-primary font-semibold animate-fade-in-up">
              ¡Gracias por tu opinión!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SatisfactionSection;
