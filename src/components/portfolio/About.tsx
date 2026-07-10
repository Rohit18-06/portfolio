import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Reveal, Section } from "./primitives";
import { Sparkle } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Turning ideas into <span className="text-gradient">shippable software</span>.
        </>
      }
      subtitle={resume.about.summary}
    >
      <div className="grid md:grid-cols-5 gap-6">
        <Reveal className="md:col-span-3 glass rounded-3xl p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold mb-3">Career objective</h3>
          <p className="text-muted-foreground leading-relaxed">{resume.about.objective}</p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {resume.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-secondary/60 p-4 border border-border"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {s.value}
                  <span className="text-base text-muted-foreground">{s.suffix}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2 glass rounded-3xl p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold mb-4">Strengths</h3>
          <ul className="space-y-3">
            {resume.about.strengths.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm"
              >
                <span className="grid place-items-center size-7 rounded-lg bg-cyan/15 text-cyan">
                  <Sparkle className="size-3.5" />
                </span>
                {s}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
