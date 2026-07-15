import SaveButton from "./SaveButton";

function DestinationCard({ searchType, destination, weather, showSaveButton = true }) {
  const buildSavedItem = () => {
    if (searchType === "country") {
      return {
        id: `country-${destination.name}`,
        type: "country",
        name: destination.name,
        region: destination.region,
        borders: destination.borders,
        languages: destination.languages,
        latitude: destination.latlng?.[0],
        longitude: destination.latlng?.[1],
      };
    }

    return {
      id: `city-${destination.name}-${destination.latitude}-${destination.longitude}`,
      type: "city",
      name: destination.name,
      country: destination.country,
      admin1: destination.admin1,
      timezone: destination.timezone,
      latitude: destination.latitude,
      longitude: destination.longitude,
    };
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-7 w-full">
      <h2 className="text-2xl font-black text-stone-900 mb-5">{destination.name}</h2>

      <div className="space-y-2.5 text-sm mb-5">
        {searchType === "country" ? (
          <>
            <p className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Region</span>
              <span className="font-semibold text-stone-900">{destination.region || "N/A"}</span>
            </p>
            <p className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Borders</span>
              <span className="font-semibold text-stone-900">
                {destination.borders?.length ? destination.borders.join(", ") : "None"}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="text-stone-500 font-medium">Languages</span>
              <span className="font-semibold text-stone-900">
                {destination.languages?.length
                  ? destination.languages.map((l) => l.name).join(", ")
                  : "N/A"}
              </span>
            </p>
          </>
        ) : (
          <>
            <p className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Country</span>
              <span className="font-semibold text-stone-900">{destination.country || "N/A"}</span>
            </p>
            <p className="flex justify-between border-b border-stone-100 pb-2">
              <span className="text-stone-500 font-medium">Region</span>
              <span className="font-semibold text-stone-900">{destination.admin1 || "N/A"}</span>
            </p>
            <p className="flex justify-between">
              <span className="text-stone-500 font-medium">Timezone</span>
              <span className="font-semibold text-stone-900">{destination.timezone || "N/A"}</span>
            </p>
          </>
        )}
      </div>

      {weather && (
        <div className="bg-emerald-50 rounded-xl p-4 mb-5">
          <p className="text-xs font-bold text-emerald-900 mb-3 uppercase tracking-wide">
            Current Weather
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <p><span className="text-stone-600">Temp</span> <span className="font-bold text-stone-900">{weather.temperature_2m}°C</span></p>
            <p><span className="text-stone-600">Feels</span> <span className="font-bold text-stone-900">{weather.apparent_temperature}°C</span></p>
            <p><span className="text-stone-600">Humidity</span> <span className="font-bold text-stone-900">{weather.relative_humidity_2m}%</span></p>
            <p><span className="text-stone-600">Wind</span> <span className="font-bold text-stone-900">{weather.wind_speed_10m} km/h</span></p>
          </div>
        </div>
      )}

      {showSaveButton && <SaveButton item={buildSavedItem()} />}
    </div>
  );
}

export default DestinationCard;