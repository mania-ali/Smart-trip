import SaveButton from "./SaveButton";
import { useMemo } from "react";

function DestinationCard({ searchType, destination, weather, showSaveButton = true }) {
const savedItem = useMemo(() => {
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
}, [searchType, destination]);

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{destination.name}</h2>

      <div className="space-y-2 text-gray-700 mb-4">
        {searchType === "country" ? (
          <>
            <p>
              <span className="font-semibold">Region:</span> {destination.region || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Borders:</span>{" "}
              {destination.borders && destination.borders.length > 0
                ? destination.borders.join(", ")
                : "None"}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>{" "}
              {destination.languages && destination.languages.length > 0
                ? destination.languages.map((l) => l.name).join(", ")
                : "N/A"}
            </p>
          </>
        ) : (
          <>
            <p>
              <span className="font-semibold">Country:</span> {destination.country || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {destination.admin1 || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Timezone:</span> {destination.timezone || "N/A"}
            </p>
          </>
        )}
      </div>

      {weather && (() => {
       
        return (
          <>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold mb-2">Current Weather</h3>
            <div className="space-y-2 text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Temperature:</span> {weather.temperature_2m}°C
              </p>
              <p>
                <span className="font-semibold">Feels Like:</span> {weather.apparent_temperature}°C
              </p>
              <p>
                <span className="font-semibold">Humidity:</span> {weather.relative_humidity_2m}%
              </p>
              <p>
                <span className="font-semibold">Wind Speed:</span> {weather.wind_speed_10m} km/h
              </p>
            </div>
          </>
        );
      })()}

      {showSaveButton && <SaveButton item={savedItem} />}
    </div>
  );
}

export default DestinationCard;