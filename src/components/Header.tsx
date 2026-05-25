import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/areas/al-khobar", label: "Al Khobar" },
  { to: "/areas/dammam", label: "Dammam" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Kerala Movers and Packers Al Khobar logo" className="h-10 w-10 md:h-12 md:w-12" width={48} height={48} />
          <div className="leading-tight">
            <div className="font-display font-bold text-sm md:text-base text-primary">Kerala Movers</div>
            <div className="text-[10px] md:text-xs text-muted-foreground">& Packers Al Khobar</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth" activeProps={{ className: "text-primary font-semibold" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${SITE.phone}`} className="hidden sm:inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-4 py-2.5 rounded-lg font-semibold text-sm shadow-gold hover:opacity-90 transition-smooth">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-px mx-auto py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-md text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
