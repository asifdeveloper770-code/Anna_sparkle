import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { BookingForm } from "@/components/site/BookingForm";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    meta: [
      { title: "Anna's Cleaning & Renting Solutions — Hablamos español" },
      {
        name: "description",
        content:
          "Professional cleaning services and beautifully prepared duplex rentals. Bilingual team — Hablamos español. Book a free consultation today.",
      },
      { property: "og:title", content: "Anna's Cleaning & Renting Solutions" },
      {
        property: "og:description",
        content:
          "Premium cleaning + rental preparation. Homes, offices, Airbnb turnovers and duplex rentals. Hablamos español.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<"en" | "es">("en");
  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <Services />
        <BookingForm />
        <About />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
