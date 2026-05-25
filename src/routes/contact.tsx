import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Clock, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Kerala Movers Al Khobar | Call, WhatsApp, Get Free Quote" },
      { name: "description", content: "Contact Kerala Movers and Packers Al Khobar 24/7. Call +966 53 181 1378 or WhatsApp for free moving quotes in Al Khobar, Dammam and Eastern Province." },
      { property: "og:title", content: "Contact Kerala Movers Al Khobar" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Phone, label: "Call Us", value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
    { icon: MessageCircle, label: "WhatsApp 24/7", value: "Chat with us instantly", href: SITE.whatsapp },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Address", value: SITE.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}` },
    { icon: Clock, label: "Hours", value: "24 Hours — 7 Days a Week" },
  ];
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">Get In Touch</h1>
          <p className="mt-4 text-white/80">Call, WhatsApp or fill the form — we reply within minutes, 24/7.</p>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl py-16 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">Contact Information</h2>
          <div className="mt-6 space-y-4">
            {items.map((it) => {
              const Inner = (
                <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 shadow-card hover:shadow-elegant transition-smooth">
                  <div className="h-11 w-11 rounded-lg bg-gradient-gold grid place-items-center shadow-gold shrink-0"><it.icon className="h-5 w-5 text-gold-foreground" /></div>
                  <div><div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div><div className="font-semibold text-primary">{it.value}</div></div>
                </div>
              );
              return it.href ? <a key={it.label} href={it.href}>{Inner}</a> : <div key={it.label}>{Inner}</div>;
            })}
            <div className="flex gap-3 pt-2">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center hover:opacity-90"><Instagram className="h-5 w-5" /></a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center hover:opacity-90"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">Send an Inquiry</h2>
          <QuoteForm />
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="rounded-2xl overflow-hidden shadow-elegant border border-border">
          <iframe title="Kerala Movers office location" src={`https://www.google.com/maps?q=${encodeURIComponent("EKDA6915, 6915 Prince Thamer Ibn Abdulaziz, Al Khobar 34428, Saudi Arabia")}&output=embed`} className="w-full h-[420px]" loading="lazy" />
        </div>
      </section>
    </>
  );
}
