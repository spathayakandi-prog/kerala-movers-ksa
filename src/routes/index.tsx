import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Star, ShieldCheck, Clock, Award, Truck, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import { SITE } from "@/lib/site";
import { ServicesGrid } from "@/components/ServicesGrid";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Movers and Packers in Al Khobar & Dammam | Kerala Movers KSA" },
      { name: "description", content: "Kerala Movers and Packers Al Khobar — professional house shifting, furniture moving and office relocation across Al Khobar, Dammam, Dhahran and Saudi Arabia. Call +966 53 181 1378." },
      { property: "og:title", content: "Best Movers and Packers in Al Khobar & Dammam" },
      { property: "og:description", content: "Trusted Kerala movers — 24/7 house shifting, furniture moving, office relocation in Al Khobar & Dammam." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-home.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trust = [
  { icon: ShieldCheck, label: "Safe Packing" },
  { icon: Clock, label: "24/7 Service" },
  { icon: Award, label: "10+ Years Experience" },
  { icon: Truck, label: "Own Fleet" },
];

const testimonials = [
  { name: "Ahmed A.", area: "Al Khobar", text: "Fast, careful and very professional Kerala team. Moved our 4-bedroom villa in one day without a single scratch.", stars: 5 },
  { name: "Fatima R.", area: "Dammam", text: "Best movers in Dammam — they packed everything perfectly. Highly recommended for furniture moving.", stars: 5 },
  { name: "John M.", area: "Dhahran", text: "Office relocation was seamless. Hard-working staff, reasonable price, on time.", stars: 5 },
  { name: "Sara K.", area: "Al Khobar", text: "Booked on WhatsApp at night, they came the next morning. Apartment shifting done in 4 hours!", stars: 5 },
];

const faqs = [
  { q: "Do you provide same-day movers in Al Khobar and Dammam?", a: "Yes. We offer same-day house shifting and furniture moving across Al Khobar, Dammam, Dhahran and the Eastern Province. Call or WhatsApp us 24/7." },
  { q: "How much do movers and packers cost in Al Khobar?", a: "Pricing depends on home size, distance, floor and items. Studio moves start affordably; we always provide a free, transparent quote on WhatsApp." },
  { q: "Do you pack furniture and dismantle wardrobes?", a: "Yes — our Kerala team packs all items with bubble wrap and blankets, and dismantles & reassembles beds, wardrobes and office desks." },
  { q: "Which areas do you serve in Saudi Arabia?", a: "Primarily Al Khobar, Dammam, Dhahran and the Eastern Province. We also handle long-distance moves to Riyadh, Jeddah and other Saudi cities." },
  { q: "Can I book a moving service on WhatsApp?", a: `Absolutely. Send your pickup, destination and inventory to ${SITE.phoneDisplay} on WhatsApp for an instant quote.` },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Professional Kerala movers loading furniture into a moving truck in Al Khobar Saudi Arabia" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-px mx-auto max-w-7xl py-20 md:py-32 text-white">
          <div className="max-w-3xl animate-float-in">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-wider">
              <Star className="h-3.5 w-3.5 fill-gold" /> #1 Rated Movers in Al Khobar
            </span>
            <h1 className="mt-5 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
              Best Movers and Packers in <span className="text-gold">Al Khobar</span> & Dammam
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
              Professional house shifting, furniture moving & office relocation services across Saudi Arabia. Experienced Kerala team, safe packing, 24/7 availability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-white font-semibold px-6 py-3.5 rounded-lg shadow-elegant hover:scale-[1.02] transition-smooth">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground font-semibold px-6 py-3.5 rounded-lg shadow-gold hover:scale-[1.02] transition-smooth">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-white/20 transition-smooth">
                Get Free Quote
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-white/90">
                  <t.icon className="h-5 w-5 text-gold" />{t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">Complete Moving & Packing Solutions</h2>
          <p className="mt-4 text-muted-foreground">From single-room apartment moves to full villa relocations and office shifting — we handle it all across the Eastern Province.</p>
        </div>
        <ServicesGrid />
      </section>

      {/* ABOUT */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={g2} alt="Experienced Kerala movers carrying boxes during house shifting in Al Khobar" className="rounded-2xl shadow-elegant w-full" width={1024} height={1024} loading="lazy" />
          </div>
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">Trusted Kerala Movers in Saudi Arabia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Kerala Movers and Packers Al Khobar is a leading relocation company serving Al Khobar, Dammam, Dhahran and the entire Eastern Province. Our experienced Kerala team specializes in professional furniture handling, safe packing methods, dismantling, reassembly and reliable transportation across Saudi Arabia.
            </p>
            <ul className="mt-6 space-y-3">
              {["Experienced Kerala movers team","Safe packing with premium materials","Affordable, transparent pricing","Fast same-day service","Reliable closed trucks","24/7 customer support"].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm font-medium"><CheckCircle2 className="h-5 w-5 text-whatsapp mt-0.5" /> {p}</li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3">
              <Link to="/about" className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-semibold hover:opacity-90 transition-smooth">More About Us</Link>
              <a href={SITE.whatsapp} className="bg-gradient-gold text-gold-foreground px-5 py-3 rounded-lg font-semibold shadow-gold">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Gallery</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">Our Work in Action</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[g1, g2, g3, g4].map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-xl shadow-card group">
              <img src={img} alt={`Kerala movers packing and moving furniture in Saudi Arabia ${i + 1}`} className="h-full w-full object-cover group-hover:scale-105 transition-smooth" loading="lazy" width={512} height={512} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8"><Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold">View Full Gallery →</Link></div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex gap-0.5 text-gold mb-3">{Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}</div>
                <p className="text-sm text-white/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-4 text-sm"><span className="font-semibold">{t.name}</span> <span className="text-white/60">• {t.area}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container-px mx-auto max-w-5xl py-16 md:py-24">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Free Quote</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">Get Your Moving Quote in Minutes</h2>
        </div>
        <QuoteForm />
      </section>

      {/* MAP */}
      <section className="container-px mx-auto max-w-7xl pb-16 md:pb-24">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Find Us</span>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">Serving Al Khobar & Dammam</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Visit us at Al Khobar Al Shamalia, EKDA6915, 6915 Prince Thamer Ibn Abdulaziz, Al Khobar 34428</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
          <iframe title="Kerala Movers office location" src={`https://www.google.com/maps?q=${encodeURIComponent("EKDA6915, 6915 Prince Thamer Ibn Abdulaziz, Al Khobar 34428, Saudi Arabia")}&output=embed`} className="w-full h-[400px]" loading="lazy" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-px mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-card rounded-xl border border-border p-5 shadow-card open:shadow-elegant">
                <summary className="cursor-pointer font-semibold text-primary list-none flex justify-between items-center gap-4">
                  {f.q}<span className="text-gold text-xl group-open:rotate-45 transition-smooth">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
