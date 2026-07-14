import { fetchAttractions } from "../services/AttractionsApi";
import { useRef, useState } from "react";

//with useref, when user switches between pages, cache clears 
function useAttractions() {
  const cacheRef = useRef({});
  const [attractions, setAttractions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAttractions = async (latitude, longitude) => {
    const cacheKey = `${latitude},${longitude}`;

   if (cacheRef.current[cacheKey]) {
      setAttractions(cacheRef.current[cacheKey]);
      return;
    }

    setLoading(true);
    setError(null);
    setAttractions(null);

    try {
      const data = await fetchAttractions(latitude, longitude);
         cacheRef.current[cacheKey] = data;
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

export default useAttractions;