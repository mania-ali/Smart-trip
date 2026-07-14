import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-blue-700 text-white py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Ready to Explore?</h2>
        <p className="mt-4 mb-8">Start planning your next adventure today.</p>
        <Link to="/search" className="bg-white text-blue-700 px-8 py-4 rounded-lg">
          Start Planning
        </Link>
      </div>
    </section>
  );
}

export default CTASection;