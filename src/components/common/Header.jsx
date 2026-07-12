import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🌍 Smart Trip Planner
        </Link>

        <nav className="flex gap-8 font-medium">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/search" className="hover:text-gray-200 transition">Search</Link>
          <Link to="/saved" className="hover:text-gray-200 transition">Saved</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;