import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { resume } from "@/data/resume";
import { Section, TiltCard } from "./primitives";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Things I&rsquo;ve <span className="text-gradient">designed & shipped</span>.
        </>
      }
      subtitle="A snapshot of what I've been building — happy to walk through the code or architecture."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {resume.projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TiltCard className="h-full">
              <article className="group h-full relative glass rounded-3xl p-6 md:p-7 overflow-hidden">
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(320px circle at var(--mx) var(--my), color-mix(in oklab, var(--violet) 25%, transparent), transparent 65%)",
                  }}
                />
                <div className="relative aspect-[16/9] rounded-2xl mb-5 overflow-hidden border border-border bg-gradient-to-br from-cyan/15 via-transparent to-violet/15">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="font-mono text-xs text-muted-foreground/80 tracking-wide">
                      /* {p.name.toLowerCase().replace(/\s+/g, "-")} */
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-16 size-56 rounded-full bg-cyan/25 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight">
                    {p.name}
                  </h3>
                  <span className="grid place-items-center size-9 rounded-full bg-secondary group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="text-muted-foreground">
                      <span className="text-cyan mr-2">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-full bg-secondary/60 border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
