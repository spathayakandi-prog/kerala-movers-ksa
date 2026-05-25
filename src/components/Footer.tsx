import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-px mx-auto max-w-7xl py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Kerala Movers logo" className="h-12 w-12 bg-white/95 rounded-lg p-1" width={48} height={48} />
            <div>
              <div className="font-display font-bold">Kerala Movers</div>
              <div className="text-xs text-primary-foreground/70">& Packers Al Khobar</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75 leading-relaxed">Trusted Kerala movers and packers serving Al Khobar, Dammam, Dhahran and the Eastern Province 24/7.</p>
          <div className="flex gap-3 mt-5">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-9 w-9 rounded-full bg-whatsapp grid place-items-center hover:opacity-90"><MessageCircle className="h-4 w-4" /></a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 grid place-items-center hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h3 className="font-display font-semibold mb-4 text-gold">Services</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}><Link to="/services" className="hover:text-gold">{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold mb-4 text-gold">Service Areas</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/areas/al-khobar" className="hover:text-gold">Movers in Al Khobar</Link></li>
            <li><Link to="/areas/dammam" className="hover:text-gold">Movers in Dammam</Link></li>
            <li>Dhahran</li>
            <li>Eastern Province</li>
            <li>Riyadh • Jeddah • All KSA</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display font-semibold mb-4 text-gold">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold" /><a href={`tel:${SITE.phone}`} className="hover:text-gold">{SITE.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-gold" /><a href={SITE.whatsapp} className="hover:text-gold">WhatsApp 24/7</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold" />{SITE.email}</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold" />{SITE.address}</li>
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold" />{SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Kerala Movers and Packers Al Khobar. All rights reserved.</span>
          <span>keralamoversksa.com</span>
        </div>
      </div>
    </footer>
  );
}
