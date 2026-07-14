function DestinationOptionsList({ searchType, options, onSelect }) {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-xl shadow divide-y divide-gray-100">
      {options.map((option) => (
        <button
          key={
       searchType === "country"
       ? option.name
       : `${option.latitude}-${option.longitude}`
       }
          onClick={() => onSelect(option)}
          className="w-full text-left px-4 py-3 hover:bg-gray-50 transition"
        >
          {searchType === "country" ? (
            <>
              <p className="font-semibold text-gray-800">{option.name}</p>
              <p className="text-sm text-gray-500">{option.region}</p>
            </>
          ) : (
            <>
              <p className="font-semibold text-gray-800">{option.name}</p>
              <p className="text-sm text-gray-500">
                {option.admin1 ? `${option.admin1}, ` : ""}
                {option.country}
              </p>
            </>
          )}
        </button>
      ))}
    </div>
  );
}

export default DestinationOptionsList;