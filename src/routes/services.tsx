import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SITE } from "@/lib/site";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Moving Services in Al Khobar & Dammam | House Shifting, Furniture Moving, Office Relocation" },
      { name: "description", content: "Complete moving services in Al Khobar, Dammam & Eastern Province: house shifting, apartment moving, villa relocation, office movers, furniture packing & transport." },
      { property: "og:title", content: "Moving Services in Al Khobar & Dammam" },
      { property: "og:description", content: "House shifting, furniture moving, office relocation across Saudi Arabia." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl">Professional Moving Services in Saudi Arabia</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">From single-item furniture transport to full villa shifting — Kerala Movers handles every move in Al Khobar, Dammam, Dhahran and across the Kingdom.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href={SITE.whatsapp} className="bg-whatsapp text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"><MessageCircle className="h-5 w-5" />WhatsApp Quote</a>
            <a href={`tel:${SITE.phone}`} className="bg-gradient-gold text-gold-foreground px-6 py-3 rounded-lg font-semibold shadow-gold inline-flex items-center gap-2"><Phone className="h-5 w-5" />Call 24/7</a>
          </div>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <ServicesGrid />
      </section>
      <section className="bg-secondary/40 py-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Need a custom moving solution?</h2>
          <p className="mt-4 text-muted-foreground">Whether it's a same-day apartment shift in Al Khobar or a long-distance villa relocation to Riyadh, our Kerala team is ready 24/7.</p>
          <Link to="/contact" className="mt-6 inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">Get Free Quote</Link>
        </div>
      </section>
    </>
  );
}
