import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { jewelryProducts } from "../data/products";

const filters = [
  { label: "All", value: "all" },
  { label: "Earrings", value: "earrings" },
  { label: "Necklaces", value: "necklaces" },
  { label: "Rings", value: "rings" },
  { label: "Bracelets", value: "bracelets" },
];

export default function JewelryPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? jewelryProducts
      : jewelryProducts.filter((p) => p.type === activeFilter);

  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1400&q=85"
          alt="Jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-stone-200 text-xs tracking-widest uppercase mb-3">Collection</p>
            <h1 className="font-serif text-4xl lg:text-6xl text-white">Jewelry</h1>
          </div>
        </div>
      </section>

      {/* Description + Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-stone-500 max-w-xl mx-auto leading-relaxed mb-10">
          Sculptural pieces that complete your look. Each design is a considered balance of form and wearability — made to be worn together or alone.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 text-xs tracking-wider uppercase transition-all duration-200 border ${
                activeFilter === f.value
                  ? "bg-stone-900 text-white border-stone-900"
                  : "border-stone-300 text-stone-600 hover:border-stone-600 hover:text-stone-900"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-stone-400 text-sm">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-400">No products in this category.</p>
          </div>
        )}
      </section>

      {/* Eyewear Cross-sell */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Complete the Look</p>
          <h3 className="font-serif text-2xl lg:text-3xl text-white mb-6">
            Pair with Detino Eyewear
          </h3>
          <a
            href="/eyewear"
            className="inline-block border border-white text-white px-10 py-3 text-sm tracking-wider uppercase hover:bg-white hover:text-stone-900 transition-colors"
          >
            Shop Eyewear
          </a>
        </div>
      </section>
    </main>
  );
}
