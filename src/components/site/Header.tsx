import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Menu } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#rentals", label: "Rentals" },
  { href: "#book", label: "Book" },
  { href: "#contact", label: "Contact" },
];

export function Header({
  lang,
  setLang,
}: {
  lang: "en" | "es";
  setLang: (l: "en" | "es") => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60 shadow-[0_4px_30px_-20px_rgba(0,0,0,0.15)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sky to-magenta text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="truncate">
            <span className="block text-sm sm:text-base font-bold text-navy leading-tight">
              Anna&apos;s
            </span>
            <span className="block text-[10px] sm:text-xs text-muted-foreground leading-tight">
              Cleaning &amp; Renting
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-navy/80 hover:text-navy transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-magenta after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5">
            <span
              className={cn(
                "text-xs font-semibold transition-colors",
                lang === "en" ? "text-navy" : "text-muted-foreground",
              )}
            >
              EN
            </span>
            <Switch
              checked={lang === "es"}
              onCheckedChange={(v) => setLang(v ? "es" : "en")}
              aria-label="Toggle English / Español"
            />
            <span
              className={cn(
                "text-xs font-semibold transition-colors",
                lang === "es" ? "text-magenta" : "text-muted-foreground",
              )}
            >
              ES
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu />
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy py-1"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-semibold">EN</span>
              <Switch
                checked={lang === "es"}
                onCheckedChange={(v) => setLang(v ? "es" : "en")}
              />
              <span className="text-xs font-semibold">ES</span>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
