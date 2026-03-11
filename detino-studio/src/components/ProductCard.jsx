import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const tagColors = {
    "Best Seller": "bg-stone-900 text-white",
    New: "bg-stone-100 text-stone-700",
    Limited: "bg-amber-50 text-amber-700 border border-amber-200",
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-stone-50 aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {product.tag && (
          <span
            className={`absolute top-3 left-3 text-xs tracking-wider px-2.5 py-1 uppercase ${
              tagColors[product.tag] || "bg-stone-100 text-stone-700"
            }`}
          >
            {product.tag}
          </span>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-xs text-stone-400 uppercase tracking-wider">
          {product.category === "eyewear" ? product.type.replace("-", " ") : product.type}
        </p>
        <h3 className="text-stone-900 font-medium tracking-wide">{product.name}</h3>
        <p className="text-stone-600 text-sm">{product.price}₫</p>
      </div>
    </Link>
  );
}
