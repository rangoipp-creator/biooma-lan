import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Check, Rocket } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "../data/content";
import { Marker } from "./ui";

type Profile = "establecida" | "arranca";

const profiles: {
  id: Profile;
  icon: typeof Building2;
  tone: string;
  kicker: string;
  title: string;
  points: string[];
}[] = [
  {
    id: "establecida",
    icon: Building2,
    tone: "bg-sky",
    kicker: "Ya operás",
    title: "Agencia establecida",
    points: [
      "Sumás servicios a tu oferta",
      "Condiciones mayoristas",
      "Tu marca, tu forma de vender",
    ],
  },
  {
    id: "arranca",
    icon: Rocket,
    tone: "bg-peach",
    kicker: "Recién comenzás",
    title: "Asesorate con líderes",
    points: [
      "Te armamos la oferta",
      "Acompañamiento de quienes ya venden",
      "Salís con soporte",
    ],
  },
];

export default function Agency() {
  const [profile, setProfile] = useState<Profile>("establecida");

  const perfilLabel = profile === "establecida" ? "agencia ya establecida" : "recién arranco";
  const waHref = whatsappUrl(
    `Hola Biooma, ${perfilLabel}. Quiero incluir nuevos servicios. Necesito una propuesta a medida.`
  );

  return (
    <section id="agencia" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-sky-deep/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-rose-deep/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-sky px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            03 — Para agencias
          </p>
          <h2 className="mt-4 font-display text-[1.6rem] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.1rem] md:text-[2.6rem]">
            ¿Sos agencia?{" "}
            <span className="font-serif font-normal normal-case italic tracking-normal">
              <Marker tone="peach">Incluí nuevos servicios.</Marker>
            </span>
          </h2>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {profiles.map((p) => {
            const on = profile === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setProfile(p.id)}
                aria-pressed={on}
                className={`rounded-[1.75rem] border p-6 text-left transition-all duration-300 md:p-8 ${
                  on
                    ? `${p.tone} border-ink/10 shadow-[0_16px_36px_-22px_rgba(38,35,58,0.4)]`
                    : "border-line bg-paper hover:border-ink/20"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-paper text-ink">
                    <p.icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-full ${
                      on ? "bg-ink text-cream" : "border border-ink/15 text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </div>
                <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55">
                  {p.kicker}
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold tracking-[-0.03em] text-ink">
                  {p.title}
                </h3>
                <ol className="mt-5 space-y-2">
                  {p.points.map((point, n) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                      <span className="font-mono text-[10px] font-semibold text-ink/40">
                        0{n + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ol>
              </button>
            );
          })}
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-cream transition-transform duration-300 hover:scale-[1.03] active:scale-95"
        >
          Hablar por WhatsApp
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
