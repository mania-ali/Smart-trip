import { useState } from "react";
import { fetchAttractions } from "../services/geminiApi";

const attractionsCache = {}; // persists across calls, keyed by coordinates

function useGemini() {
  const [attractions, setAttractions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAttractions = async (latitude, longitude) => {
    const cacheKey = `${latitude},${longitude}`;

    if (attractionsCache[cacheKey]) {
      setAttractions(attractionsCache[cacheKey]);
      return;
    }

    setLoading(true);
    setError(null);
    setAttractions(null);

    try {
      const data = await fetchAttractions(latitude, longitude);
      attractionsCache[cacheKey] = data;
      setAttractions(data);
    } catch (err) {
      setError(err.message || "Something went wrong getting attractions.");
      setAttractions(null);
    } finally {
      setLoading(false);
    }
  };

  return { attractions, loading, error, getAttractions };
}

export default useGemini;