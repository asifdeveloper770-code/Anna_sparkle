import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const services = [
  "Limpieza / Cleaning",
  "Post-Renovation",
  "School Cleaning",
  "Duplex Renting",
];

export function BookingForm() {
  const [date, setDate] = useState<Date>();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request sent! We'll reach out shortly. ¡Gracias!");
  };

  return (
    <section id="book" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-[2.5rem] p-8 sm:p-12 bg-gradient-to-br from-sky-soft via-white to-sky/40 shadow-[0_30px_80px_-40px_rgba(30,41,80,0.35)] ring-1 ring-sky/40 overflow-hidden">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-magenta/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky/50 blur-3xl" />

            <div className="relative text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-magenta">
                Reservar
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy">
                Booking Form
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in your details — we&apos;ll confirm within 24 hours.{" "}
                <span className="text-magenta font-semibold">Hablamos español.</span>
              </p>
            </div>

            <form onSubmit={onSubmit} className="relative mt-8 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(646) 881-1879" defaultValue="(646) 881-1879" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="both">Both / Ambos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date &amp; Time</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Preferred Time</Label>
                <Select defaultValue="morning">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8–12)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12–5)</SelectItem>
                    <SelectItem value="evening">Evening (5–8)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="sm:col-span-2 space-y-3">
                <Label>Service Type</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <label
                      key={s}
                      className={cn(
                        "flex items-center gap-3 rounded-xl border border-border bg-white/70 px-4 py-3 cursor-pointer transition-all",
                        selected.includes(s) && "border-magenta bg-magenta/5",
                      )}
                    >
                      <Checkbox
                        checked={selected.includes(s)}
                        onCheckedChange={() => toggle(s)}
                      />
                      <span className="text-sm font-medium text-navy">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2 space-y-2">
                <Label htmlFor="notes">Special Requests</Label>
                <Textarea
                  id="notes"
                  rows={4}
                  placeholder="Tell us about your space, pets, access instructions…"
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 rounded-2xl bg-navy hover:bg-navy-soft text-white text-base font-semibold shadow-[0_15px_40px_-15px_rgba(30,41,80,0.7)] transition-transform hover:-translate-y-0.5"
                >
                  Request a Quote&nbsp;/&nbsp;Reservar
                </Button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
