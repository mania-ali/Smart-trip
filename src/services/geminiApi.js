const BASE_URL = "https://en.wikipedia.org/w/api.php";

export async function fetchAttractions(latitude, longitude, radius = 10000, limit = 3) {
  const url = `${BASE_URL}?action=query&list=geosearch&gscoord=${latitude}|${longitude}&gsradius=${radius}&gslimit=${limit}&format=json&origin=*`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch attractions.");
  }

  const data = await response.json();
  const results = data?.query?.geosearch;

  if (!results || results.length === 0) {
    throw new Error("No attractions found nearby.");
  }

  return results.map((place) => ({
    name: place.title,
    distance: Math.round(place.dist), // meters from destination
  }));
}