import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { resume } from "@/data/resume";
import { Section, TiltCard } from "./primitives";

function CopyRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="glass rounded-2xl p-4 flex items-center gap-3 group">
      <div className="grid place-items-center size-10 rounded-xl bg-cyan/15 text-cyan shrink-0">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        {href ? (
          <a href={href} className="block truncate text-sm font-medium hover:text-cyan transition-colors">
            {value}
          </a>
        ) : (
          <div className="truncate text-sm font-medium">{value}</div>
        )}
      </div>
      <button
        aria-label={`Copy ${label}`}
        onClick={async () => {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          toast.success(`${label} copied`);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="p-2 rounded-lg hover:bg-secondary transition-colors"
      >
        {copied ? <Check className="size-4 text-cyan" /> : <Copy className="size-4 text-muted-foreground" />}
      </button>
    </div>
  );
}

export function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let&rsquo;s build something <span className="text-gradient">brilliant</span>.</>}
      subtitle="Best reached via email or LinkedIn — I usually reply within a day."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <CopyRow icon={<Mail className="size-5" />} label="Email" value={resume.email} href={`mailto:${resume.email}`} />
          <CopyRow icon={<Phone className="size-5" />} label="Phone" value={resume.phone} href={`tel:${resume.phone.replace(/\s+/g, "")}`} />
          <CopyRow icon={<Linkedin className="size-5" />} label="LinkedIn" value="rohit-oruganti" href={resume.linkedin} />
          <CopyRow icon={<MapPin className="size-5" />} label="Location" value={resume.location} />
        </div>

        <TiltCard className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              const subject = encodeURIComponent(`Portfolio inquiry from ${state.name || "you"}`);
              const body = encodeURIComponent(`${state.message}\n\n— ${state.name}\n${state.email}`);
              window.location.href = `mailto:${resume.email}?subject=${subject}&body=${body}`;
              setTimeout(() => {
                setSending(false);
                toast.success("Opening your email client…");
              }, 400);
            }}
            className="glass rounded-3xl p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                <input
                  required
                  value={state.name}
                  onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl bg-secondary/50 border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition"
                  placeholder="Your name"
                  maxLength={80}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                <input
                  required
                  type="email"
                  value={state.email}
                  onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                  className="mt-1.5 w-full rounded-xl bg-secondary/50 border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition"
                  placeholder="you@company.com"
                  maxLength={120}
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
              <textarea
                required
                rows={5}
                value={state.message}
                onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
                className="mt-1.5 w-full rounded-xl bg-secondary/50 border border-border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition resize-none"
                placeholder="Tell me about the role or project…"
                maxLength={1500}
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium disabled:opacity-60 shadow-glow"
            >
              <Send className="size-4" /> {sending ? "Sending…" : "Send message"}
            </motion.button>
          </form>
        </TiltCard>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {resume.shortName}. Crafted with care.
        </div>
        <div className="flex items-center gap-3">
          <a href={`mailto:${resume.email}`} aria-label="Email" className="p-2 rounded-full glass hover:bg-secondary transition-colors">
            <Mail className="size-4" />
          </a>
          <a href={resume.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full glass hover:bg-secondary transition-colors">
            <Linkedin className="size-4" />
          </a>
          <a href="#" aria-label="GitHub" className="p-2 rounded-full glass hover:bg-secondary transition-colors opacity-60" title="Add GitHub link when available">
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
