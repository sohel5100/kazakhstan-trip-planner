/**
 * Live weather from Open-Meteo (free, no API key) for Almaty city and Shymbulak.
 * One request covers both places and a 16-day forecast; results are cached for 15 minutes
 * so Home and the Itinerary share a single fetch.
 */

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?latitude=43.24,43.128&longitude=76.95,77.081'
  + '&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m'
  + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset'
  + '&forecast_days=16&timezone=Asia%2FAlmaty';

const WEATHER_LABELS = [
  [[0], '☀️', 'Clear'], [[1, 2], '🌤️', 'Partly cloudy'], [[3], '☁️', 'Cloudy'],
  [[45, 48], '🌫️', 'Fog'], [[51, 53, 55, 56, 57], '🌦️', 'Drizzle'],
  [[61, 63, 65, 66, 67, 80, 81, 82], '🌧️', 'Rain'], [[71, 73, 75, 77, 85, 86], '🌨️', 'Snow'],
  [[95, 96, 99], '⛈️', 'Thunderstorm']
];

export function weatherLabel(code) {
  const [, emoji, label] = WEATHER_LABELS.find(([codes]) => codes.includes(code)) || [[], '🌡️', 'Unknown'];
  return { emoji, label };
}

let cache = null;
let inFlight = null;

export async function getWeather() {
  if (cache && Date.now() - cache.at < 15 * 60 * 1000) return cache;
  if (!inFlight) {
    inFlight = fetch(WEATHER_URL)
      .then(response => response.json())
      .then(([city, mountain]) => {
        cache = { at: Date.now(), city, mountain };
        return cache;
      })
      .finally(() => { inFlight = null; });
  }
  return inFlight;
}

// Forecast for one date (YYYY-MM-DD), or null if it isn't published yet.
export function forecastFor(location, date) {
  const i = location.daily.time.indexOf(date);
  if (i < 0 || location.daily.temperature_2m_max[i] == null) return null;
  return {
    ...weatherLabel(location.daily.weather_code[i]),
    max: location.daily.temperature_2m_max[i],
    min: location.daily.temperature_2m_min[i],
    rain: location.daily.precipitation_probability_max[i] ?? 0
  };
}
