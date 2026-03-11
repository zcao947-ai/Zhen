import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { eyewearProducts } from "../data/products";

const filters = [
  { label: "All", value: "all" },
  { label: "Square Frame", value: "square-frame" },
  { label: "Oval Frame", value: "oval-frame" },
  { label: "Cat Eye", value: "cat-eye" },
  { label: "Sunglasses", value: "sunglasses" },
];

export default function EyewearPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? eyewearProducts
      : eyewearProducts.filter((p) => p.type === activeFilter);

  return (
    <main className="pt-16 lg:pt-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Collection</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-4">Eyewear</h1>
          <p className="text-stone-500 leading-relaxed">
            Precision frames designed for the modern face. From clean geometric squares to soft ovals and dramatic cat eyes — every silhouette tells a story.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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

        {/* Active filter label */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-stone-400 text-sm">
            {filtered.length} style{filtered.length !== 1 ? "s" : ""}
            {activeFilter !== "all" ? ` in ${filters.find((f) => f.value === activeFilter)?.label}` : ""}
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-400">No products found for this filter.</p>
          </div>
        )}
      </section>

      {/* Frame Guide CTA */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-2">Not sure?</p>
              <h3 className="font-serif text-2xl text-stone-900">Find Your Perfect Frame Shape</h3>
            </div>
            <a
              href="/find-your-frame"
              className="shrink-0 bg-stone-900 text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-stone-700 transition-colors"
            >
              Take the Guide
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
