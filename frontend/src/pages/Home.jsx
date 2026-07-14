import { useState } from "react";
import SearchType from "../components/search/SearchType";
import SearchBar from "../components/search/SearchBar";
import DestinationOptionsList from "../components/search/DestinationOptionsList";
import DestinationCard from "../components/destination/DestinationCard";
import AttractionsList from "../components/destination/AttractionsList";
import Loader from "../components/common/Loader";
import Error from "../components/common/Error";
import useDestination from "../hooks/useDestination";
import useWeather from "../hooks/useWeather";
import useAttractions from "../hooks/useAttractions";


function Home() {
  const [searchType, setSearchType] = useState("country");
  const [options, setOptions] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectionError, setSelectionError] = useState("");

  const { loading, error, searchDestination } = useDestination();
  const { weather, loading: weatherLoading, error: weatherError, getWeather } = useWeather();
  const { attractions, loading: aiLoading, error: aiError, getAttractions } = useAttractions();

  const handleSearch = async (query) => {
    setSelectedDestination(null);
    setOptions(null);
    setSelectionError("");
    const data = await searchDestination(searchType, query);
    if (!data) return;

    setOptions(data);
  };

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setOptions(null);

    let latitude, longitude;

    if (searchType === "country") {
      if (!destination.latlng || destination.latlng.length < 2) {
         setSelectionError("");
          setSelectionError("Coordinates are unavailable for this country.");
          setOptions(null);
        console.error("Coordinates unavailable for this country.");
        return;
      }
      [latitude, longitude] = destination.latlng;
    } else {
      latitude = destination.latitude;
      longitude = destination.longitude;
    }

    getWeather(latitude, longitude);
    getAttractions(latitude, longitude);
  };

  return (
    
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Search</h1>
      <p className="text-gray-600 text-center mb-8">
        Search for a country or city to get started.
      </p>

      <SearchType searchType={searchType} setSearchType={setSearchType} />
      <SearchBar searchType={searchType} onSearch={handleSearch} />

      {loading && (
        <div className="mt-8">
          <Loader message="Searching..." />
        </div>
      )}

      {error && (
        <div className="mt-8 max-w-md mx-auto">
          <Error message={error} />
        </div>
      )}
     
    {selectionError && (
  <div className="mt-8 max-w-md mx-auto">
    <Error message={selectionError} />
  </div>
)}
  
      {options && options.length > 0 && (
        <DestinationOptionsList
          searchType={searchType}
          options={options}
          onSelect={handleSelectDestination}
        />
      )}

      {selectedDestination && weatherLoading && (
        <div className="mt-8">
          <Loader message="Loading weather..." />
        </div>
      )}

      {weatherError && (
        <div className="mt-8 max-w-md mx-auto">
          <Error message={weatherError} />
        </div>
      )}

      {selectedDestination && weather && !weatherLoading && !weatherError && (
        <div className="mt-10">
          <DestinationCard
            searchType={searchType}
            destination={selectedDestination}
            weather={weather}
          />

          <AttractionsList
            attractions={attractions}
            loading={aiLoading}
            error={aiError}
          />
        </div>
      )}
    </div>
  );
}

export default Home;