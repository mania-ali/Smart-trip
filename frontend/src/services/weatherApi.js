const WEATHER_API_BASE = "https://api.open-meteo.com/v1/forecast";

export async function fetchCurrentWeather(latitude, longitude) {
  const response = await fetch(
    `${WEATHER_API_BASE}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch current weather.");
  }

  const data = await response.json();

  if (!data.current) {
    throw new Error("No current weather data available.");
  }

  return data.current;
}