function SearchType({ searchType, setSearchType }) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => setSearchType("country")}
        className={`px-6 py-2 rounded-lg font-medium border transition ${
          searchType === "country"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
        }`}
      >
        Country
      </button>

      <button
        onClick={() => setSearchType("city")}
        className={`px-6 py-2 rounded-lg font-medium border transition ${
          searchType === "city"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
        }`}
      >
        City / Area
      </button>
    </div>
  );
}

export default SearchType;