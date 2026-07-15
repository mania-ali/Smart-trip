import { useState } from "react";
import { fetchCountry } from "../services/countryApi";
import { fetchCity } from "../services/geocodingApi";

function useDestination() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchDestination = async (searchType, query) => {
    if (!query || !query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      let data;

      if (searchType === "country") {
        data = await fetchCountry(query.trim());
      } else if (searchType === "city") {
        data = await fetchCity(query.trim());
      } else {
        throw new Error("Invalid search type.");
      }
   
      setResults(data);
      return data; 
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      
      setResults(null);
    } finally {
      setLoading(false);
    }
  };

 
  return { results, loading, error, searchDestination };
}

export default useDestination;