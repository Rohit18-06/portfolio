import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";
import { resume } from "@/data/resume";
import { Reveal, Section, TiltCard } from "./primitives";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <>
          Foundations in <span className="text-gradient">computer science</span>.
        </>
      }
    >
      <div className="grid gap-6">
        {resume.education.map((ed) => (
          <Reveal key={ed.school} className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-violet/20 blur-3xl" />
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div className="grid place-items-center size-14 rounded-2xl bg-cyan/15 text-cyan shrink-0">
                <GraduationCap className="size-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-semibold">{ed.degree}</h3>
                  <span className="text-xs font-mono text-muted-foreground">· {ed.period}</span>
                </div>
                <div className="text-cyan font-mono text-sm mt-1">{ed.school}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-sm">
                  <Award className="size-4 text-violet" /> {ed.score}
                </div>
                <div className="mt-5">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Relevant coursework
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ed.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] font-mono px-2 py-1 rounded-full bg-secondary/60 border border-border"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications & Achievements"
      title={
        <>
          Learning by <span className="text-gradient">doing</span>.
        </>
      }
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="grid sm:grid-cols-2 gap-4 content-start">
          {resume.certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <TiltCard className="h-full">
                <div className="h-full glass rounded-2xl p-5">
                  <div className="grid place-items-center size-10 rounded-xl bg-cyan/15 text-cyan mb-3">
                    <Award className="size-5" />
                  </div>
                  <div className="font-medium leading-snug">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground font-mono">{c.issuer}</div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          {resume.achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="grid place-items-center size-10 rounded-xl bg-violet/20 text-violet shrink-0">
                <Trophy className="size-5" />
              </div>
              <div>
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {a.org} · <span className="font-mono">{a.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
