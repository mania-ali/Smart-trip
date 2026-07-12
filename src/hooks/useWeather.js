import { useState } from "react";
import { fetchCurrentWeather } from "../services/weatherApi";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async (latitude, longitude) => {
    if (latitude == null || longitude == null) {
      setError("Missing coordinates for weather lookup.");
      return;
    }

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const data = await fetchCurrentWeather(latitude, longitude);
        console.log("returned data:", data);
      setWeather(data); // FetchCurrentWeather returns the full response, we only need `.current`
    } catch (err) {
      setError(err.message || "Something went wrong fetching weather.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  

  return { weather, loading, error, getWeather };
}

export default useWeather;