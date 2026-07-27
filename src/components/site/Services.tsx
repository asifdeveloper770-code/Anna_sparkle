import { motion } from "motion/react";
import { Home, Building2, Hammer, GraduationCap, BedDouble, Sparkles, KeyRound } from "lucide-react";
import { Reveal } from "./Reveal";
import duplexImg from "@/assets/duplex-rental.jpg";
import prepImg from "@/assets/rental-prep.jpg";

const cleaningItems = [
  { icon: Home, title: "House Cleaning", desc: "Deep & recurring care." },
  { icon: Building2, title: "Office Cleaning", desc: "Spotless workspaces." },
  { icon: Hammer, title: "Post-Renovation", desc: "Dust, debris — gone." },
  { icon: GraduationCap, title: "School Cleaning", desc: "Safe learning spaces." },
];

const cardHover = {
  rest: { scale: 1, boxShadow: "0 10px 30px -20px rgba(30,41,80,0.15)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 40px -20px rgba(30,41,80,0.35)",
    transition: { type: "spring" as const, stiffness: 250, damping: 20 },
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-magenta">
            What we do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-navy">Services</h2>
          <p className="mt-4 text-muted-foreground">
            Two solutions, one standard of care. Every space treated with the detail
            it deserves.
          </p>
        </Reveal>

        <div id="rentals" className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Cleaning card */}
          <Reveal>
            <div className="rounded-[2rem] bg-card p-6 sm:p-8 glow-sky h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sky/30 text-navy">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy">
                    Premium Cleaning Services
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Homes, offices, schools & short-term rentals.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {cleaningItems.map((it) => (
                  <motion.div
                    key={it.title}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardHover}
                    className="rounded-2xl border border-sky/40 bg-sky-soft/60 p-5"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-navy shadow-sm">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 font-semibold text-navy">{it.title}</p>
                    <p className="text-xs text-muted-foreground">{it.desc}</p>
                  </motion.div>
                ))}

                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHover}
                  className="sm:col-span-2 rounded-2xl border border-magenta/40 bg-gradient-to-br from-magenta/15 via-magenta/10 to-white p-6 flex items-center gap-5"
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-magenta text-white shadow-lg">
                    <Sparkles className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-magenta">
                      Specialty
                    </p>
                    <p className="font-bold text-navy text-lg">Airbnb Cleaning</p>
                    <p className="text-sm text-muted-foreground">
                      Fast turnovers, hotel-grade linens, 5-star ready.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>

          {/* Renting card */}
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-card p-6 sm:p-8 glow-magenta h-full">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-magenta/20 text-magenta">
                  <KeyRound className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy">
                    Renting Solutions
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Beautifully prepared spaces that rent themselves.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5">
                {[
                  {
                    img: duplexImg,
                    icon: BedDouble,
                    title: "Duplex Rentals",
                    desc: "Modern duplexes ready for short or long-term stays.",
                  },
                  {
                    img: prepImg,
                    icon: Sparkles,
                    title: "Rental Preparation",
                    desc: "Staging, styling and deep-clean turnkey service.",
                  },
                ].map((r) => (
                  <motion.div
                    key={r.title}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={cardHover}
                    className="rounded-2xl overflow-hidden border border-magenta/30 bg-white"
                  >
                    <div className="grid sm:grid-cols-[160px_minmax(0,1fr)]">
                      <div className="aspect-[4/3] sm:aspect-auto overflow-hidden">
                        <img
                          src={r.img}
                          alt={r.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-magenta/10 text-magenta">
                          <r.icon className="h-4 w-4" />
                        </span>
                        <p className="mt-2 font-semibold text-navy">{r.title}</p>
                        <p className="text-sm text-muted-foreground">{r.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
