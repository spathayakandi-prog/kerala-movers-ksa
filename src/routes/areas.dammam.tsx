import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { ServicesGrid } from "@/components/ServicesGrid";

export const Route = createFileRoute("/areas/dammam")({
  head: () => ({
    meta: [
      { title: "Movers and Packers in Dammam | Kerala Movers — House Shifting Dammam" },
      { name: "description", content: "Professional movers and packers in Dammam. House shifting, furniture moving, office relocation across Dammam & Eastern Province. Call +966 53 181 1378 — 24/7." },
      { property: "og:title", content: "Movers and Packers in Dammam" },
      { property: "og:url", content: "/areas/dammam" },
    ],
    links: [{ rel: "canonical", href: "/areas/dammam" }],
  }),
  component: Dammam,
});

function Dammam() {
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl">Movers and Packers in <span className="text-gold">Dammam</span></h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">From villa shifting in Al Faisaliyah to office relocation downtown — Kerala Movers is Dammam's trusted moving partner. Safe packing, careful handling, 24/7 service.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href={SITE.whatsapp} className="bg-whatsapp text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"><MessageCircle className="h-5 w-5" />WhatsApp Now</a>
            <a href={`tel:${SITE.phone}`} className="bg-gradient-gold text-gold-foreground px-6 py-3 rounded-lg font-semibold shadow-gold inline-flex items-center gap-2"><Phone className="h-5 w-5" />Call 24/7</a>
          </div>
        </div>
      </section>
      <section className="container-px mx-auto max-w-4xl py-14">
        <h2 className="font-display text-3xl font-bold text-primary">Top-Rated Packers and Movers in Dammam</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">Our experienced Kerala movers cover every neighborhood in Dammam — from apartment shifting near King Fahd Road to long-distance relocation across Saudi Arabia. With own fleet of closed trucks and skilled packing crews, we make moving stress-free.</p>
        <ul className="mt-6 space-y-2">
          {["Packers and movers Dammam","Furniture transport Dammam","Apartment moving near me","Office movers Dammam","Long-distance moving to Riyadh & Jeddah","Same-day booking on WhatsApp"].map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-whatsapp" />{p}</li>
          ))}
        </ul>
      </section>
      <section className="container-px mx-auto max-w-7xl pb-16">
        <h2 className="font-display text-3xl font-bold text-primary text-center mb-10">Our Services in Dammam</h2>
        <ServicesGrid />
      </section>
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
          <iframe title="Dammam map" src="https://www.google.com/maps?q=Dammam+Saudi+Arabia&output=embed" className="w-full h-[400px]" loading="lazy" />
        </div>
        <div className="text-center mt-8"><Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">Get Free Quote</Link></div>
      </section>
    </>
  );
}
