import { Link } from "react-router-dom";

const looks = [
  {
    id: 1,
    title: "Morning Light",
    subtitle: "Soft structure, effortless days",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    products: ["EW002", "JW003"],
    productNames: ["Luna Oval", "Dew Drop Necklace"],
  },
  {
    id: 2,
    title: "Golden Hour",
    subtitle: "The warm glow that follows you",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    products: ["EW004", "JW001"],
    productNames: ["Eclipse Sun", "Arc Ear Cuff"],
  },
  {
    id: 3,
    title: "City Edge",
    subtitle: "Sharp, intentional, undeniable",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    products: ["EW001", "JW002"],
    productNames: ["Astra Square", "Halo Ring Set"],
  },
  {
    id: 4,
    title: "Studio White",
    subtitle: "Clean lines, pure focus",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    products: ["EW008", "JW005"],
    productNames: ["Velvet Cat", "Crescent Studs"],
  },
  {
    id: 5,
    title: "Noir Ritual",
    subtitle: "After dark, all edges",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
    products: ["EW003", "JW006"],
    productNames: ["Siren Cat Eye", "Column Pendant"],
  },
  {
    id: 6,
    title: "Sunday Ease",
    subtitle: "Relaxed grace, full presence",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    products: ["EW007", "JW004"],
    productNames: ["Demi Oval", "Orbit Bracelet"],
  },
];

export default function LookbookPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80"
          alt="Detino Studio Lookbook"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-stone-900/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-stone-300 text-xs tracking-[0.3em] uppercase mb-3">Campaign 2025</p>
          <h1 className="font-serif text-5xl lg:text-7xl text-white">Lookbook</h1>
          <p className="text-stone-300 mt-4 max-w-md leading-relaxed">
            Six stories. Twelve pieces. One vision.
          </p>
        </div>
      </section>

      {/* Intro text */}
      <section className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-stone-600 leading-loose text-lg">
          The Detino Studio 2025 Lookbook captures the mood of the modern woman — moving between moments, always composed, never predictable. Each look is built around one eyewear piece and one jewelry accent.
        </p>
      </section>

      {/* Looks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Alternating large/small layout */}
        <div className="space-y-6">
          {/* Row 1: 1 large + 1 small */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LookCard look={looks[0]} large />
            <LookCard look={looks[1]} />
            <LookCard look={looks[2]} />
          </div>

          {/* Full-width editorial */}
          <div className="relative overflow-hidden h-72 sm:h-96">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80"
              alt="Editorial spread"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-stone-900/40 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xs tracking-[0.3em] uppercase text-stone-300 mb-2">Detino Studio 2025</p>
                <p className="font-serif text-3xl lg:text-5xl">
                  "Wear what you mean."
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LookCard look={looks[3]} />
            <LookCard look={looks[4]} large />
            <LookCard look={looks[5]} />
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Shop the Look</p>
          <h2 className="font-serif text-3xl text-stone-900 mb-8">Wear the Lookbook</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/eyewear"
              className="bg-stone-900 text-white px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-700 transition-colors"
            >
              Shop Eyewear
            </Link>
            <Link
              to="/jewelry"
              className="border border-stone-900 text-stone-900 px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-colors"
            >
              Shop Jewelry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function LookCard({ look, large }) {
  return (
    <div className={`group relative overflow-hidden bg-stone-100 ${large ? "lg:col-span-1" : ""}`}>
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={look.image}
          alt={look.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-white/60 text-xs tracking-widest uppercase mb-1">
          {look.productNames.join(" · ")}
        </p>
        <h3 className="font-serif text-xl lg:text-2xl text-white mb-0.5">{look.title}</h3>
        <p className="text-white/70 text-sm">{look.subtitle}</p>
        <div className="mt-4 flex gap-2">
          {look.products.map((id, i) => (
            <Link
              key={id}
              to={`/product/${id}`}
              className="text-xs tracking-wider uppercase text-white border border-white/50 px-3 py-1.5 hover:bg-white/20 transition-colors"
            >
              {look.productNames[i]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
