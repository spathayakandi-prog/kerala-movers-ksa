import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

const faqs = [
  { q: "How do I book Kerala Movers and Packers in Al Khobar?", a: `Booking is simple — call or WhatsApp ${SITE.phoneDisplay} 24/7. Share your pickup, destination and inventory; we'll send a free quote within minutes.` },
  { q: "Do you provide same-day house shifting in Dammam and Al Khobar?", a: "Yes, same-day moving is available across the Eastern Province subject to crew availability. WhatsApp us for instant confirmation." },
  { q: "What are your moving charges?", a: "Charges depend on home size, items, distance, packing materials and floor (with/without elevator). Studios start affordably; we always quote transparently." },
  { q: "Do you pack and unpack furniture?", a: "Yes. We provide full packing and unpacking with bubble wrap, blankets, corner protectors and durable cartons." },
  { q: "Can you dismantle and reassemble beds, wardrobes and office desks?", a: "Absolutely — our Kerala carpenters handle dismantling and reassembly as part of every full-service move." },
  { q: "Which cities do you cover?", a: "Al Khobar, Dammam, Dhahran and the entire Eastern Province. We also handle long-distance moves to Riyadh, Jeddah and other Saudi cities." },
  { q: "Do you offer office relocation services?", a: "Yes — desks, workstations, IT equipment, files and meeting rooms relocated with minimal downtime." },
  { q: "Are your movers insured and trained?", a: "Our experienced Kerala crew is trained in safe handling, packing and lifting techniques. We take responsibility for the items we move." },
  { q: "Do you work on Fridays, weekends and holidays?", a: "Yes — Kerala Movers operates 24/7, every day of the year." },
  { q: "Can I get a free quote before booking?", a: "Yes. Free quotes via WhatsApp, phone or the contact form — no obligation." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Movers FAQ | Kerala Movers and Packers Al Khobar" },
      { name: "description", content: "Frequently asked questions about house shifting, furniture moving, packing charges, booking process and service areas in Al Khobar and Dammam." },
      { property: "og:title", content: "Movers & Packers FAQ" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container-px mx-auto max-w-4xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-white/80">Everything you need to know about our moving services in Saudi Arabia.</p>
        </div>
      </section>
      <section className="container-px mx-auto max-w-3xl py-16">
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
      </section>
    </>
  );
}
