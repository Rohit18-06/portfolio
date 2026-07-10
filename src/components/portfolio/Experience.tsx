import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { resume } from "@/data/resume";
import { Section } from "./primitives";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          Simulations that ship <span className="text-gradient">real-world thinking</span>.
        </>
      }
      subtitle="Structured, evaluated job simulations built by top employers on Forage."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <ul className="space-y-10">
          {resume.experience.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <li key={e.company} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 size-3 rounded-full bg-cyan shadow-[0_0_0_6px_color-mix(in_oklab,var(--cyan)_20%,transparent)]" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`ml-10 md:ml-0 ${left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}`}
                >
                  <div className="glass rounded-2xl p-6 relative overflow-hidden">
                    <div
                      className={`flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2 ${left ? "md:justify-end" : ""}`}
                    >
                      <Briefcase className="size-3.5" /> {e.period}
                    </div>
                    <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                    <div className="text-sm text-cyan font-mono mt-0.5">{e.company}</div>
                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted-foreground ${left ? "md:text-right" : ""}`}
                    >
                      {e.bullets.map((b) => (
                        <li key={b} className="leading-relaxed">
                          — {b}
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 flex flex-wrap gap-1.5 ${left ? "md:justify-end" : ""}`}>
                      {e.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary/70 border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
