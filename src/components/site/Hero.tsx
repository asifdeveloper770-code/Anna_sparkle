import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { CalendarCheck, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-duplex.jpg";
import mascot from "@/assets/mascot.png";
import cityscape from "@/assets/cityscape.png";

export function Hero() {
  const { scrollY } = useScroll();
  const cityY = useTransform(scrollY, [0, 800], [0, 120]);
  const blob1Y = useTransform(scrollY, [0, 800], [0, -60]);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Ambient blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky/40 blur-3xl"
      />
      <div className="pointer-events-none absolute top-40 right-0 h-96 w-96 rounded-full bg-magenta/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-magenta/10 px-4 py-1.5 text-xs font-semibold text-magenta ring-1 ring-magenta/20">
              <MessageCircle className="h-3.5 w-3.5" /> Hablamos español
            </span>
            <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-navy">
              Professional Care <br className="hidden sm:block" />
              for Every Space
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
              Your Clean Home &amp; Elevated Rental Living. Trusted cleaning services
              and beautifully prepared duplex rentals — delivered with heart.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-auto min-h-14 w-full sm:w-auto rounded-full bg-navy hover:bg-navy-soft text-white px-6 py-3 text-sm sm:text-base shadow-[0_15px_40px_-15px_rgba(30,41,80,0.7)] transition-transform hover:-translate-y-0.5"
              >
                <a href="#book" className="flex flex-wrap items-center justify-center gap-2">
                  <CalendarCheck className="h-5 w-5" />
                  <span>Schedule Your Free Consultation</span>
                  <span className="rounded-full bg-magenta/90 px-2 py-0.5 text-[11px] font-semibold">
                    Hablamos español
                  </span>
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full bg-sky ring-2 ring-background" />
                <span className="h-8 w-8 rounded-full bg-magenta ring-2 ring-background" />
                <span className="h-8 w-8 rounded-full bg-navy ring-2 ring-background" />
              </div>
              <span className="ml-2">Loved by 200+ homes &amp; hosts</span>
            </div>
          </motion.div>

          {/* Mascot */}
          <motion.img
            src={mascot}
            alt="Anna cleaning mascot"
            width={220}
            height={220}
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block absolute -bottom-10 -left-4 w-44 drop-shadow-2xl select-none pointer-events-none"
          />
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
            <img
              src={heroImg}
              alt="Luxurious modern duplex interior with staircase"
              width={1280}
              height={960}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 -left-6 sm:-left-10 rounded-2xl bg-card/90 backdrop-blur-md px-5 py-4 shadow-xl ring-1 ring-border"
          >
            <p className="text-xs text-muted-foreground">Duplex ready in</p>
            <p className="text-2xl font-black text-navy">48 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute -top-4 -right-2 sm:-right-6 rounded-2xl bg-magenta text-white px-4 py-3 shadow-xl"
          >
            <p className="text-[11px] uppercase tracking-widest opacity-80">Rentals</p>
            <p className="text-sm font-bold">Airbnb-ready</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cityscape silhouette */}
      <motion.img
        src={cityscape}
        alt=""
        aria-hidden
        style={{ y: cityY }}
        className="pointer-events-none select-none absolute bottom-0 left-0 w-full opacity-15"
      />
    </section>
  );
}
