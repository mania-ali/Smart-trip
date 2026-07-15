import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Header() {
  const { token, logout } = useAuth();

  return (
    <header className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold flex items-center gap-2 text-emerald-900">
          🌍 Smart Trip Planner
        </Link>

        <nav className="flex gap-8 font-medium items-center text-stone-700">
          <Link to="/" className="hover:text-emerald-900 transition">Welcome Page</Link>
          <Link to="/search" className="hover:text-emerald-900 transition">Home</Link>
          <Link to="/saved" className="hover:text-emerald-900 transition">Saved</Link>

          {token ? (
            <>
              
              <button
                onClick={logout}
                className="bg-emerald-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-emerald-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;