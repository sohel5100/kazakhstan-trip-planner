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
      <a href="https://2gis.kz/almaty" target="_blank" rel="noreferrer" class="quick-action">
        <span class="qa-icon" aria-hidden="true">🗺️</span>
        <span class="qa-text"><strong>Offline map</strong><small>Open 2GIS Almaty</small></span>
      </a>
      <a href="https://open-meteo.com/en/docs#latitude=43.24&longitude=76.95" target="_blank" rel="noreferrer" class="quick-action" id="home-weather">
        <span class="qa-icon" aria-hidden="true">🌤️</span>
        <span class="qa-text"><strong>Almaty weather</strong><small>Loading…</small></span>
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

// Live Almaty weather for the home card (Open-Meteo, no API key). Cached for 15 minutes.
const WEATHER_LABELS = [
  [[0], '☀️', 'Clear'], [[1, 2], '🌤️', 'Partly cloudy'], [[3], '☁️', 'Cloudy'],
  [[45, 48], '🌫️', 'Fog'], [[51, 53, 55, 56, 57], '🌦️', 'Drizzle'],
  [[61, 63, 65, 66, 67, 80, 81, 82], '🌧️', 'Rain'], [[71, 73, 75, 77, 85, 86], '🌨️', 'Snow'],
  [[95, 96, 99], '⛈️', 'Thunderstorm']
];
let weatherCache = null;

export async function loadHomeWeather() {
  const card = document.querySelector('#home-weather');
  if (!card) return;
  try {
    if (!weatherCache || Date.now() - weatherCache.at > 15 * 60 * 1000) {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.24&longitude=76.95'
        + '&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min'
        + '&forecast_days=1&timezone=Asia%2FAlmaty';
      const data = await (await fetch(url)).json();
      weatherCache = { at: Date.now(), data };
    }
    const { current, daily } = weatherCache.data;
    const [, emoji, label] = WEATHER_LABELS.find(([codes]) => codes.includes(current.weather_code)) || [[], '🌡️', 'Now'];
    const el = document.querySelector('#home-weather');
    if (!el) return;
    el.querySelector('.qa-icon').textContent = emoji;
    el.querySelector('strong').textContent = `Almaty ${Math.round(current.temperature_2m)}°C`;
    el.querySelector('small').textContent = `${label} · ${Math.round(daily.temperature_2m_min[0])}° to ${Math.round(daily.temperature_2m_max[0])}° today`;
  } catch {
    const el = document.querySelector('#home-weather small');
    if (el) el.textContent = 'Tap for forecast';
  }
}
