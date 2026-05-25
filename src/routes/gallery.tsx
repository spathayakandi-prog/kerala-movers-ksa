import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Kerala Movers and Packers Al Khobar" },
      { name: "description", content: "Photos of our moving and packing work across Al Khobar, Dammam and Eastern Province — furniture moving, house shifting and office relocation." },
      { property: "og:title", content: "Our Moving Work — Gallery" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { src: hero, alt: "Movers loading furniture into truck in Al Khobar" },
  { src: g1, alt: "Sofa being wrapped for safe transport" },
  { src: g2, alt: "Movers carrying boxes during house shifting" },
  { src: g3, alt: "Office relocation in Dammam" },
  { src: g4, alt: "Kerala Movers truck outside a Saudi villa" },
  { src: g5, alt: "Neatly packed and labeled moving boxes" },
  { src: g6, alt: "Carpenter assembling a wardrobe after move" },
];

function Gallery() {
  return (
    <>
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container-px mx-auto max-w-5xl text-center">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl">Our Work Gallery</h1>
          <p className="mt-4 text-white/80">Real moves. Real care. Across Saudi Arabia.</p>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl shadow-card group">
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-smooth" width={800} height={600} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
