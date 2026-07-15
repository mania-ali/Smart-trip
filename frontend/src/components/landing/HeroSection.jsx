import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="py-28 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-900 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          ✨ AI-powered travel recommendations
        </div>

        <h1 className="text-6xl font-black text-stone-900 mb-6 leading-tight tracking-tight">
          Plan Your Perfect Trip
        </h1>

        <p className="text-lg text-stone-500 mb-10 max-w-xl mx-auto">
          Discover countries, cities, weather, attractions and AI travel
          recommendations all in one place.
        </p>

        <Link
          to="/search"
          className="inline-flex items-center gap-2 bg-emerald-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition"
        >
          Start Planning
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;