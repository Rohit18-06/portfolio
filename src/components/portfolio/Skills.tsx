import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Section, TiltCard } from "./primitives";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A stack for <span className="text-gradient">building end-to-end</span>.</>}
      subtitle="From core CS fundamentals to modern AI APIs — organized by how I actually use them."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resume.skills.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (idx % 3) * 0.08 }}
          >
            <TiltCard className="h-full">
              <div className="relative h-full glass rounded-2xl p-5 overflow-hidden">
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(240px circle at var(--mx) var(--my), color-mix(in oklab, var(--cyan) 28%, transparent), transparent 60%)",
                  }}
                />
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    {cat.category}
                  </h3>
                  <span className="text-xs text-muted-foreground">{cat.items.length}</span>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((it) => (
                    <li key={it.name}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium">{it.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{it.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary/70 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${it.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
