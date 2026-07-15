import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Error from "../components/common/Error";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register(email, password);
      navigate("/search");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-6">
      <div className="max-w-sm w-full">
        <div className="text-center mb-10">
          <div className="text-4xl mb-3">🌍</div>
          <h1 className="text-2xl font-black text-stone-900">Create your account</h1>
          <p className="text-stone-500 mt-1 text-sm">Start planning smarter trips</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-stone-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-stone-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition"
            required
          />

          {error && <Error message={error} />}

          <button
            type="submit"
            className="w-full bg-emerald-900 text-white py-3 rounded-full font-semibold hover:bg-emerald-800 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-stone-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-900 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;