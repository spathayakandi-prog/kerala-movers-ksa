import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingContacts() {
  return (
    <>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-whatsapp text-white grid place-items-center shadow-elegant animate-pulse-ring hover:scale-105 transition-smooth"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${SITE.phone}`}
        aria-label="Call"
        className="fixed bottom-5 left-5 z-50 h-14 w-14 rounded-full bg-gradient-gold text-gold-foreground grid place-items-center shadow-gold hover:scale-105 transition-smooth"
      >
        <Phone className="h-6 w-6" />
      </a>
      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur">
        <a href={`tel:${SITE.phone}`} className="py-3 text-center font-semibold bg-primary text-primary-foreground text-sm flex items-center justify-center gap-2">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a href={SITE.whatsapp} className="py-3 text-center font-semibold bg-whatsapp text-white text-sm flex items-center justify-center gap-2">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
