function SearchType({ searchType, setSearchType }) {
  return (
    <div className="flex justify-center gap-2 mb-8">
      <button
        onClick={() => setSearchType("country")}
        className={`px-6 py-2.5 rounded-full font-medium text-sm transition ${
          searchType === "country"
            ? "bg-emerald-900 text-white"
            : "bg-white text-stone-600 border border-stone-300 hover:border-emerald-900"
        }`}
      >
        Country
      </button>

      <button
        onClick={() => setSearchType("city")}
        className={`px-6 py-2.5 rounded-full font-medium text-sm transition ${
          searchType === "city"
            ? "bg-emerald-900 text-white"
            : "bg-white text-stone-600 border border-stone-300 hover:border-emerald-900"
        }`}
      >
        City / Area
      </button>
    </div>
  );
}

export default SearchType;