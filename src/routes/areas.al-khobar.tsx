import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { ServicesGrid } from "@/components/ServicesGrid";

export const Route = createFileRoute("/areas/al-khobar")({
  head: () => ({
    meta: [
      { title: "Movers and Packers in Al Khobar | Kerala Movers — House Shifting Khobar" },
      { name: "description", content: "Top-rated movers and packers in Al Khobar. House shifting, villa relocation, furniture moving & office movers near you. Call +966 53 181 1378 — 24/7." },
      { property: "og:title", content: "Movers and Packers in Al Khobar" },
      { property: "og:url", content: "/areas/al-khobar" },
    ],
    links: [{ rel: "canonical", href: "/areas/al-khobar" }],
  }),
  component: AlKhobar,
});

function AlKhobar() {
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl">Movers and Packers in <span className="text-gold">Al Khobar</span></h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">Looking for trusted movers near you in Al Khobar? Kerala Movers offers fast, safe and affordable house shifting, furniture moving and office relocation across every neighborhood of Khobar.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href={SITE.whatsapp} className="bg-whatsapp text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"><MessageCircle className="h-5 w-5" />WhatsApp Now</a>
            <a href={`tel:${SITE.phone}`} className="bg-gradient-gold text-gold-foreground px-6 py-3 rounded-lg font-semibold shadow-gold inline-flex items-center gap-2"><Phone className="h-5 w-5" />Call 24/7</a>
          </div>
        </div>
      </section>
      <section className="container-px mx-auto max-w-4xl py-14 prose-headings:font-display">
        <h2 className="font-display text-3xl font-bold text-primary">Best Movers in Al Khobar — Trusted Kerala Team</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">Whether you're shifting a studio apartment in Al Aqrabiyah, a large villa in Al Bandariyah, or relocating an office near Corniche, our experienced Kerala movers handle every move with care. We're known across Al Khobar for safe packing, on-time pickup, and affordable transparent pricing.</p>
        <ul className="mt-6 space-y-2">
          {["Apartment movers Al Khobar","Villa shifting Khobar","Furniture moving near me","Office relocation Al Khobar","Same-day moving service","24/7 WhatsApp booking"].map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-whatsapp" />{p}</li>
          ))}
        </ul>
      </section>
      <section className="container-px mx-auto max-w-7xl pb-16">
        <h2 className="font-display text-3xl font-bold text-primary text-center mb-10">Our Services in Al Khobar</h2>
        <ServicesGrid />
      </section>
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
          <iframe title="Al Khobar map" src="https://www.google.com/maps?q=Al+Khobar+Saudi+Arabia&output=embed" className="w-full h-[400px]" loading="lazy" />
        </div>
        <div className="text-center mt-8"><Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">Get Free Quote</Link></div>
      </section>
    </>
  );
}
