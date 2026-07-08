import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([e]) => e.isIntersecting && setActive(n.id),
        { rootMargin: "-40% 0px -55% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-cyan to-violet"
      />
      <header className="fixed top-4 inset-x-4 z-50 flex justify-center">
        <nav className="glass rounded-full px-3 py-2 flex items-center gap-1 shadow-glow max-w-full">
          <a href="#home" className="px-3 py-1.5 font-display font-bold tracking-tight text-sm">
            <span className="text-gradient">RO.</span>
          </a>
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    active === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{n.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-1 p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </header>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-20 inset-x-4 z-40 glass rounded-2xl p-3"
        >
          <ul className="flex flex-col">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-lg ${
                    active === n.id ? "bg-secondary text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
