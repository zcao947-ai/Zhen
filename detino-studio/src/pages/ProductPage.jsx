import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

function ShopeeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
    </svg>
  );
}

export default function ProductPage() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  if (!product) {
    return (
      <main className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-stone-900 mb-4">Product Not Found</h2>
          <Link to="/" className="text-stone-500 hover:text-stone-900 underline">
            Return to Homepage
          </Link>
        </div>
      </main>
    );
  }

  const related = allProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.type === product.type)
    )
    .slice(0, 4);

  const tagColors = {
    "Best Seller": "bg-stone-900 text-white",
    New: "bg-stone-100 text-stone-700",
    Limited: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  return (
    <main className="pt-16 lg:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-400 uppercase tracking-wider">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link
            to={product.category === "eyewear" ? "/eyewear" : "/jewelry"}
            className="hover:text-stone-900 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-stone-600">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative overflow-hidden bg-stone-50 aspect-[4/5]">
              <img
                src={product.images[activeImage]}
                alt={`${product.name} - view ${activeImage + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.tag && (
                <span className={`absolute top-4 left-4 text-xs px-3 py-1 tracking-wider uppercase ${tagColors[product.tag] || ""}`}>
                  {product.tag}
                </span>
              )}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden flex-1 aspect-square border-2 transition-colors ${
                    activeImage === i ? "border-stone-900" : "border-transparent hover:border-stone-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex-1">
              {/* Type tag */}
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-2">
                {product.category === "eyewear"
                  ? product.type.replace(/-/g, " ")
                  : product.type}
              </p>

              {/* Name + Price */}
              <h1 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-3">
                {product.name}
              </h1>
              <p className="text-2xl text-stone-800 mb-6">
                {product.price}
                <span className="text-base ml-1">₫</span>
              </p>

              {/* Colors */}
              <div className="mb-6">
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-3">
                  Color — <span className="text-stone-800">{product.colors[activeColor]}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveColor(i)}
                      className={`px-4 py-2 text-sm border transition-colors ${
                        activeColor === i
                          ? "border-stone-900 bg-stone-900 text-white"
                          : "border-stone-200 text-stone-600 hover:border-stone-600"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

              {/* Details */}
              <div className="border-t border-stone-100 pt-6 mb-8">
                <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">Product Details</p>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                      <span className="w-1 h-1 rounded-full bg-stone-400 mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── PURCHASE BUTTONS ── */}
            <div className="space-y-3">
              <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">Purchase On</p>

              {/* Shopee */}
              <a
                href={product.shopeeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-orange-500 text-white text-sm tracking-wider uppercase hover:bg-orange-600 transition-colors"
              >
                <svg viewBox="0 0 40 40" className="w-5 h-5" fill="none">
                  <rect width="40" height="40" rx="4" fill="white" fillOpacity="0.2"/>
                  <path d="M12 10h16l-2 14H14L12 10z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="16" cy="28" r="2" fill="white"/>
                  <circle cx="24" cy="28" r="2" fill="white"/>
                </svg>
                Buy on Shopee
              </a>

              {/* TikTok Shop */}
              <a
                href={product.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-stone-900 text-white text-sm tracking-wider uppercase hover:bg-stone-700 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/>
                </svg>
                Buy on TikTok Shop
              </a>

              {/* Facebook */}
              <a
                href={product.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-blue-600 text-blue-700 text-sm tracking-wider uppercase hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Contact on Facebook
              </a>
            </div>

            {/* Shipping note */}
            <p className="text-xs text-stone-400 text-center mt-4">
              Free shipping on orders over 500,000₫ · Ships within 1–3 business days
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-100">
          <h2 className="font-serif text-2xl text-stone-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
