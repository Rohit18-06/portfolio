import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Mail, MapPin, Sparkles } from "lucide-react";
import { HeroScene } from "./HeroScene";
import { TypeCycle } from "./primitives";
import { resume } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-grid"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 size-[520px] rounded-full bg-cyan/25 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-20 size-[560px] rounded-full bg-violet/25 blur-[130px] animate-float [animation-delay:-3s]" />
      </div>
      <HeroScene />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/10 to-background pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground mb-6"
        >
          <Sparkles className="size-3.5 text-cyan" />
          Available for internships & collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
        >
          Hi, I&rsquo;m <span className="text-gradient animate-gradient">Rohit</span>.
          <br />
          <span className="text-foreground/90">I build </span>
          <TypeCycle
            words={["AI experiences", "web apps", "data tools", "cloud systems"]}
            className="text-gradient animate-gradient"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          {resume.tagline} {resume.title}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.03] shadow-glow-lg"
          >
            <FolderGit2 className="size-4" />
            View Projects
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-y-0 -left-8 w-8 bg-background/40 skew-x-[-20deg] group-hover:translate-x-[140%] transition-transform duration-700" />
            </span>
          </a>
          <a
            href={resume.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Download className="size-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="size-4" /> Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center gap-4 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-cyan" />
            {resume.location}
          </span>
          <span className="size-1 rounded-full bg-border" />
          <span>GITAM University · CSE &rsquo;27</span>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2 group"
      >
        <span className="tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="size-4 animate-bounce group-hover:text-foreground" />
      </a>
    </section>
  );
}
