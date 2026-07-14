import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Header() {
  const { token, logout } = useAuth();

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🌍 Smart Trip Planner
        </Link>

        <nav className="flex gap-8 font-medium items-center">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/search" className="hover:text-gray-200 transition">Search</Link>
          <Link to="/saved" className="hover:text-gray-200 transition">Saved</Link>

          {token ? (
            <>
              
              <button onClick={logout} className="hover:text-gray-200 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-200 transition">Login</Link>
              <Link to="/register" className="hover:text-gray-200 transition">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;