const GEOCODE_API_BASE = "https://geocoding-api.open-meteo.com/v1/search";

export async function fetchCity(name, count = 5) {
  const url = `${GEOCODE_API_BASE}?name=${encodeURIComponent(name)}&count=${count}&language=en&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`City API error: ${response.status}`);
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(`No city or area found matching "${name}".`);
  }

  return data.results;
}