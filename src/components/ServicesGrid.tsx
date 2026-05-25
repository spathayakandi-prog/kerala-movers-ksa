import { SERVICES } from "@/lib/site";
import * as Icons from "lucide-react";

export function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {SERVICES.map((s) => {
        const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[s.icon] ?? Icons.Truck;
        return (
          <article key={s.slug} className="group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center mb-4 shadow-gold">
              <Icon className="h-6 w-6 text-gold-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg text-primary mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        );
      })}
    </div>
  );
}
