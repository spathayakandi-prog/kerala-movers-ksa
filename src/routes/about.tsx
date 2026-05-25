import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Users, Award, Clock, ShieldCheck, Heart } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g4 from "@/assets/g4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Kerala Movers and Packers Al Khobar | Trusted Movers in Saudi Arabia" },
      { name: "description", content: "Learn about Kerala Movers and Packers Al Khobar — an experienced Kerala team offering safe, affordable house shifting and furniture moving in Al Khobar, Dammam & Eastern Province." },
      { property: "og:title", content: "About Kerala Movers and Packers Al Khobar" },
      { property: "og:description", content: "Experienced Kerala movers serving Al Khobar, Dammam and Eastern Province." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Users, title: "Experienced Kerala Team", desc: "Skilled, friendly workers trained in safe handling, packing and assembly." },
  { icon: ShieldCheck, title: "Safe Packing Methods", desc: "Bubble wrap, blankets, corner protectors and double-walled cartons for every move." },
  { icon: Award, title: "10+ Years of Trust", desc: "Hundreds of happy families and businesses across the Eastern Province." },
  { icon: Clock, title: "24/7 Availability", desc: "Day or night, weekends and holidays — we're always one call away." },
  { icon: Heart, title: "Affordable & Transparent", desc: "Honest pricing, no hidden charges — free quotes on WhatsApp." },
  { icon: CheckCircle2, title: "End-to-End Service", desc: "Packing, dismantling, loading, transport, unloading & reassembly." },
];

function About() {
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl">About Kerala Movers and Packers</h1>
          <p className="mt-5 text-lg text-white/85 max-w-2xl mx-auto">A trusted name in relocation across Al Khobar, Dammam and the Eastern Province of Saudi Arabia.</p>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={g1} alt="Kerala movers wrapping a sofa in protective film" className="rounded-2xl shadow-elegant" width={1024} height={1024} loading="lazy" />
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Your Move, Handled With Care</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Kerala Movers and Packers Al Khobar was founded with one mission: make moving stress-free for every family and business in Saudi Arabia. Our professional Kerala team brings years of experience in furniture packing, dismantling, loading, unloading and reassembly. We treat every box like our own.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">From compact apartments in Al Khobar to large villas in Dammam and full office relocations in Dhahran, we deliver fast, safe and affordable moving services 24/7.</p>
        </div>
      </section>
      <section className="bg-secondary/40 py-16 md:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center">Why Choose Us</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-4 shadow-gold">
                  <v.icon className="h-6 w-6 text-gold-foreground" />
                </div>
                <h3 className="font-display font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl py-16">
        <img src={g4} alt="Kerala Movers truck outside a villa in Saudi Arabia" className="rounded-2xl shadow-elegant w-full" width={1024} height={1024} loading="lazy" />
      </section>
    </>
  );
}
