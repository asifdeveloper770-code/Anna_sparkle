import { Reveal } from "./Reveal";
import aboutImg from "@/assets/about-team.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Dedicated, background-checked team",
  "Eco-friendly products & attention to detail",
  "Bilingual service — Hablamos español",
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl bg-magenta/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-3xl bg-sky/50 -z-10" />
            <img
              src={aboutImg}
              alt="Anna's team members smiling in blue aprons"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto rounded-[2rem] object-cover shadow-2xl ring-1 ring-black/5"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-widest text-magenta">
            About Us
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-navy leading-tight">
            Care you can feel, <br /> quality you can trust.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Anna&apos;s Cleaning &amp; Renting Solutions was built on a simple idea:
            every space deserves genuine care. From family homes to boutique
            duplex rentals, we bring the same warmth, attention and reliability
            to every visit.
          </p>
          <p className="mt-3 text-muted-foreground">
            Our team is trained, insured and fluent in both English and Spanish —
            so every client feels heard and every job is done right the first time.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-navy">
                <CheckCircle2 className="h-5 w-5 text-magenta shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
