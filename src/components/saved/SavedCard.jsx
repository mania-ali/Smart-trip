import { useEffect } from "react";
import DestinationCard from "../destination/DestinationCard";
import useWeather from "../../hooks/useWeather";
import Loader from "../common/Loader";
import Error from "../common/Error";
function SavedCard({ item, onRemove }) {
  const { weather, loading, error, getWeather } = useWeather();

  useEffect(() => {
    if (item.latitude != null && item.longitude != null) {
      getWeather(item.latitude, item.longitude);
    }
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => onRemove(item.id)}
        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-500 transition"
        aria-label="Remove"
      >
        ✕
      </button>

      {loading && (
        <p className="text-center text-sm text-gray-400 mt-2">Loading weather...</p>
      )}

      {error && (
        <p className="text-center text-sm text-red-500 mt-2">{error}</p>
      )}

     {loading && <Loader message="Fetching weather..." />}
      {error && <Error message={error} />}

      <DestinationCard
        searchType={item.type}
        destination={item}
        weather={weather}
        showSaveButton={false}
      />
    </div>
  );
}

export default SavedCard;