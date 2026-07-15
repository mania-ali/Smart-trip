import { useState } from "react";

function SearchBar({ searchType, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-3 max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          searchType === "country" ? "Search for a country..." : "Search for a city or area..."
        }
        className="flex-grow border border-stone-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition"
      />
      <button
        type="submit"
        className="bg-emerald-900 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-emerald-800 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;