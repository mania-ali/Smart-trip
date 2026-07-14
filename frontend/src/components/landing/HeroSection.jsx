import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Plan Your Perfect Trip</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover countries, cities, weather, attractions and AI travel
          recommendations all in one place.
        </p>
        <Link to="/search" className="bg-blue-600 text-white px-8 py-4 rounded-lg">
          Start Planning
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;