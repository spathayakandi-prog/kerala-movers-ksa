import { useState } from "react";
import { SITE, SERVICES } from "@/lib/site";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `New quote request:%0A
Name: ${f.get("name")}%0A
Phone: ${f.get("phone")}%0A
Pickup: ${f.get("pickup")}%0A
Destination: ${f.get("destination")}%0A
Service: ${f.get("service")}%0A
Message: ${f.get("message")}`;
    window.open(`${SITE.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  }
  const input = "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm";
  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4 bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
      <input required name="name" placeholder="Your Name" className={input} />
      <input required name="phone" placeholder="Phone Number" className={input} />
      <input required name="pickup" placeholder="Pickup Location" className={input} />
      <input required name="destination" placeholder="Destination" className={input} />
      <select required name="service" className={input + " sm:col-span-2"} defaultValue="">
        <option value="" disabled>Select Service Needed</option>
        {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
      </select>
      <textarea name="message" rows={4} placeholder="Tell us about your move (rooms, floor, items)" className={input + " sm:col-span-2"} />
      <button type="submit" className="sm:col-span-2 bg-gradient-gold text-gold-foreground font-semibold py-3.5 rounded-lg shadow-gold hover:opacity-95 transition-smooth">
        Get Free Quote via WhatsApp
      </button>
      {sent && <p className="sm:col-span-2 text-sm text-whatsapp font-medium">Opening WhatsApp — we typically reply within minutes.</p>}
    </form>
  );
}
