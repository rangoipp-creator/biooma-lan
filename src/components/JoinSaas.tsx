import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Network,
  Stamp,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { whatsappUrl } from "../data/content";
import { Marker } from "./ui";

/* One full "intake" cycle: entra → se cataloga → sale a la red */
const T = 6.4;

const loop = (times: number[], ease: "easeInOut" | "easeOut" = "easeInOut") => ({
  duration: T,
  times,
  repeat: Infinity,
  ease,
});

const partners = [
  { label: "Partner", code: "01", at: 0.5 },
  { label: "Agencia", code: "02", at: 0.56 },
  { label: "Integrador", code: "03", at: 0.62 },
];

const legend = [
  { n: "01", t: "Entra tu SaaS", a: 0.18, b: 0.24, c: 0.9, d: 0.96 },
  { n: "02", t: "Se cataloga", a: 0.18, b: 0.24, c: 0.44, d: 0.5 },
  { n: "03", t: "Sale a la red", a: 0.4, b: 0.44, c: 0.46, d: 0.5 },
];

const perks = ["Marca blanca a elección", "Partner exclusivo", "Programa de desarrollo"];

/* Flip config: ancho idéntico en ambos estados para que la píldora no salte. */
const flipLeft = {
  first: "¿Para",
  second: "founders?",
  firstClass: "font-serif italic text-ink",
  secondClass: "font-serif italic text-lavender-deep",
  swatch: "bg-lavender-deep",
};
const flipRight = {
  first: "Founders",
  second: "adentro.",
  firstClass: "font-serif italic text-ink",
  secondClass: "font-serif italic text-mint-deep",
  swatch: "bg-mint-deep",
};

const dockLabel = "TU SAAS ENTRA · LO CATALOGA · LA RED LO COMERCIALIZA · ";

function FounderFlip() {
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setFlip((f) => !f), 3000);
    return () => clearInterval(t);
  }, []);

  const state = flip ? flipRight : flipLeft;
  const measure = (value: string, cls: string) => (
    <span aria-hidden className={`invisible absolute left-0 top-0 whitespace-nowrap ${cls}`}>
      {value}
    </span>
  );

  return (
    <span className="inline-flex items-baseline gap-2.5 rounded-full border border-ink/15 bg-paper/70 px-4 py-2 backdrop-blur-sm">
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55">
        04
      </span>
      <motion.span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${state.swatch}`}
        animate={{ scale: [1, 1.7, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative whitespace-nowrap">
        {/* measure both states so the wrapper reserves the widest layout */}
        <span className="relative block">
          {measure(flipLeft.first, "text-left " + flipLeft.firstClass)}
          {measure(flipLeft.second, "text-left " + flipLeft.secondClass)}
          {measure(flipRight.first, flipRight.firstClass)}
          {measure(flipRight.second, flipRight.secondClass)}
          <motion.span
            key={String(flip)}
            initial={{ opacity: 0, y: 9 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative block text-left"
          >
            {flip ? (
              <span className="flex items-baseline gap-1.5">
                <span className={state.firstClass}>{state.first}</span>
                <span className={state.secondClass}>{state.second}</span>
              </span>
            ) : (
              <span className="flex items-baseline gap-1.5">
                <span className={state.firstClass}>{state.first}</span>
                <span className={state.secondClass}>{state.second}</span>
              </span>
            )}
          </motion.span>
        </span>
      </span>
    </span>
  );
}

const chips = [
  "Nuevo mayorista",
  "CRM",
  "ERP",
  "Pagos",
  "LegalTech",
  "Telefonía",
  "Finanzas",
  "Ecommerce",
  "Agentes IA",
  "Seguridad",
  "Transformación digital",
];
const ticker = [...chips, ...chips];

function RevealLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function JoinSaas() {
  return (
    <section id="saas" className="relative scroll-mt-20 px-3 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[2rem] border border-ink/10 bg-butter md:rounded-[2.5rem]"
      >
        {/* layered backdrop */}
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-mint-deep/25 blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-lavender-deep/25 blur-[90px]"
          aria-hidden
        />

        {/* dock header — una tira, sin bloques */}
        <div className="relative flex items-center gap-3 border-b border-ink/20 bg-ink px-5 py-2.5 md:gap-4 md:px-7">
          <p className="inline-flex shrink-0 items-baseline gap-2.5 leading-none">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-cream/45">
              04
            </span>
            <span className="font-display text-base font-extrabold tracking-[-0.02em] text-cream sm:text-lg">
              Para{" "}
              <motion.span
                className="font-serif italic text-lavender-deep"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                founders
              </motion.span>
            </span>
          </p>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[0, 1].map((g) => (
                <div key={g} className="flex shrink-0">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="whitespace-nowrap px-6 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-cream/45"
                    >
                      {dockLabel}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <motion.p
            className="flex shrink-0 items-center gap-2 rounded-full border border-mint-deep/40 bg-mint-deep/10 px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-mint-deep"
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-deep opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-deep" />
            </span>
            En armado
          </motion.p>
        </div>

        <div className="relative grid gap-8 px-5 py-8 md:grid-cols-12 md:gap-7 md:px-8 md:py-9">
          {/* ------------------------------ statement ----------------------------- */}
          <div className="md:col-span-7 lg:col-span-7">
            <FounderFlip />

            <h2 className="mt-4 font-serif font-normal italic leading-[1.02] tracking-normal text-ink">
              <span className="block text-[1.55rem] sm:text-[2.1rem] md:text-[2.25rem] lg:text-[2.5rem]">
                <RevealLine>¿Sos un SaaS</RevealLine>
                <RevealLine delay={0.07}>y querés formar parte?</RevealLine>
              </span>
              <span className="mt-1 block text-[1.2rem] leading-[1.08] sm:text-[1.65rem] md:text-[1.8rem]">
                <RevealLine delay={0.14}>
                  Sumate a un <Marker tone="mint" delay={0.75}>nuevo mayorista</Marker>
                </RevealLine>
                <RevealLine delay={0.21}>
                  de transformación digital.{" "}
                  <motion.span
                    aria-hidden
                    className="inline-flex translate-y-[0.05em]"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-[0.78em] w-[0.78em]" strokeWidth={2.5} />
                  </motion.span>
                </RevealLine>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 max-w-xl text-[13px] leading-relaxed text-ink/70 sm:text-sm"
            >
              Si tu producto ya está en el mercado, lo sumamos al catálogo de Biooma. Una red de
              partners lo comercializa con un programa para desarrollarlo: vos construís el
              producto, ellos lo venden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-5 flex flex-wrap items-center gap-2.5"
            >
              <a
                href={whatsappUrl("Hola Biooma, soy un SaaS y quiero formar parte del catálogo")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex shrink-0 items-center gap-2.5 overflow-hidden rounded-full bg-ink px-6 py-3 font-display text-xs font-bold uppercase tracking-wide text-cream shadow-[0_16px_34px_-16px_rgba(38,35,58,0.6)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute -inset-y-3 left-0 w-1/3 -skew-x-12 bg-cream/25 -translate-x-[160%] transition-transform duration-700 group-hover:translate-x-[420%]" />
                </span>
                <span className="relative inline-flex items-center gap-2.5">
                  Sumar mi SaaS
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
              <a
                href="#ecosistema"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper/60 px-5 py-3 font-display text-xs font-bold uppercase tracking-wide text-ink backdrop-blur-sm transition-colors duration-300 hover:bg-paper"
              >
                Ver el catálogo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 flex flex-wrap gap-1.5"
            >
              {perks.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-ink/15 bg-paper/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/70 transition-[translate,color] duration-300 hover:-translate-y-0.5 hover:text-ink"
                >
                  {p}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* --------------------------- intake machine --------------------------- */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="rounded-[1.4rem] border-2 border-ink/10 bg-paper p-3 shadow-[0_28px_60px_-34px_rgba(38,35,58,0.55)]">
              <div className="mb-2.5 flex items-center justify-between gap-3 px-1">
                <p className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  <Network className="h-3.5 w-3.5" />
                  Intake · ciclo continuo
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/40">
                  Partners listos
                </p>
              </div>

              {/* stage */}
              <div className="relative h-[182px] overflow-hidden rounded-2xl border border-line bg-cream sm:h-[196px]">
                <div className="bg-dots absolute inset-0 opacity-25" aria-hidden />

                {/* rail */}
                <div
                  className="absolute inset-x-5 top-1/2 h-px -translate-y-1/2 bg-ink/10"
                  aria-hidden
                />
                <motion.div
                  className="absolute left-5 right-[8.75rem] top-1/2 h-[2px] -translate-y-1/2 origin-left bg-ink/35 md:right-[9.5rem]"
                  animate={{ scaleX: [0, 0, 1, 1, 0, 0] }}
                  transition={loop([0, 0.46, 0.6, 0.72, 0.86, 0.95])}
                  aria-hidden
                />

                {/* incoming product card */}
                <motion.div
                  className="absolute left-5 top-1/2 w-[44%] max-w-[190px] -translate-y-1/2"
                  animate={{ x: ["-135%", "0%", "0%", "0%", "124%"], opacity: [0, 1, 1, 1, 0] }}
                  transition={loop([0, 0.14, 0.62, 0.76, 0.9])}
                >
                  <div className="rounded-xl border border-ink/12 bg-paper p-3 shadow-[0_12px_26px_-16px_rgba(38,35,58,0.5)]">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-lavender text-ink">
                        <Boxes className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate font-display text-sm font-bold tracking-tight text-ink">
                          Tu SaaS
                        </p>
                        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink/45">
                          en producción
                        </p>
                      </div>
                    </div>
                    <div className="mt-2.5 flex items-center gap-1.5">
                      <span className="h-1.5 flex-1 rounded-full bg-line" />
                      <span className="h-1.5 w-6 rounded-full bg-line" />
                    </div>
                  </div>

                {/* stamp */}
                <motion.div
                  className="absolute -right-2 -top-6 w-max max-w-[150%] origin-center sm:-right-3"
                    animate={{
                      opacity: [0, 0, 1, 1, 1, 0],
                      scale: [0.45, 0.45, 1.08, 1, 1, 0.82],
                      rotate: [-20, -20, -8, -8, -8, -8],
                    }}
                    transition={loop([0, 0.16, 0.24, 0.3, 0.74, 0.86], "easeOut")}
                  >
                    <div className="flex items-center gap-1.5 rounded-lg border-2 border-ink/70 bg-butter/90 px-2.5 py-1.5">
                      <Stamp className="h-3.5 w-3.5 shrink-0 text-ink" strokeWidth={2} />
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-ink">
                        WL-40
                        <span className="hidden sm:inline"> · marca blanca</span>
                      </span>
                    </div>
                  </motion.div>

                  {/* verified */}
                  <motion.span
                    className="absolute -bottom-3 -left-2 grid h-8 w-8 place-items-center rounded-full bg-mint-deep text-ink shadow-[0_8px_18px_-8px_rgba(38,35,58,0.6)]"
                    animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.3, 0.3, 1.25, 1, 1, 0.6] }}
                    transition={loop([0, 0.32, 0.38, 0.44, 0.78, 0.88])}
                  >
                    <BadgeCheck className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </motion.span>
                </motion.div>

                {/* partner network */}
                <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                  {partners.map((p) => (
                    <motion.div
                      key={p.code}
                      className="flex items-center gap-1.5 rounded-lg border border-ink/12 bg-paper px-2 py-1.5 shadow-[0_8px_18px_-12px_rgba(38,35,58,0.5)] sm:gap-2 sm:px-2.5 sm:py-2"
                      animate={{
                        opacity: [0.35, 0.35, 1, 1, 0.35, 0.35],
                        scale: [0.94, 0.94, 1.05, 1, 1, 0.94],
                      }}
                      transition={loop([0, p.at, p.at + 0.06, 0.74, 0.8, 1])}
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-peach font-mono text-[9px] font-semibold text-ink">
                        {p.code}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/75 sm:text-[10px] sm:tracking-[0.12em]">
                        {p.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* legend */}
              <ul className="mt-2.5 grid grid-cols-3 gap-1.5">
                {legend.map((l, i) => {
                  const active =
                    i === 0
                      ? [1, 1, 0, 0, 0, 1]
                      : i === 1
                        ? [0, 0, 1, 1, 0, 0]
                        : [0, 0, 0, 0, 1, 1];
                  return (
                    <li key={l.n} className="relative overflow-hidden rounded-lg border border-line bg-cream px-2 py-1.5">
                      <motion.span
                        className="absolute inset-0 bg-mint"
                        aria-hidden
                        animate={{ opacity: active }}
                        transition={loop([0, l.a, l.b, l.c, l.d, 1])}
                      />
                      <span className="relative flex flex-col gap-0.5">
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                          {l.n}
                        </span>
                        <span className="font-display text-[10px] font-bold leading-tight tracking-tight text-ink sm:text-[11px]">
                          {l.t}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <p className="mt-3 hidden px-1 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink/45">
              Así entra tu producto al catálogo
            </p>
          </div>
        </div>

        {/* conveyor */}
        <div className="relative border-t border-ink/15">
          <div className="stripes-hazard h-2.5 opacity-20" aria-hidden />
          <div className="overflow-hidden bg-ink/5 py-3">
            <div className="flex w-max animate-marquee">
              {ticker.map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="flex items-center gap-3 px-5 font-display text-sm font-bold uppercase tracking-[0.16em] text-ink/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
