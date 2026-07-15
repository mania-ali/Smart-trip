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
  className="absolute top-5 right-5 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-stone-100 text-stone-400 hover:bg-red-50 hover:text-red-500 transition"
  aria-label="Remove"
>
  ✕
</button>

     
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