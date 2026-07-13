import { useState } from "react";
import SearchType from "../components/search/SearchType";
import SearchBar from "../components/search/SearchBar";
import DestinationCard from "../components/destination/DestinationCard";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import useDestination from "../hooks/useDestination";
import useWeather from "../hooks/useWeather";

function Home() {
  const [searchType, setSearchType] = useState("country");
  const { results, loading, error, searchDestination } = useDestination();
  const { weather, loading: weatherLoading, error: weatherError, getWeather } = useWeather();

  const handleSearch = async (query) => {
    const data = await searchDestination(searchType, query);
    if (!data) return;

    let latitude, longitude;

    if (searchType === "country") {
      [latitude, longitude] = data[0].latlng;
    } else {
      latitude = data[0].latitude;
      longitude = data[0].longitude;
    }

    getWeather(latitude, longitude);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Search</h1>
      <p className="text-gray-600 text-center mb-8">
        Search for a country or city to get started.
      </p>

      <SearchType searchType={searchType} setSearchType={setSearchType} />
      <SearchBar searchType={searchType} onSearch={handleSearch} />

      {(loading || weatherLoading) && (
        <div className="mt-8">
          <Loader message="Searching..." />
        </div>
      )}

      {(error || weatherError) && (
        <div className="mt-8 max-w-md mx-auto">
          <Error message={error || weatherError} />
        </div>
      )}

      {results && weather && !loading && !error && !weatherLoading && !weatherError && (
        <div className="mt-10">
          <DestinationCard
            searchType={searchType}
            destination={results[0]}
            weather={weather}
          />
        </div>
      )}
    </div>
  );
}

export default Home;