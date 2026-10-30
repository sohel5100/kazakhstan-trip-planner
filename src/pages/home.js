import { tripMeta, flights, itinerary } from '../data/trip.js?v=18';
import { formatDate, icon } from '../components/shared.js?v=18';
import { packingGroups, getPackingChecked } from './packing.js?v=18';
import { getConverterState } from './expenses.js?v=18';
import { convertCurrency } from '../data/currency.js?v=18';

const DAY_MS = 24 * 60 * 60 * 1000;

// Today's date as YYYY-MM-DD on this phone. `?today=2026-11-09` overrides it for testing.
function todayISO() {
  const override = new URLSearchParams(window.location.search).get('today');
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function daysBetween(fromISO, toISO) {
  return Math.round((new Date(`${toISO}T12:00:00`) - new Date(`${fromISO}T12:00:00`)) / DAY_MS);
}

// Minutes since midnight for the start of an event time like "04:15 PM – 05:00 PM".
function eventStartMinutes(time) {
  const match = /(\d{1,2}):(\d{2})\s*(AM|PM)/i.exec(time || '');
  if (!match) return null;
  let hours = Number(match[1]) % 12;
  if (match[3].toUpperCase() === 'PM') hours += 12;
  return hours * 60 + Number(match[2]);
}

function nextEvent(day) {
  const override = new URLSearchParams(window.location.search).get('time');
  const now = new Date();
  const nowMinutes = override && /^\d{2}:\d{2}$/.test(override)
    ? Number(override.slice(0, 2)) * 60 + Number(override.slice(3))
    : now.getHours() * 60 + now.getMinutes();
  return day.events.find(ev => (eventStartMinutes(ev.time) ?? -1) >= nowMinutes - 30) || null;
}

function packingProgress() {
  const checked = getPackingChecked();
  const all = packingGroups.flatMap(group => group.items);
  return { done: all.filter(item => checked[item.id]).length, total: all.length };
}

function statusCard(today) {
  const ob = flights.outbound;
  const ret = flights.return;
  const daysToGo = daysBetween(today, tripMeta.startDate);
  const tripDay = itinerary.find(day => day.date === today);

  // Before the trip: countdown + what to sort out
  if (daysToGo > 0) {
    const pack = packingProgress();
    const changeDeadlinePassed = daysBetween(today, '2026-11-07') < 0;
    return `
      <section class="status-card" aria-label="Trip status">
        <p class="eyebrow light">BEFORE YOU FLY</p>
        <div class="countdown">
          <strong>${daysToGo}</strong>
          <span>${daysToGo === 1 ? 'day' : 'days'} to go</span>
        </div>
        <p class="status-line">${ob.airline} ${ob.flightNumber} · ${formatDate(tripMeta.startDate, { weekday: 'short', month: 'short', day: 'numeric' })} · departs DEL T3 at ${ob.departureTime} PM</p>
        <div class="status-todo">
          <a href="#packing" data-page="packing" class="status-todo-item">
            <span>Packing</span>
            <strong>${pack.done}/${pack.total} packed</strong>
          </a>
          <a href="#travel" data-page="travel" class="status-todo-item ${changeDeadlinePassed ? '' : 'warn'}">
            <span>Ticket changes</span>
            <strong>${changeDeadlinePassed ? 'No longer allowed' : 'Until 7 Nov, 08:10 AM'}</strong>
          </a>
        </div>
      </section>
    `;
  }

  // During the trip: today's plan and what's next
  if (tripDay) {
    const upcoming = nextEvent(tripDay);
    const isLastDay = tripDay.date === tripMeta.endDate;
    return `
      <section class="status-card" aria-label="Today">
        <p class="eyebrow light">TODAY · DAY ${tripDay.dayNumber} OF ${itinerary.length} · ${formatDate(tripDay.date, { weekday: 'short', month: 'short', day: 'numeric' })}</p>
        <h2>${tripDay.title}</h2>
        ${isLastDay ? `
          <div class="next-up urgent">
            <span>Flight home</span>
            <strong>${ret.flightNumber} departs ALA T2 at ${ret.departureTime} AM</strong>
            <small>Taxi from the hotel by 04:45 AM. Web check-in beforehand.</small>
          </div>
        ` : upcoming ? `
          <div class="next-up">
            <span>Next · ${upcoming.time}</span>
            <strong>${upcoming.title}</strong>
            <small>${upcoming.description}</small>
          </div>
        ` : `
          <div class="next-up">
            <span>Done for today</span>
            <strong>Nothing else planned. Rest up!</strong>
          </div>
        `}
        <a href="#itinerary" class="status-cta" data-goto-day="${tripDay.dayNumber}">See all of today's plan →</a>
      </section>
    `;
  }

  // After the trip
  return `
    <section class="status-card" aria-label="Trip status">
      <p class="eyebrow light">TRIP COMPLETE</p>
      <h2>Welcome home!</h2>
      <p class="status-line">${tripMeta.dates} · ${itinerary.length} days in Kazakhstan.</p>
      <a href="#expenses" class="status-cta" data-page="expenses">Review what you spent →</a>
    </section>
  `;
}

export function renderHome() {
  const today = todayISO();
  const todayDay = itinerary.find(day => day.date === today);
  const converter = getConverterState();
  const convertedINR = convertCurrency(converter.amount, 'KZT', 'INR');
  const hotelDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${tripMeta.stayAreaCoordinates}`;

  return `
    <section class="welcome-row">
      <div>
        <p class="eyebrow">${tripMeta.eyebrow}</p>
        <h1>Kazakhstan<span class="title-period">.</span></h1>
        <p class="page-description">${tripMeta.destination} · ${tripMeta.dates}</p>
      </div>
      <div class="date-pill">
        ${icon('clock')}
        <span>
          <small>CONFIRMED DEPARTURE</small>
          <strong>Sat, Nov 7, 2026</strong>
        </span>
      </div>
    </section>

    ${statusCard(today)}

    <!-- Live weather: Almaty city + Shymbulak, filled in by loadHomeWeather() -->
    <section class="weather-card" id="home-weather" aria-label="Almaty weather" aria-live="polite">
      <div class="wx-now">
        <span class="wx-emoji" aria-hidden="true">🌤️</span>
        <div>
          <p class="eyebrow">ALMATY WEATHER NOW</p>
          <strong class="wx-temp">--°</strong>
          <span class="wx-cond">Loading live weather…</span>
        </div>
      </div>
    </section>

    <!-- One-tap actions you'd need on the ground (navigation lives in the tab bar) -->
    <section class="quick-actions" aria-label="Quick actions">
      <a href="${hotelDirectionsUrl}" target="_blank" rel="noreferrer" class="quick-action">
        <span class="qa-icon" aria-hidden="true">🏨</span>
        <span class="qa-text"><strong>Back to hotel</strong><small>Directions to Golden Square</small></span>
      </a>
      <a href="https://go.yandex/en_kz/" target="_blank" rel="noreferrer" class="quick-action">
        <span class="qa-icon" aria-hidden="true">🚕</span>
        <span class="qa-text"><strong>Book a taxi</strong><small>Open Yandex Go</small></span>
      </a>
    </section>

    <!-- Quick tenge → rupee converter -->
    <section class="home-converter" aria-label="Tenge to rupee converter">
      <label for="converter-input-amount">Price in tenge</label>
      <div class="home-converter-row">
        <div class="conv-input-wrap">
          <span class="conv-currency-prefix">₸</span>
          <input type="number" id="converter-input-amount" class="converter-big-input" value="${converter.amount}" min="0" step="any" inputmode="decimal" placeholder="5000" />
        </div>
        <span class="home-converter-eq" aria-hidden="true">=</span>
        <strong id="converter-inr-result">₹${convertedINR.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
      </div>
      <small>1 ₸ ≈ ₹0.21 · roughly divide by 5</small>
    </section>

    <!-- Swipeable 8-day strip -->
    <section class="day-strip-section" aria-label="All days">
      <div class="panel-heading">
        <h2>Your ${itinerary.length} days</h2>
        <a class="text-link" href="#itinerary" data-page="itinerary">Full plan <span aria-hidden="true">→</span></a>
      </div>
      <div class="day-strip">
        ${itinerary.map(day => `
          <a href="#itinerary" class="day-chip ${day.date === today ? 'is-today' : ''}" data-goto-day="${day.dayNumber}">
            <span>${formatDate(day.date, { weekday: 'short' })} ${formatDate(day.date, { day: 'numeric' })}</span>
            <strong>Day ${day.dayNumber}</strong>
            <small>${day.title}</small>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- Desktop-only artwork -->
    <section class="hero-card" aria-label="Trip introduction">
      <div class="hero-art" aria-hidden="true">
        <div class="sun-disc"></div>
        <div class="mountain mountain-back"></div>
        <div class="mountain mountain-front"></div>
        <div class="waterline"></div>
        <div class="hero-label">TIAN SHAN · 2026</div>
      </div>
      <div class="hero-copy">
        <p class="eyebrow light">14-DAY VISA-FREE (INDIAN PASSPORT)</p>
        <h2>From city spires<br />to 3,200m peaks.</h2>
        <p>Almaty base, Medeu rink, Shymbulak glacier, Charyn Canyon, and Kolsai alpine lakes.</p>
        <a href="#itinerary" class="hero-link" data-page="itinerary">
          Explore 8-day plan <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  `;
}

// Live weather (Open-Meteo, no API key): Almaty city + Shymbulak, 16-day forecast. Cached 15 min.
const WEATHER_LABELS = [
  [[0], '☀️', 'Clear'], [[1, 2], '🌤️', 'Partly cloudy'], [[3], '☁️', 'Cloudy'],
  [[45, 48], '🌫️', 'Fog'], [[51, 53, 55, 56, 57], '🌦️', 'Drizzle'],
  [[61, 63, 65, 66, 67, 80, 81, 82], '🌧️', 'Rain'], [[71, 73, 75, 77, 85, 86], '🌨️', 'Snow'],
  [[95, 96, 99], '⛈️', 'Thunderstorm']
];
const weatherLabel = code => {
  const [, emoji, label] = WEATHER_LABELS.find(([codes]) => codes.includes(code)) || [[], '🌡️', 'Unknown'];
  return { emoji, label };
};
const deg = value => `${Math.round(value)}°`;
const clock = iso => iso.slice(11, 16);

function whatToWear(feelsLike) {
  if (feelsLike <= -5) return 'Thermals, down jacket, gloves & hat';
  if (feelsLike <= 2) return 'Warm layers, insulated jacket, hat';
  if (feelsLike <= 10) return 'Sweater + jacket; layer up for evenings';
  return 'Light layers; bring a jacket for evenings';
}

let weatherCache = null;

export async function loadHomeWeather() {
  if (!document.querySelector('#home-weather')) return;
  try {
    if (!weatherCache || Date.now() - weatherCache.at > 15 * 60 * 1000) {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.24,43.128&longitude=76.95,77.081'
        + '&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m'
        + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset'
        + '&forecast_days=16&timezone=Asia%2FAlmaty';
      const [city, mountain] = await (await fetch(url)).json();
      weatherCache = { at: Date.now(), city, mountain };
    }
    const { city, mountain } = weatherCache;
    const el = document.querySelector('#home-weather');
    if (!el) return;

    const now = city.current;
    const nowLabel = weatherLabel(now.weather_code);
    const mtLabel = weatherLabel(mountain.current.weather_code);
    const daily = city.daily;
    const t = 0; // today's index

    // Forecast strip: trip days when the forecast reaches them, otherwise the next 7 days
    const tripIdx = daily.time
      .map((date, i) => (date >= tripMeta.startDate && date <= tripMeta.endDate ? i : -1))
      .filter(i => i >= 0 && daily.temperature_2m_max[i] != null && daily.temperature_2m_min[i] != null);
    const showTrip = tripIdx.length > 0;
    const idx = showTrip ? tripIdx : daily.time.slice(0, 7).map((_, i) => i).filter(i => daily.temperature_2m_max[i] != null);

    el.innerHTML = `
      <div class="wx-now">
        <span class="wx-emoji" aria-hidden="true">${nowLabel.emoji}</span>
        <div>
          <p class="eyebrow">ALMATY WEATHER NOW</p>
          <strong class="wx-temp">${deg(now.temperature_2m)}<small>C</small></strong>
          <span class="wx-cond">${nowLabel.label} · feels like ${deg(now.apparent_temperature)}</span>
        </div>
      </div>

      <div class="wx-stats">
        <div><span>Today</span><strong>${deg(daily.temperature_2m_min[t])} / ${deg(daily.temperature_2m_max[t])}</strong></div>
        <div><span>Rain chance</span><strong>${daily.precipitation_probability_max[t] ?? 0}%</strong></div>
        <div><span>Wind</span><strong>${Math.round(now.wind_speed_10m)} km/h</strong></div>
        <div><span>Humidity</span><strong>${now.relative_humidity_2m}%</strong></div>
        <div><span>Sunrise</span><strong>${clock(daily.sunrise[t])}</strong></div>
        <div><span>Sunset</span><strong>${clock(daily.sunset[t])}</strong></div>
      </div>

      <div class="wx-mountain">
        <span aria-hidden="true">🏔️</span>
        <p><strong>Shymbulak (${Math.round(mountain.elevation).toLocaleString('en-IN')}m): ${deg(mountain.current.temperature_2m)}C</strong>
        ${mtLabel.label} · feels like ${deg(mountain.current.apparent_temperature)} · today ${deg(mountain.daily.temperature_2m_min[t])} / ${deg(mountain.daily.temperature_2m_max[t])}</p>
      </div>

      <p class="wx-wear"><span>👕 Wear today:</span> ${whatToWear(now.apparent_temperature)}</p>

      <div class="wx-forecast-head">
        <h3>${showTrip ? 'Forecast for your trip' : 'Next 7 days'}</h3>
        <small>${showTrip && tripIdx.length < itinerary.length ? `${tripIdx.length} of ${itinerary.length} trip days available so far` : 'Almaty city'}</small>
      </div>
      <div class="wx-forecast">
        ${idx.map(i => {
          const label = weatherLabel(daily.weather_code[i]);
          const date = daily.time[i];
          const tripDay = itinerary.find(day => day.date === date);
          return `
            <div class="wx-day">
              <span>${formatDate(date, { weekday: 'short' })} ${formatDate(date, { day: 'numeric' })}</span>
              <b aria-hidden="true">${label.emoji}</b>
              <strong>${deg(daily.temperature_2m_max[i])}</strong>
              <small>${deg(daily.temperature_2m_min[i])}</small>
              <em>💧${daily.precipitation_probability_max[i] ?? 0}%</em>
              ${tripDay ? `<i>Day ${tripDay.dayNumber}</i>` : ''}
            </div>
          `;
        }).join('')}
      </div>
      <small class="wx-source">Live from Open-Meteo · updates every 15 min</small>
    `;
  } catch {
    const cond = document.querySelector('#home-weather .wx-cond');
    if (cond) cond.textContent = 'Weather unavailable offline. Check again when connected.';
  }
}
