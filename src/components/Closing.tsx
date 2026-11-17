import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { products, verticals, whatsappUrl } from "../data/content";
import { Logo } from "./ui";

/* -------------------------------- footer form ------------------------------- */

function FooterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:rangoipp@gmail.com?subject=${encodeURIComponent(
      "Consulta Biooma"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-sm space-y-3">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
        Escribinos
      </p>
      <input
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/30"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        className="w-full rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/30"
      />
      <textarea
        required
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mensaje"
        className="w-full resize-none rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/30"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wide text-cream"
      >
        <Mail className="h-3.5 w-3.5" />
        Enviar consulta
      </button>
    </form>
  );
}

/* --------------------------------- closing -------------------------------- */

export default function Closing() {
  return (
    <>
      {/* -------------------------------- footer ------------------------------ */}
      <footer className="relative overflow-hidden border-t border-line bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 pt-16 md:px-10 md:pt-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
                Mayorista de transformación digital. El catálogo para partners, integradores,
                agencias de marketing y consultores de distintas verticales: lo comercializan con
                su marca o como partner exclusivo de cada producto.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted/80">
                Buenos Aires, Argentina → LATAM
              </p>
              <FooterForm />
            </div>

            <div className="md:col-span-2">
              <p className="inline-flex rounded-full bg-lavender px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Catálogo
              </p>
              <ul className="mt-5 space-y-3">
                {verticals.map((v) => (
                  <li key={v.id}>
                    <a
                      href="#ecosistema"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {v.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="inline-flex rounded-full bg-mint px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Ecosistema
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {products.map((p) => (
                  <li key={p.code}>
                    <a
                      href="#ecosistema"
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="inline-flex rounded-full bg-peach px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
                Partners
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#partners" className="text-muted transition-colors hover:text-ink">
                    Programa y beneficios
                  </a>
                </li>
                <li>
                  <a href="#partners" className="text-muted transition-colors hover:text-ink">
                    Planes de suscripción
                  </a>
                </li>
                <li>
                  <a href="#agencia" className="text-muted transition-colors hover:text-ink">
                    Incluí nuevos servicios
                  </a>
                </li>
                <li>
                  <a href="#saas" className="text-muted transition-colors hover:text-ink">
                    Sumá tu SaaS
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rangoipp@gmail.com"
                    className="text-muted transition-colors hover:text-ink"
                  >
                    Contactanos
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-ink"
                  >
                    WhatsApp comercial
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* giant pastel wordmark */}
          <div
            className="pointer-events-none relative mt-16 select-none overflow-hidden md:mt-20"
            aria-hidden
          >
            <p className="bg-linear-to-r from-lavender-deep via-peach-deep to-mint-deep bg-clip-text text-center font-display text-[20vw] font-extrabold uppercase leading-[0.8] tracking-[-0.05em] text-transparent">
              biooma
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-paper to-transparent" />
          </div>

          <div className="border-t border-line py-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              © 2026 Biooma — Mayorista de transformación digital
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
