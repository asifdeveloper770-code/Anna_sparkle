import { Facebook, Instagram, Youtube, Twitter, Phone } from "lucide-react";
import cityscape from "@/assets/cityscape.png";

export function Footer() {
  return (
    <footer id="contact" className="relative mt-24">
      <div aria-hidden className="h-24 sm:h-32 w-full overflow-hidden bg-background">
        <img
          src={cityscape}
          alt=""
          className="h-full min-w-full object-cover object-bottom opacity-95"
          loading="lazy"
        />
      </div>
      <div className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3 items-center text-center md:text-left">
          <div className="order-2 md:order-1">
            <p className="text-lg font-black tracking-tight">Anna&apos;s</p>
            <p className="text-xs text-white/70">Cleaning &amp; Renting Solutions</p>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center gap-2">
            <p className="text-magenta-soft font-semibold text-lg">Hablamos español</p>
            <a
              href="tel:5468811879"
              className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-black hover:text-magenta-soft transition-colors"
            >
              <Phone className="h-6 w-6" />
              546-881-1879
            </a>
          </div>

          <div className="order-3 flex justify-center md:justify-end gap-3">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-magenta transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Anna&apos;s Cleaning &amp; Renting Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
