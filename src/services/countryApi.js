const COUNTRY_API_BASE = "https://countries.dev/name";

export async function fetchCountry(name) {
  const response = await fetch(`${COUNTRY_API_BASE}/${encodeURIComponent(name)}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`No country found matching "${name}".`);
    }
    throw new Error(`Country API error: ${response.status}`);
  }

  const data = await response.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(`No country found matching "${name}".`);
  }

  return data;
}