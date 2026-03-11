import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { bestSellers, newArrivals, jewelryProducts, eyewearProducts } from "../data/products";

export default function HomePage() {
  const featuredJewelry = jewelryProducts.slice(0, 4);
  const heroEyewear = eyewearProducts.slice(0, 3);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end bg-stone-100 overflow-hidden">
        {/* Background image grid */}
        <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 lg:col-span-2 relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1400&q=85"
              alt="Detino Studio hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="hidden lg:block relative overflow-hidden">
            <div className="h-1/2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="Eyewear detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
                alt="Jewelry detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">
          <div className="max-w-xl">
            <p className="text-stone-300 text-xs tracking-[0.3em] uppercase mb-4">
              New Collection 2025
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
              See the World<br />
              <em>Differently</em>
            </h1>
            <p className="text-stone-300 text-lg mb-8 leading-relaxed">
              Precision eyewear and sculptural jewelry for those who see beauty in the details.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/eyewear"
                className="bg-white text-stone-900 px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-100 transition-colors"
              >
                Shop Eyewear
              </Link>
              <Link
                to="/jewelry"
                className="border border-white text-white px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
              >
                Shop Jewelry
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-center">Scroll</span>
          <div className="h-12 w-px bg-white/30" />
        </div>
      </section>

      {/* ── BRAND STRIP ── */}
      <section className="bg-stone-900 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-2">
            {["Precision Crafted", "Modern Minimal", "Made to Wear Every Day", "Eyewear + Jewelry"].map((t) => (
              <span key={t} className="text-stone-400 text-xs tracking-widest uppercase">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-2">Featured</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-stone-900">Best Sellers</h2>
          </div>
          <Link
            to="/eyewear"
            className="text-sm tracking-wider text-stone-500 uppercase hover:text-stone-900 transition-colors hidden sm:block"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 sm:hidden text-center">
          <Link to="/eyewear" className="text-sm tracking-wider text-stone-500 uppercase hover:text-stone-900 transition-colors">
            View All →
          </Link>
        </div>
      </section>

      {/* ── HERO BANNER 2 (Find Your Frame CTA) ── */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">Guide</p>
              <h2 className="font-serif text-3xl lg:text-5xl text-stone-900 mb-6 leading-snug">
                Find the Frames<br />
                That Define You
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8 max-w-md">
                Not sure which shape suits your face? Our interactive style guide helps you discover eyewear that feels uniquely yours — from square to cat eye, oval to sunglasses.
              </p>
              <Link
                to="/find-your-frame"
                className="inline-block bg-stone-900 text-white px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-700 transition-colors"
              >
                Start the Guide
              </Link>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-3 gap-3">
              {heroEyewear.map((product, i) => (
                <div key={product.id} className={`overflow-hidden ${i === 1 ? "mt-6" : ""}`}>
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-2">Just In</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-stone-900">New Arrivals</h2>
          </div>
          <Link
            to="/eyewear"
            className="text-sm tracking-wider text-stone-500 uppercase hover:text-stone-900 transition-colors hidden sm:block"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ── JEWELRY COLLECTION ── */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">Accessories</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-4">Jewelry Collection</h2>
            <p className="text-stone-500 max-w-md mx-auto leading-relaxed">
              Sculptural pieces that complete your look. From ear cuffs to pendant necklaces, each design is made to be noticed.
            </p>
          </div>

          {/* Featured large + small grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Large featured */}
            <Link to={`/product/${featuredJewelry[0].id}`} className="group lg:col-span-1 lg:row-span-2 block">
              <div className="relative overflow-hidden bg-stone-100 aspect-[3/4] lg:aspect-auto lg:h-full min-h-[400px]">
                <img
                  src={featuredJewelry[0].images[0]}
                  alt={featuredJewelry[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs tracking-widest uppercase mb-1 text-white/70">{featuredJewelry[0].type}</p>
                  <h3 className="text-xl font-medium">{featuredJewelry[0].name}</h3>
                  <p className="text-sm text-white/80 mt-1">{featuredJewelry[0].price}₫</p>
                </div>
              </div>
            </Link>

            {/* 3 smaller */}
            {featuredJewelry.slice(1).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/jewelry"
              className="inline-block border border-stone-900 text-stone-900 px-10 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-900 hover:text-white transition-colors"
            >
              View Jewelry Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOOKBOOK CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80"
          alt="Lookbook"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <p className="text-stone-300 text-xs tracking-[0.3em] uppercase mb-4">Campaign 2025</p>
          <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6">
            The Lookbook is Here
          </h2>
          <p className="text-stone-300 mb-8 leading-relaxed">
            See how Detino Studio pieces come together in real looks. Style inspiration for every mood.
          </p>
          <Link
            to="/lookbook"
            className="inline-block bg-white text-stone-900 px-10 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-100 transition-colors"
          >
            View Lookbook
          </Link>
        </div>
      </section>
    </main>
  );
}
