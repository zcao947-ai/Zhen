import { Link } from "react-router-dom";

const values = [
  {
    title: "Precision",
    description:
      "Every frame is engineered for fit, proportion, and longevity. We believe good design is invisible — you simply feel it.",
  },
  {
    title: "Intention",
    description:
      "Nothing is arbitrary. Every curve, width, and finish is considered in relation to the whole — and to the face that will wear it.",
  },
  {
    title: "Accessibility",
    description:
      "Premium aesthetics at honest prices. We believe beautiful design shouldn't be a luxury reserved for the few.",
  },
  {
    title: "Restraint",
    description:
      "We make less, but we make it right. A focused collection of pieces that work harder and last longer.",
  },
];

const team = [
  {
    name: "Linh Nguyen",
    role: "Founder & Creative Director",
    bio: "Former fashion editor turned eyewear designer. Linh founded Detino Studio after noticing a gap between accessible pricing and elevated aesthetic in Vietnamese eyewear.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Minh Tran",
    role: "Head of Design",
    bio: "Trained in product design, Minh leads the development of every frame silhouette — balancing structure, wearability, and modern visual language.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "An Pham",
    role: "Jewelry & Accessories",
    bio: "An brings a fine-jewelry sensibility to Detino's accessory line, translating architectural ideas into wearable sculpture.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 lg:h-[520px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80"
          alt="About Detino Studio"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-stone-900/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-stone-300 text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h1 className="font-serif text-5xl lg:text-7xl text-white max-w-xl leading-tight">
              Crafted for<br />
              <em>Those Who Notice</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">Who We Are</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-6 leading-snug">
              A Vietnamese fashion brand built on quiet confidence
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Detino Studio was founded with a single belief: that beautifully designed eyewear and jewelry should be available to everyone who appreciates them — not just those with luxury budgets.
              </p>
              <p>
                Based in Vietnam, we design every piece with a global sensibility and a local soul. Our eyewear draws from the clean lines of European minimalism, while our jewelry reflects the sculptural elegance of contemporary art.
              </p>
              <p>
                We are a small team of designers and storytellers who take our work seriously, but never too seriously. We believe fashion is a form of communication — and every frame we make is a sentence worth reading.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80"
              alt="Eyewear detail"
              className="w-full aspect-[3/4] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"
              alt="Jewelry detail"
              className="w-full aspect-[3/4] object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-stone-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={value.title} className="group">
                <div className="text-stone-200 font-serif text-6xl mb-4 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{value.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-14">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-3">The Makers</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-stone-900">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name}>
              <div className="overflow-hidden bg-stone-50 aspect-[3/4] mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-stone-400 text-xs tracking-widest uppercase mb-1">{member.role}</p>
              <h3 className="font-serif text-xl text-stone-900 mb-2">{member.name}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "2021", label: "Founded" },
              { num: "14+", label: "Frame Styles" },
              { num: "6+", label: "Jewelry Pieces" },
              { num: "10k+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl text-white mb-2">{stat.num}</p>
                <p className="text-stone-400 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-stone-400 text-xs tracking-widest uppercase mb-4">Start Exploring</p>
          <h2 className="font-serif text-3xl lg:text-4xl text-stone-900 mb-6">
            Find Frames That Are Unmistakably You
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/eyewear"
              className="bg-stone-900 text-white px-8 py-3.5 text-sm tracking-wider uppercase hover:bg-stone-700 transition-colors"
            >
              Shop Eyewear
            </Link>
            <Link
              to="/find-your-frame"
              className="border border-stone-300 text-stone-700 px-8 py-3.5 text-sm tracking-wider uppercase hover:border-stone-900 hover:text-stone-900 transition-colors"
            >
              Find My Frame
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
