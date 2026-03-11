import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-white text-xl font-serif tracking-widest uppercase mb-4">
              Detino Studio
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              Eyewear & Jewelry for the modern individual. Crafted with intention, worn with confidence.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/eyewear" className="text-sm hover:text-white transition-colors">Eyewear</Link></li>
              <li><Link to="/jewelry" className="text-sm hover:text-white transition-colors">Jewelry</Link></li>
              <li><Link to="/lookbook" className="text-sm hover:text-white transition-colors">Lookbook</Link></li>
              <li><Link to="/find-your-frame" className="text-sm hover:text-white transition-colors">Find Your Frame</Link></li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Brand</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>

          {/* Buy */}
          <div>
            <h4 className="text-white text-xs tracking-widest uppercase mb-5">Where to Buy</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://shopee.vn" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-orange-500 inline-block" />
                  Shopee
                </a>
              </li>
              <li>
                <a href="https://tiktokshop.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-stone-700 inline-block" />
                  TikTok Shop
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-blue-600 inline-block" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-600">
            © {new Date().getFullYear()} Detino Studio. All rights reserved.
          </p>
          <p className="text-xs text-stone-600 tracking-widest uppercase">
            Made with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
