import { useState } from "react";
import { Send } from "lucide-react";

const ReviewSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setComment("");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto glass rounded-xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-2 text-foreground text-center">
            Deja tu reseña
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            Tu opinión nos ayuda a mejorar
          </p>

          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <p className="text-xl font-semibold text-primary">
                ¡Gracias por tu reseña! 🎉
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="review-name" className="block text-sm font-medium text-foreground mb-1.5">
                  Nombre
                </label>
                <input
                  id="review-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="review-email" className="block text-sm font-medium text-foreground mb-1.5">
                  Correo <span className="text-muted-foreground">(opcional)</span>
                </label>
                <input
                  id="review-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="review-comment" className="block text-sm font-medium text-foreground mb-1.5">
                  Comentario
                </label>
                <textarea
                  id="review-comment"
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Cuéntanos tu experiencia..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:scale-[1.03] hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Enviar reseña
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
